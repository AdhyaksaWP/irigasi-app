
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

const sensors = [
  'Sensor 1',
  'Sensor 2',
  'Sensor 3',
  'Sensor 4',
  'Sensor 5',
  'Sensor 6',
  'Sensor 7',
];

const SensorListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer} 
      onPress={() => navigation.navigate('SensorHistory', { sensor: item })}
    >
      <Text style={styles.itemText}>{item}</Text>
      <Text style={styles.detailText}>Detail</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sensors}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default SensorListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContent: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  itemText: {
    fontSize: 18,
    color: '#333333',
  },
  detailText: {
    fontSize: 16,
    color: '#007BFF',
  },
});
