import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Sensor {
    id: number;
    name: string;
}

const SensorListScreen = () => {
    const navigation = useNavigation();

    const sensors: Sensor[] = [
        { id: 1, name: 'Sensor 1' },
        { id: 2, name: 'Sensor 2' },
        { id: 3, name: 'Sensor 3' },
        { id: 4, name: 'Sensor 4' },
        { id: 5, name: 'Sensor 5' },
        { id: 6, name: 'Sensor 6' },
        { id: 7, name: 'Sensor 7' },
    ];

    const renderItem = ({ item }: { item: Sensor }) => (
        <View style={styles.sensorItem}>
            <Text style={styles.sensorName}>{item.name}</Text>
            <TouchableOpacity
                style={styles.detailButton}
                onPress={() => navigation.navigate('SensorDetail', { sensorId: item.id, sensorName: item.name })}
            >
                <Text style={styles.detailButtonText}>Detail</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Riwayat Sensor</Text>
            <FlatList
                data={sensors}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    sensorItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    sensorName: {
        fontSize: 18,
        color: '#000',
    },
    detailButton: {
        backgroundColor: '#FFD54F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    detailButtonText: {
        fontSize: 16,
        color: '#000',
    },
});

export default SensorListScreen;
