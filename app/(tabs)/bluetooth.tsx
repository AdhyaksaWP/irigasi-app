import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBleManager } from '../../context/BLEContext';
import DeviceList from '@/components/DeviceConnectionModal';
import CustomButton from '@/components/custombutton';
import BluetoothIcon from '@/assets/icons/bluetoothIcon';

const Bluetooth = () => {
    const { requestPermissions, scanForPeripherals, allDevices, connectToDevice, connectedDevice, checkConnectionStatus, sensorIrigasi } = useBleManager();
    const [isScanning, setIsScanning] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    console.log("Calling From Bluetooth.tsx: ", sensorIrigasi);

    const scanForDevices = async () => {
        const isPermissionEnabled = await requestPermissions();
        if (isPermissionEnabled) {
            setIsScanning(true);
            scanForPeripherals();
        }
    };

    useEffect(() => {
        if (allDevices.length > 0) {
            setIsScanning(false);
        }
    }, [allDevices]);

    useEffect(() => {
        setIsConnected(checkConnectionStatus());
    }, [checkConnectionStatus]);  

    return (
        <SafeAreaView className='bg-primary h-full flex justify-center'>
            <View className='flex justify-center items-center h-10/12'>
                <View className='flex-row justify-center items-center gap-x-7'>
                    <BluetoothIcon
                        width ={26}
                        height={48}
                        color = "#000000"
                    />
                    <Text className='font-NSBold'>Bluetooth Connection</Text>
                </View>

                <Text className='font-NSBold my-5'>
                    Status: {isConnected ? "Connected" : "Disconnected"}
                </Text>

                <DeviceList
                    devices={allDevices}
                    connectToPeripheral={connectToDevice}
                />

                <CustomButton
                    title='Turn on Bluetooth'
                    handlePress={scanForDevices}
                    containerStyles='bg-tertiary w-44 h-10 rounded-3xl items-center justify-center mt-10'
                    textStyles='font-NSBold text-white text-sm'
                />        
                {isScanning && <Text>Scanning for devices...</Text>}
            </View>
        </SafeAreaView>
    );
};

export default Bluetooth;
