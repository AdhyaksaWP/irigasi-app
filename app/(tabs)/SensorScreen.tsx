import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

interface SensorData {
    id: number;
    name: string;
    value: number;
}

const SensorScreen = () => {
    const [selectedSensor, setSelectedSensor] = useState<SensorData | null>(null);
    const [sensors, setSensors] = useState<SensorData[]>([
        { id: 1, name: 'Sensor 1', value: 23.3 },
        { id: 2, name: 'Sensor 1', value: 78.0 },
        { id: 3, name: 'Sensor 1', value: 23.3 },
        { id: 4, name: 'Sensor 1', value: 23.3 },
        { id: 5, name: 'Sensor 1', value: 23.3 },
        { id: 6, name: 'Sensor 1', value: 23.3 },
        { id: 7, name: 'Sensor 1', value: 23.3 },
    ]);

    const calculateAverage = () => {
        const total = sensors.reduce((sum, sensor) => sum + sensor.value, 0);
        return (total / sensors.length).toFixed(1);
    };

    const handleCatatPress = () => {
        if (selectedSensor) {
            const updatedSensors = sensors.map(sensor => 
                sensor.id === selectedSensor.id ? { ...sensor, value: selectedSensor.value } : sensor
            );
            setSensors(updatedSensors);
            Alert.alert('Success', `Data for ${selectedSensor.name} has been updated!`);
        } else {
            Alert.alert('No Sensor Selected', 'Please select a sensor first.');
        }
    };

    const renderItem = ({ item }: { item: SensorData }) => (
        <TouchableOpacity
            style={[
                styles.sensorItem,
                selectedSensor?.id === item.id && styles.selectedSensorItem,
            ]}
            onPress={() => setSelectedSensor(item)}
        >
            <Text style={styles.sensorId}>{item.id}</Text>
            <View style={styles.sensorDetails}>
                <Text style={[styles.sensorName, selectedSensor?.id === item.id && styles.selectedSensorName]}>
                    {item.name}
                </Text>
                <Text style={styles.sensorValue}>{item.value}</Text>
            </View>
            <View style={styles.radioCircle}>
                {selectedSensor?.id === item.id && <View style={styles.selectedRb} />}
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Sensor</Text>
            </View>
            <FlatList
                data={sensors}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.sensorList}
            />
            <View style={styles.dataContainer}>
                <Text style={styles.dataText}>Data yang Diberikan</Text>
                <Text style={styles.dataText}>{selectedSensor ? selectedSensor.value : '-'}</Text>
                <Text style={styles.dataText}>Data Average</Text>
                <Text style={styles.dataText}>{calculateAverage()}</Text>
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleCatatPress}>
                <Text style={styles.saveButtonText}>Catat</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        backgroundColor: '#FFD54F',
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    sensorList: {
        paddingBottom: 20,
    },
    sensorItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        marginBottom: 10,
    },
    selectedSensorItem: {
        backgroundColor: '#FFD54F',
    },
    sensorId: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        width: 30,
    },
    sensorDetails: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sensorName: {
        fontSize: 18,
        color: '#000',
    },
    selectedSensorName: {
        fontWeight: 'bold',
    },
    sensorValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    radioCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#000',
    },
    dataContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        paddingVertical: 10,
        backgroundColor: '#E0E0E0',
        borderRadius: 8,
        paddingHorizontal: 20,
    },
    dataText: {
        fontSize: 18,
        color: '#000',
    },
    saveButton: {
        backgroundColor: '#FFD54F',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 8,
    },
    saveButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default SensorScreen;
