import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/custombutton';
import { useNavigation } from '@react-navigation/native';

const ResultPage = ({ route }) => {
    const { polygonCoordinates, area, sensorData } = route.params;
    const navigation = useNavigation();

    // Calculate final result by multiplying area with sensor data
    const finalResult = area * sensorData;

    return (
        <SafeAreaView className='h-full bg-white'>
            <View className='w-full bg-primary h-20 justify-center items-center'>
                <Text className='font-NSBold text-lg'>Calculation Results</Text>
            </View>

            <ScrollView className='p-4'>
                <Text className='font-NSBold text-base mb-2'>Coordinates:</Text>
                {polygonCoordinates.map((coord, index) => (
                    <Text key={index}>{`Point ${index + 1}: Latitude ${coord.latitude}, Longitude ${coord.longitude}`}</Text>
                ))}

                <View className='mt-4'>
                    <Text className='font-NSBold text-base'>Area:</Text>
                    <Text>{`${area.toFixed(2)} m²`}</Text>
                </View>

                <View className='mt-4'>
                    <Text className='font-NSBold text-base'>Sensor Data:</Text>
                    <Text>{`${sensorData}`}</Text>
                </View>

                <View className='mt-4'>
                    <Text className='font-NSBold text-base'>Final Result (Area * Sensor Data):</Text>
                    <Text>{`${finalResult.toFixed(2)}`}</Text>
                </View>
            </ScrollView>

            <View className='p-4'>
                <CustomButton
                    title="Go Back to Bluetooth"
                    handlePress={() => navigation.navigate('Bluetooth')}
                    containerStyles='bg-primary w-full h-12 rounded-xl'
                    textStyles='font-NSBold text-white text-base'
                />
            </View>
        </SafeAreaView>
    );
};

export default ResultPage;
