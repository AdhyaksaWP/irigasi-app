import React, { useState, useEffect, FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useBleManager } from '../../context/BLEContext';  // Ensure you have the BLE context available
import SensorIcon from '@/assets/icons/sensorIcon';  // Ensure the icon is available in your assets

// Sensor Item Component
const SensorItem: FC<{ title: string; data: number }> = ({ title, data }) => (
  <View style={styles.sensorItem}>
    <Text style={styles.sensorItemText}>{title}</Text>
    <Text style={styles.sensorItemData}>{data}</Text>
  </View>
);

// Sensors Component
const Sensors: FC<{ onBackPress: () => void }> = ({ onBackPress }) => {
  const { sensorIrigasi } = useBleManager();
  const [sensorData, setSensorData] = useState<{ title: string, data: number }[]>([]);

  useEffect(() => {
    if (sensorIrigasi.length > 0) {
      const formattedData = sensorIrigasi.map((value: number, index: number) => ({
        title: index === sensorIrigasi.length - 1 ? 'Average' : `Sensor ${index + 1}`,
        data: value,
      }));
      setSensorData(formattedData);
    }
  }, [sensorIrigasi]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sensorContainer}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.sensorHeader}>
          <SensorIcon color={"#000"} height={52} width={50} />
          <Text style={styles.sensorHeaderText}>Pembacaan Sensor-Sensor</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  sensorContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  backButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FFCC4D',
    borderRadius: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#333',
  },
  sensorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  sensorHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  sensorItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sensorItemText: {
    fontSize: 16,
  },
  sensorItemData: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Sensors;
