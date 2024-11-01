import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBleManager } from '../../context/BLEContext';
import DeviceList from '@/components/DeviceConnectionModal';
import CustomButton from '@/components/custombutton';
import BluetoothIcon from '@/assets/icons/bluetoothIcon';
import FocusAwareStatusBar from '@/components/FocusedStatusBar';
import { router } from 'expo-router';

const Bluetooth = () => {
    const { 
        requestPermissions, 
        scanForPeripherals, 
        allDevices, 
        connectToDevice, 
        connectedDevice, 
        checkConnectionStatus, 
        sensorIrigasi, 
        setSensorIrigasi, // Assuming you have a way to set sensorIrigasi in useBleManager
        disconnectFromDevice 
    } = useBleManager();
    
    const [isScanning, setIsScanning] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [terminalData, setTerminalData] = useState([]); // Initialize as an empty array

    // Format sensor data for display with units and type-based formatting
    const formattedData = terminalData.length > 0
        ? `N: ${Math.round(terminalData[0])} mg/kg\n` +
          `P: ${Math.round(terminalData[1])} mg/kg\n` +
          `K: ${Math.round(terminalData[2])} mg/kg\n` +
          `EC: ${Math.round(terminalData[3])} us/cm\n` +
          `Suhu: ${terminalData[4]} \u00B0C\n` +
          `Kelembapan: ${terminalData[5]} %\n` +
          `pH: ${terminalData[6]}`
        : "No Data Received";

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
                        width={20}
                        height={37}
                        color="#000000"
                    />
                </View>

                <Text className='font-NSBold'>
                    Status: {isConnected ? "Connected" : "Disconnected"}
                </Text>

                <View className='flex justify-center items-center'>
                    <CustomButton
                        title={connectedDevice ? 'Disconnect' : 'Mulai Scan'}
                        handlePress={connectedDevice ? disconnectFromDevice : scanForDevices}
                        containerStyles={`${connectedDevice ? 'bg-red-500' : 'bg-tertiary shadow-lg shadow-black'} ' w-52 h-12 rounded-xl items-center justify-center mt-10'`}
                        textStyles='font-NSBold text-white text-sm'
                    /> 
                </View>
            </View>

            <View className='flex justify-center items-center h-1/5 bg-white'>
                <DeviceList
                    devices={allDevices}
                    connectToPeripheral={connectToDevice}
                />    
            </View>

            <View className='bg-gray-100 p-4 h-1/5 w-full'>
                <ScrollView>
                    <Text className='font-NSBold text-sm'>
                        {formattedData}
                    </Text>
                </ScrollView>
            </View>

            <View className='flex justify-center items-center h-1/6 mb-10'>
                <CustomButton
                    title="Go to Pupuk Page"
                    handlePress={() => router.push('./pupuk')}
                    containerStyles='bg-primary w-52 h-10 rounded-xl justify-center items-center'
                    textStyles='font-NSBold text-white text-sm'
                />
            </View>

            <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor='#F9C405'/>
        </SafeAreaView>
    );
};

export default Bluetooth;
