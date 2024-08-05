import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('BluetoothConnection')}>
            <Text style={styles.text}>Bluetooth Connection</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Sensor')}>
            <Text style={styles.text}>Sensor</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('KalkulasiPupuk')}>
            <Text style={styles.text}>Kalkulasi Pupuk</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.text}>About</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
});

export default HomeScreen;
