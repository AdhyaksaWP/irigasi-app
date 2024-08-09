import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { PermissionsAndroid, Platform, Alert, Linking } from 'react-native';
import { BleManager, BleError, Characteristic, Device } from 'react-native-ble-plx';
import * as ExpoDevice from 'expo-device';
import base64 from 'react-native-base64';

const BleManagerContext = createContext();

const SERVICE_UUID        = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
const CHARACTERISTIC_UUID = "beb5483e-36e1-4688-b7f5-ea07361b26a8";

const BleManagerProvider = ({ children }) => {
    const bleManager = useMemo(() => new BleManager(), []);
    const [allDevices, setAllDevices] = useState([]);
    const [connectedDevice, setConnectedDevice] = useState(null);
    const [sensorIrigasi, setSensorIrigasi] = useState([]);

    const requestAndroid31Permissions = async () => {
        try {
            const bluetoothScanPermission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
                {
                    title: "Bluetooth Scan Permission",
                    message: "Bluetooth Low Energy requires Bluetooth Scan permission",
                    buttonPositive: "OK",
                }
            );
            const bluetoothConnectPermission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
                {
                    title: "Bluetooth Connect Permission",
                    message: "Bluetooth Low Energy requires Bluetooth Connect permission",
                    buttonPositive: "OK",
                }
            );
            const fineLocationPermission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Location Permission",
                    message: "Bluetooth Low Energy requires Location permission",
                    buttonPositive: "OK",
                }
            );

            const permissionsGranted =
                bluetoothScanPermission === PermissionsAndroid.RESULTS.GRANTED &&
                bluetoothConnectPermission === PermissionsAndroid.RESULTS.GRANTED &&
                fineLocationPermission === PermissionsAndroid.RESULTS.GRANTED;

            if (!permissionsGranted) {
                console.warn("Not all permissions were granted:", {
                    bluetoothScanPermission,
                    bluetoothConnectPermission,
                    fineLocationPermission,
                });
            }

            return permissionsGranted;
        } catch (err) {
            console.error("Error requesting permissions:", err);
            return false;
        }
    };

    const promptEnableBluetooth = () => {
        Alert.alert(
            "Bluetooth Diperlukan",
            "Bluetooth diperlukan untuk aplikasi ini. Mohon aktifkan Bluetooth",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Enable",
                    onPress: () => {
                        Linking.openSettings();
                    }
                }
            ],
            { cancelable: false }
        );
    };

    const checkBluetoothState = async () => {
        const permissionsGranted = await requestPermissions();
        if (!permissionsGranted) {
            console.warn("Required permissions are not granted");
            return;
        }

        bleManager.onStateChange((state) => {
            if (state === 'PoweredOn') {
                console.log('Bluetooth is on');
            } else {
                console.warn('Bluetooth is not on. Current state:', state);
                promptEnableBluetooth();
            }
        }, true);
    };

    const requestPermissions = async () => {
        if (Platform.OS === "android") {
            if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Scan Permission",
                        message: "App requires Bluetooth Scanning",
                        buttonPositive: "OK",
                    }
                );

                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } else {
                const isAndroid31PermissionGranted = await requestAndroid31Permissions();
                return isAndroid31PermissionGranted;
            }
        } else {
            return true;
        }
    };

    const isDuplicateDevice = (devices, nextDevice) =>
        devices.findIndex((device) => nextDevice.id === device.id) > -1;

    const scanForPeripherals = () => {
        bleManager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.log(error);
                return;
            }
            if (device) {
                setAllDevices((prevState) => {
                    if (!isDuplicateDevice(prevState, device)) {
                        return [...prevState, device];
                    }
                    return prevState;
                });
            }
        });
    };

    useEffect(() => {
        checkBluetoothState();
    }, []);

    const connectToDevice = async (device) => {
        try {
            const deviceConnection = await bleManager.connectToDevice(device.id);
            setConnectedDevice(deviceConnection);
            await deviceConnection.discoverAllServicesAndCharacteristics();
            bleManager.stopDeviceScan();
            startStreamingData(deviceConnection);
            console.log("Successfully connected to device:", deviceConnection.name || deviceConnection.id);
        } catch (error) {
            console.log("ERROR IN CONNECTION", error);
        }
    }

    const checkConnectionStatus = () => {
        return connectedDevice !== null;
    };

    const parseCSV = (data) => {
        return data.split(',').map(value => parseFloat(value.trim()));
    };

    const averageReadings = (data) => {
        let total = 0;
        let numberofNaN = 0;
        for (let i = 0; i<data.length; i++){
            if (!isNaN(data[i])) {
                total += data[i];
            }
            else {
                numberofNaN++;
            }
        }
        return total/(data.length - numberofNaN);
    }
    
    const onSensorIrigasiUpdate = (
        error,
        characteristic,
    ) => {
        if (error) {
            console.log(error);
            return;
        } else if (!characteristic?.value) {
            console.log("No Data Received");
            return;
        }
        const rawData = base64.decode(characteristic.value);
        try {
            const sensorValues = parseCSV(rawData);
            const averageValue = averageReadings(sensorValues);
            const updatedSensorValues = sensorValues.concat(averageValue);
            setSensorIrigasi(updatedSensorValues);
            console.log("Received Sensor Values:", sensorValues);
        } catch (e) {
            console.error("Error decoding or processing raw data:", e);
        }
    };

    useEffect(() => {
        console.log("Updated Sensor Irigasi:", sensorIrigasi);
    }, [sensorIrigasi]);

    const startStreamingData = async (device) => {
        if (device) {
            device.monitorCharacteristicForService(
                SERVICE_UUID,
                CHARACTERISTIC_UUID,
                onSensorIrigasiUpdate
            )
        } else {
            console.log("No device connected");
        }
    }

    const disconnectFromDevice = () => {
        if (connectedDevice){
            bleManager.cancelDeviceConnection(connectedDevice.id);
            setConnectedDevice(null);
            setSensorIrigasi([]);
        }
    }

    return (
        <BleManagerContext.Provider value={{
            scanForPeripherals,
            requestPermissions,
            allDevices,
            connectToDevice,
            connectedDevice,
            checkConnectionStatus,
            sensorIrigasi,
            disconnectFromDevice
        }}>
            {children}
        </BleManagerContext.Provider>
    );
};

const useBleManager = () => {
    return useContext(BleManagerContext);
};

export { BleManagerProvider, useBleManager };
