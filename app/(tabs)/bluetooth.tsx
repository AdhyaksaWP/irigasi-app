import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBleManager } from '../../context/BLEContext';
import DeviceList from '@/components/DeviceConnectionModal';
import CustomButton from '@/components/custombutton';
import FocusAwareStatusBar from '@/components/FocusedStatusBar';
import { router } from 'expo-router';
import TerminalModal from '@/components/terminalModal';

const Bluetooth = () => {
    const { 
        requestPermissions, 
        scanForPeripherals, 
        allDevices, 
        connectToDevice, 
        connectedDevice, 
        checkConnectionStatus,
        disconnectFromDevice 
    } = useBleManager();
    
    const [isScanning, setIsScanning] = useState<boolean>(false);
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [IsModalVisible, setIsModalVisible] = useState<boolean>(false);
    
    const scanForDevices = async () => {
        const isPermissionEnabled = await requestPermissions();
        if (isPermissionEnabled) {
            setIsScanning(true);
            scanForPeripherals();
        }
    };

    const openModal = () => {
        setIsModalVisible(true);
    }

    const closeModal = () => {
        setIsModalVisible(false);
    }

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
            <View className='flex justify-center items-center bg-primary h-2/5 w-full rounded-b-xl gap-y-10 shadow-lg shadow-black mb-10'>
                <Text className='text-white font-NSBold'>
                    Status: {isConnected ? "Connected" : "Disconnected"}
                </Text>

                <View className='flex justify-center items-center'>
                    <CustomButton
                        title={connectedDevice ? 'Disconnect' : 'Mulai Scan'}
                        handlePress={connectedDevice ? disconnectFromDevice : scanForDevices}
                        containerStyles={`${connectedDevice ? 'bg-red-500' : 'bg-[#F9C405] shadow-lg shadow-black'} ' w-52 h-12 rounded-xl items-center justify-center mt-10'`}
                        textStyles='font-NSBold text-[#484C52] text-sm'
                    /> 
                </View>
            </View>

            <View className='flex justify-center items-center h-2/5 bg-white'>
                {isScanning && allDevices.length === 0 && (
                    <Text className="text-center text-sm font-NSBold text-gray-500">Scanning for devices...</Text>
                )}

                <DeviceList
                    devices={allDevices}
                    connectToPeripheral={connectToDevice}
                />    
            </View>

            <View className='flex flex-row justify-center items-center h-1/5 mb-10'>
                <CustomButton
                    title="Hasil Pembacaan Sensor"
                    handlePress={openModal}
                    containerStyles='bg-[#F9C405] w-56 h-14 rounded-xl justify-center items-center shadow-lg shadow-black mr-2'
                    textStyles='font-NSBold text-xs text-[#484C52]'
                />
                <CustomButton
                    title="Halaman Pupuk"
                    handlePress={() => router.push('./pupuk')}
                    containerStyles='bg-[#F9C405] w-40 h-14 rounded-xl justify-center items-center shadow-lg shadow-black'
                    textStyles='font-NSBold text-sm text-[#484C52]'
                />
            </View>

            <TerminalModal isVisible={IsModalVisible} onClose={closeModal}/>

            <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor='#31511e'/>
        </SafeAreaView>
    );
};

export default Bluetooth;
