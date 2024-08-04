import { useMemo, useState, useEffect } from "react";
import { PermissionsAndroid, Platform, Alert, Linking } from "react-native";
import { BleError, BleManager, Characteristic, Device } from "react-native-ble-plx";
import * as ExpoDevice from "expo-device";

import base64 from "react-native-base64";

const SERVICE_UUID        = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
const CHARACTERISTIC_UUID = "beb5483e-36e1-4688-b7f5-ea07361b26a8";

interface BluetoothLowEnergyApi {
    requestPermissions(): Promise<boolean>;
    scanForPeripherals(): void;
    allDevices: Device[];
    connectToDevice: (deviceId: Device) => Promise<void>;
    connectedDevice: Device | null;
    checkConnectionStatus: () => boolean;
    sensorIrigasi: number;
}

function useBLE(): BluetoothLowEnergyApi {    
    const bleManager = useMemo(() => new BleManager(), []);
    const [allDevices, setAllDevices] = useState<Device[]>([]);
    const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
    const [sensorIrigasi, setSensorIrigasi] = useState<number>(-1);

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

    const isDuplicateDevice = (devices: Device[], nextDevice: Device) =>
        devices.findIndex((device) => nextDevice.id === device.id) > -1;

    const scanForPeripherals = () => {
        bleManager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.log(error);
                return;
            }
            if (device) {
                // console.log("Found device", device.id, device.name);

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
        if (Platform.OS === 'android' && (ExpoDevice.platformApiLevel ?? -1) >= 31) {
            checkBluetoothState();
        }
    }, []);

    const connectToDevice = async (device: Device) => {
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

    const onSensorIrigasiUpdate = (
        error: BleError | null,
        characteristic: Characteristic | null,
    ) => {
        if (error) {
            console.log(error);
            return
        } else if (!characteristic?.value) {
            console.log("No Data Received");
            return
        }
         const rawData = base64.decode(characteristic.value);
         let sensorValue;
         try {
             sensorValue = parseInt(rawData, 10);
             setSensorIrigasi(sensorValue);
             console.log("Received Sensor Value:", sensorValue);
         } catch (e) {
             console.error("Error decoding or processing raw data:", e);
         }
    }

    const startStreamingData = async (device: Device) => {
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

    return {
        scanForPeripherals,
        requestPermissions,
        allDevices,
        connectToDevice,
        connectedDevice,
        checkConnectionStatus,
        sensorIrigasi,
    };
}

export default useBLE;
