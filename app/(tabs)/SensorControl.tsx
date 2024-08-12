import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

type Props = {
  title: string;
  connected: boolean;
  onToggle: () => void;
};

const SlidingButton: React.FC<Props> = ({ title, connected, onToggle }) => {
  return (
    <Pressable
      onPress={onToggle}
      style={[
        styles.buttonContainer,
        { backgroundColor: connected ? '#34C759' : '#FF3B30' },
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const SensorScreen: React.FC = () => {
  const [connected, setConnected] = useState(false);

  const handleToggle = () => {
    setConnected((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Text style={styles.circleText}>{connected ? '95%' : '5%'}</Text>
      </View>
      <SlidingButton
        title={connected ? 'TURNED ON' : 'TURNED OFF'}
        connected={connected}
        onToggle={handleToggle}
      />
      <Pressable style={styles.dataButton}>
        <Text style={styles.dataButtonText}>Data</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD500',
  },
  circleContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  circleText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonContainer: {
    width: 250,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dataButton: {
    width: 150,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SensorScreen;
