import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBleManager } from '../../context/BLEContext';
import DeviceList from '@/components/DeviceConnectionModal';
import CustomButton from '@/components/custombutton';
import BluetoothIcon from '@/assets/icons/bluetoothIcon';
import FocusAwareStatusBar from '@/components/FocusedStatusBar';
import { useNavigation } from '@react-navigation/native'; // For navigation to Pupuk page

const Bluetooth = () => {
    const { 
        requestPermissions, 
        scanForPeripherals, 
        allDevices, 
        connectToDevice, 
        connectedDevice, 
        checkConnectionStatus, 
        sensorIrigasi, 
        disconnectFromDevice 
    } = useBleManager();
    
    const [isScanning, setIsScanning] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [terminalData, setTerminalData] = useState(''); // New state for terminal data
    const navigation = useNavigation(); // For navigation

    // Function to handle receiving data
    const handleReceivedData = (data) => {
        setTerminalData(prevData => prevData + '\n' + data);
    };

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
                </View>

                <Text className='font-NSBold'>
                    Status: {isConnected ? "Connected" : "Disconnected"}
                </Text>

                <View className='flex justify-center items-center'>
                    <CustomButton
                        title={connectedDevice ? 'Disconnect' : 'Mulai Scan'}
                        handlePress={connectedDevice ? disconnectFromDevice : scanForDevices}
                        containerStyles={connectedDevice ? 'bg-red-500 w-52 h-12 rounded-xl' : 'bg-tertiary shadow-lg w-52 h-12 rounded-xl'}
                        textStyles='font-NSBold text-white text-sm'
                    />
                </View>   
            </View>
            
            {/* Terminal to show received data */}
            <View className='bg-gray-100 p-4 h-1/4 w-full'>
                <ScrollView>
                    <Text className='font-NSBold text-sm'>
                        {terminalData || 'No Data Received'}
                    </Text>
                </ScrollView>
            </View>

            {/* Button to navigate to Pupuk page */}
            <View className='flex justify-center items-center mt-4'>
                <CustomButton
                    title="Go to Pupuk Page"
                    handlePress={() => navigation.navigate('Pupuk')}
                    containerStyles='bg-primary w-52 h-12 rounded-xl'
                    textStyles='font-NSBold text-white text-sm'
                />
            </View>

            <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor='#F9C405'/>
        </SafeAreaView>
    );
};

export default Bluetooth;
