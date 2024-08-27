import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';

const sensors = [
  { id: '1', name: 'Sensor 1', value: 23.3 },
  { id: '2', name: 'Sensor 2', value: 78.0 },
  { id: '3', name: 'Sensor 3', value: 23.3 },
  { id: '4', name: 'Sensor 4', value: 23.3 },
  { id: '5', name: 'Sensor 5', value: 23.3 },
  { id: '6', name: 'Sensor 6', value: 23.3 },
  { id: '7', name: 'Sensor 7', value: 23.3 },
];

const SensorScreen = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [dataDiberikan, setDataDiberikan] = useState('');

  const handlePress = (item) => {
    setSelectedId(item.id);
    setDataDiberikan(item.value.toString());
  };

  const handleCatat = () => {
    if (selectedId) {
      const sensorIndex = sensors.findIndex((sensor) => sensor.id === selectedId);
      sensors[sensorIndex].value = parseFloat(dataDiberikan);
      setDataDiberikan(''); // Clear the input after updating
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.sensorItem,
        { backgroundColor: item.id === selectedId ? '#FFCC00' : '#f4f4f4' },
      ]}
      onPress={() => handlePress(item)}
    >
      <Text style={styles.sensorText}>{item.name}</Text>
      <Text style={styles.sensorValue}>{item.value}</Text>
    </TouchableOpacity>
  );

  const calculateAverage = () => {
    const total = sensors.reduce((sum, sensor) => sum + sensor.value, 0);
    return (total / sensors.length).toFixed(1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sensors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  },
  sensorText: {
    fontSize: 16,
    color: '#000',
  },
  sensorValue: {
    fontSize: 16,
    color: '#000',
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

export default SensorScreen;
