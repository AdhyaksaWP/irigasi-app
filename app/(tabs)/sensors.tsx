import React, { useState, useEffect, FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, TextInput } from 'react-native';
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
  const { sensorIrigasi } = useBleManager(); // Getting sensor data from BLE context
  const [sensorData, setSensorData] = useState<{ title: string, data: number }[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [dataDiberikan, setDataDiberikan] = useState<string>('');

  // Updating sensorData when BLE sensor data changes
  useEffect(() => {
    if (sensorIrigasi.length > 0) {
      const formattedData = sensorIrigasi.map((value: number, index: number) => ({
        title: index === sensorIrigasi.length - 1 ? 'Average' : `Sensor ${index + 1}`,
        data: value,
      }));
      setSensorData(formattedData);
    }
  }, [sensorIrigasi]);

  const handlePress = (item: { title: string, data: number }) => {
    setSelectedId(item.title);
    setDataDiberikan(item.data.toString());
  };

  const handleCatat = () => {
    if (selectedId) {
      const sensorIndex = sensorData.findIndex((sensor) => sensor.title === selectedId);
      if (sensorIndex > -1) {
        const updatedSensors = [...sensorData];
        updatedSensors[sensorIndex].data = parseFloat(dataDiberikan);
        setSensorData(updatedSensors);
        setDataDiberikan(''); // Clear the input after updating
      }
    }
  };

  const calculateAverage = () => {
    const total = sensorData.reduce((sum, sensor) => sum + sensor.data, 0);
    return (total / sensorData.length).toFixed(1);
  };

  const renderItem = ({ item }: { item: { title: string, data: number } }) => (
    <TouchableOpacity
      style={[
        styles.sensorItem,
        { backgroundColor: item.title === selectedId ? '#FFCC00' : '#f4f4f4' },
      ]}
      onPress={() => handlePress(item)}
    >
      <Text style={styles.sensorText}>{item.title}</Text>
      <Text style={styles.sensorValue}>{item.data}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.sensorHeader}>
        <SensorIcon color={"#000"} height={52} width={50} />
        <Text style={styles.sensorHeaderText}>Pembacaan Sensor-Sensor</Text>
      </View>
      <FlatList
        data={sensorData}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        extraData={selectedId}
        contentContainerStyle={{ paddingBottom: 16 }}
        style={{ flex: 1 }}
      />
      <View style={styles.footer}>
        <View style={styles.dataContainer}>
          <Text style={styles.label}>Data yang Diberikan</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={dataDiberikan}
            onChangeText={setDataDiberikan}
            placeholder="Enter data"
          />
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.label}>Data Average</Text>
          <Text style={styles.value}>{calculateAverage()}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCatat}>
        <Text style={styles.buttonText}>CATAT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40, // Adjusted padding to prevent overlap with status bar
  },
  sensorItem: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    borderRadius: 8,
    backgroundColor: '#f4f4f4', // default background
  },
  sensorText: {
    fontSize: 16,
    color: '#000',
  },
  sensorValue: {
    fontSize: 16,
    color: '#000',
  },
  backButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FFCC4D',
    borderRadius: 10,
    alignSelf: 'flex-start',
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  dataContainer: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFCC00',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Sensors;
