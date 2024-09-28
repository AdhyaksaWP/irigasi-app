import React from 'react';
import { View, Text, ScrollView, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/custombutton';

interface resultParams {
    visible: boolean;
    onClose: () => void;
    polygonCoordinates: any;
    area: number | null;
    sensorData: any;
}

const ResultModal: React.FC<resultParams> = ({ visible, onClose, polygonCoordinates, area, sensorData }) => {
    const finalResult = area ? area * parseFloat(sensorData) : 0; // Ensure sensorData is parsed

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <SafeAreaView className="flex-1 bg-white">
                <View className="h-20 justify-center items-center bg-primary">
                    <Text className="font-NSBold text-lg">Calculation Results</Text>
                </View>

                <ScrollView className="p-4">
                    <Text className="font-NSBold text-base mb-2">Coordinates:</Text>
                    {polygonCoordinates.map((coord: any, index: number) => (
                        <Text key={index}>
                            {`Point ${index + 1}: Latitude ${coord.latitude}, Longitude ${coord.longitude}`}
                        </Text>
                    ))}

                    <View className="mt-4">
                        <Text className="font-NSBold text-base">Area:</Text>
                        <Text>{`${area ? area.toFixed(2) : 'N/A'} m²`}</Text>
                    </View>

                    <View className="mt-4">
                        <Text className="font-NSBold text-base">Sensor Data:</Text>
                        <Text>{`${sensorData}`}</Text>
                    </View>

                    <View className="mt-4">
                        <Text className="font-NSBold text-base">Final Result (Area * Sensor Data):</Text>
                        <Text>{`${finalResult.toFixed(2)}`}</Text>
                    </View>
                </ScrollView>

                <View className="p-4">
                    <CustomButton
                        title="Close"
                        handlePress={onClose}
                        containerStyles="bg-primary w-full h-12 rounded-xl justify-center items-center"
                        textStyles="font-NSBold text-base"
                    />
                </View>
            </SafeAreaView>
        </Modal>
    );
};

export default ResultModal;
