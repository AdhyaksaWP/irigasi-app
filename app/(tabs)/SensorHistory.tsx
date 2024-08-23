import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface SensorDetail {
    id: number;
    name: string;
    date: string;
    time: string;
}

const SensorDetailScreen = ({ route }) => {
    const { sensorId, sensorName } = route.params;

    // Example data - In a real application, you would fetch this data based on the sensorId
    const sensorDetails: SensorDetail[] = Array(10).fill(null).map((_, index) => ({
        id: index + 1,
        name: `List item for Sensor ${sensorId}`,
        date: '20 Agustus 2024',
        time: '17:28',
    }));

    const renderItem = ({ item }: { item: SensorDetail }) => (
        <View style={styles.detailItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.dateContainer}>
                <Text style={styles.itemDate}>{item.date}</Text>
                <Text style={styles.itemTime}>{item.time}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Riwayat {sensorName}</Text>
            <FlatList
                data={sensorDetails}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD54F',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    detailItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    itemName: {
        fontSize: 18,
        color: '#000',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemDate: {
        fontSize: 16,
        color: '#000',
        marginRight: 10,
    },
    itemTime: {
        fontSize: 16,
        color: '#000',
    },
});

export default SensorDetailScreen;
