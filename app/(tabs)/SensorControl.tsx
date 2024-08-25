import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  const [isOn, setIsOn] = useState(false);
  const [percentage, setPercentage] = useState(5);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    setPercentage(isOn ? 5 : 95);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.controlContainer}>
        <Text style={styles.title}>Kontrol Pompa</Text>
        <View style={styles.percentageCircle}>
          <Text style={styles.percentageText}>{percentage}%</Text>
        </View>
        <Text style={styles.statusText}>Connecting / Running</Text>
        <TouchableOpacity
          style={[styles.button, isOn ? styles.onButton : styles.offButton]}
          onPress={toggleSwitch}
        >
          <Text style={styles.buttonText}>{isOn ? 'TURNED ON' : 'TURNED OFF'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sensorContainer}>
        <TouchableOpacity style={styles.sensorButton}>
          <Text style={styles.sensorText}>Data Sensor</Text>
        </TouchableOpacity>
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
  controlContainer: {
    alignItems: 'center',
    backgroundColor: '#FFCC4D',
    paddingVertical: 40, // Increased padding to adjust content spacing
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10, // Added margin to push it away from the top
  },
  percentageCircle: {
    marginVertical: 20,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3498db',
  },
  statusText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  offButton: {
    backgroundColor: '#FF6347',
  },
  onButton: {
    backgroundColor: '#32CD32',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sensorContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  sensorButton: {
    backgroundColor: '#FFCC4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  sensorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
