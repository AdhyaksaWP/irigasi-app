
import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const SensorHistoryScreen = ({ route }) => {
  const { sensor } = route.params;

  const historyData = Array.from({ length: 10 }, (_, index) => ({
    id: index.toString(),
    description: `Data point ${index + 1}`,
    date: '20 August 2024',
    time: '17:28',
  }));

  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.dateTimeContainer}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={historyData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default SensorHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContent: {
    padding: 16,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFCC00',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#333333',
  },
  dateTimeContainer: {
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 14,
    color: '#333333',
  },
  time: {
    fontSize: 14,
    color: '#333333',
  },
});
