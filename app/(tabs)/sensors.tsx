import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { useBleManager } from '../../context/BLEContext';
import SensorIcon from '@/assets/icons/sensorIcon';

interface SensorItemProps {
    title: string;
    data: number;
}

const SensorItem: FC<SensorItemProps> = ({ title, data }) => (
    <View className='flex-row justify-between items-center p-4 border-b border-gray-200'>
        <Text className='text-lg'>{title}</Text>
        <Text className='text-lg font-bold'>{data}</Text>
    </View>
);

const Sensors: FC = () => {
    const { sensorIrigasi } = useBleManager();
    const [sensorData, setSensorData] = useState<{ title: string, data: number }[]>([]);

    // console.log("Calling From Sensors.tsx:", sensorIrigasi);
    useEffect(() => {
        console.log("Calling From Sensors.tsx:", sensorIrigasi);
        console.log("Sensor Data before update:", sensorData);
        if (sensorIrigasi.length > 0) {
            const formattedData = sensorIrigasi.map((value: number, index: number) => ({
                title: index === sensorIrigasi.length - 1 ? 'Average' : `Sensor ${index + 1}`,
                data: value,
            }));
            console.log("Formatted Sensor Data:", formattedData);
            setSensorData(formattedData);
        }
    }, [sensorIrigasi]);

    return (
        <SafeAreaView className='bg-primary h-full justify-center'>
            <View className='p-4'>
                <View className='flex flex-row items-center justify-center gap-x-4'>
                    <SensorIcon
                        color={"#000000"}
                        height={52}
                        width={50}
                    />
                    <Text className='font-NSBold text-lg'>Pembacaan Sensor-Sensor</Text>
                </View>
                <FlatList
                    data={sensorData}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => <SensorItem title={item.title} data={item.data} />}
                />
            </View>
        </SafeAreaView>
    );
};

export default Sensors;
