import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBleManager } from '../../context/BLEContext';
import DeviceList from '@/components/DeviceConnectionModal';
import CustomButton from '@/components/custombutton';
import BluetoothIcon from '@/assets/icons/bluetoothIcon';
// import { StatusBar } from 'expo-status-bar';
import FocusAwareStatusBar from '@/components/FocusedStatusBar';

const Bluetooth = () => {
    const { 
        requestPermissions, 
        scanForPeripherals, 
        allDevices, 
        connectToDevice, 
        connectedDevice, 
        checkConnectionStatus, 
        sensorIrigasi, 
        disconnectFromDevice } = useBleManager();
    const [isScanning, setIsScanning] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    // console.log("Calling From Bluetooth.tsx: ", sensorIrigasi);

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
        <SafeAreaView className='bg-white h-full flex justify-center'>
            <View className='flex justify-center items-center bg-primary h-1/2 w-full rounded-b-xl gap-y-10 shadow-lg shadow-black mb-10'>
                <View className='flex-row justify-center items-center'>
                    <BluetoothIcon
                        width ={26}
                        height={48}
                        color = "#000000"
                    />
                    {/* <Text className='font-NSBold'>Bluetooth Connection</Text> */}
                </View>

                <Text className='font-NSBold'>
                    Status: {isConnected ? "Connected" : "Disconnected"}
                </Text>

                <View className='flex justify-center items-center'>
                    <CustomButton
                        title={connectedDevice? 'Disconnect' : 'Mulai Scan'}
                        handlePress={connectedDevice? disconnectFromDevice : scanForDevices}
                        containerStyles={`${connectedDevice? 'bg-red-500' : 'bg-tertiary shadow-lg shadow-black'} ' w-52 h-12 rounded-xl items-center justify-center mt-10'`}
                        textStyles='font-NSBold text-white text-sm'
                    /> 
                </View>   
            </View>
            <View className='flex justify-center items-center h-1/2 bg-white'>
                <DeviceList
                    devices={allDevices}
                    connectToPeripheral={connectToDevice}
                />    
            </View>

            <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor='#F9C405'/>
        </SafeAreaView>
    );
};

export default Bluetooth;
