import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Modal, Pressable } from 'react-native';
import { useBleManager } from '../context/BLEContext';
import CustomButton from './custombutton';


const TerminalModal = ({ isVisible, onClose }) => {
    const { sensorIrigasi } = useBleManager();
    const [terminalData, setTerminalData] = useState<string>("");
    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {
        if (sensorIrigasi && sensorIrigasi.length > 0) {
            const newData = `N: ${Math.round(sensorIrigasi[0])} mg/kg\n` +
                `P: ${Math.round(sensorIrigasi[1])} mg/kg\n` +
                `K: ${Math.round(sensorIrigasi[2])} mg/kg\n` +
                `EC: ${Math.round(sensorIrigasi[3])} us/cm\n` +
                `Suhu: ${sensorIrigasi[4]} \u00B0C\n` +
                `Kelembapan: ${sensorIrigasi[5]} %\n` +
                `pH: ${sensorIrigasi[6]}\n\n`;
                `-------------------------------------------`;
                
            setTerminalData((prevData) => prevData + newData);
        }
    }, [sensorIrigasi]);

    useEffect(() => {
        if (scrollViewRef.current){
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [terminalData])

    return (
        <Modal
            visible={isVisible}
            transparent
            animationType="slide"
        >
            <View className="flex-1 justify-center items-center bg-white bg-opacity-50">
                <View className="w-4/5 h-96 bg-gray-200 rounded-lg p-6">
                    <Text className="text-lg font-bold text-center mb-4">Sensor Data</Text>
                    <ScrollView ref={scrollViewRef}>
                        <Text className="text-base leading-6 text-gray-800">{terminalData}</Text>
                    </ScrollView>
                    <CustomButton
                        title="Tutup"
                        handlePress={onClose}
                        containerStyles='bg-red-500 w-full h-14 rounded-xl justify-center items-center mt-4'
                        textStyles='font-NSBold text-white text-lg'
                    />
                </View>
            </View>
        </Modal>
    );
};

export default TerminalModal;
