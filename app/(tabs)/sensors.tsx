import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { useBleManager } from '../../context/BLEContext'; // Ensure BLE context is set up
import SensorReadingsModal from '@/components/SensorReadingsModal';
import FocusAwareStatusBar from '@/components/FocusedStatusBar';
import base64 from 'react-native-base64';
// import { BleManager } from 'react-native-ble-plx';

const Sensors = () => {
  const [isOn, setIsOn] = useState(false);
  const [percentage, setPercentage] = useState(5);
  const [status, setStatus] = useState('Disconnected'); // Default status
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const { writeToDevice, connectedDevice } = useBleManager();
  // const navigation = useNavigation(); // Add navigation

  const toggleSwitch = async () => {
    const newState = !isOn;
    setIsOn(newState);
    setPercentage(newState ? 95 : 5);

    if (connectedDevice) {
      try {
        setStatus('Connecting...');
        const valueToSend = newState ? '1' : '0';
        writeToDevice(valueToSend);
        setStatus('Connected');
      } catch (error) {
        console.error('Error writing to characteristic:', error);
        setStatus('Error'); // Set status to "Error" if write fails
      }
    } else {
      setStatus('Disconnected');
      console.error('No device connected');
    }
  };

  const toggleSensorReadingModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // const handlePress = (item: { title: string, data: number }) => {
  //   setSelectedId(item.title);
  //   setDataDiberikan(item.data.toString());
  // };

  // const handleCatat = () => {
  //   if (selectedId) {
  //     const sensorIndex = sensorData.findIndex((sensor) => sensor.title === selectedId);
  //     if (sensorIndex > -1) {
  //       const updatedSensors = [...sensorData];
  //       updatedSensors[sensorIndex].data = parseFloat(dataDiberikan);
  //       setSensorData(updatedSensors);
  //       setDataDiberikan(''); // Clear the input after updating
  //     }
  //   }
  // };

  // const calculateAverage = () => {
  //   const total = sensorData.reduce((sum, sensor) => sum + sensor.data, 0);
  //   return (total / sensorData.length).toFixed(1);
  // };

  // const renderItem = ({ item }: { item: { title: string, data: number } }) => (
  //   <TouchableOpacity
  //     style={[
  //       styles.sensorItem,
  //       { backgroundColor: item.title === selectedId ? '#FFCC00' : '#f4f4f4' },
  //     ]}
  //     onPress={() => handlePress(item)}
  //   >
  //     <Text style={styles.sensorText}>{item.title}</Text>
  //     <Text style={styles.sensorValue}>{item.data}</Text>
  //   </TouchableOpacity>
  // );

  return (
    <SafeAreaView className="flex h-full bg-white justify-center px-5">
      <View className="items-center bg-yellow-400 py-10 px-5 rounded-2xl shadow-lg mb-5">
        <Text className="text-xl font-bold text-gray-800 mb-4">Kontrol Pompa</Text>

        <View className="my-5 w-28 h-28 rounded-full bg-white justify-center items-center">
          <Text className="text-4xl font-bold text-blue-500">{percentage}%</Text>
        </View>

        <Text className="text-lg mb-5 text-gray-800">{status}</Text>

        <TouchableOpacity
          className={`py-4 px-10 rounded-full ${
            isOn ? 'bg-green-500' : 'bg-red-500'
          }`}
          onPress={toggleSwitch}
        >
          <Text className="text-white text-lg font-bold">{isOn ? 'TURNED ON' : 'TURNED OFF'}</Text>
        </TouchableOpacity>
      </View>

      <View className="items-center mt-5">
        {/* Button to navigate to the sensor data page */}
        <TouchableOpacity
          className="bg-yellow-400 py-3 px-10 rounded-lg shadow-lg"
          onPress={toggleSensorReadingModal}
        >
          <Text className="text-lg font-bold text-gray-800">Data Sensor</Text>
        </TouchableOpacity>
      </View>
      <SensorReadingsModal visibility={isModalVisible} onClose={toggleSensorReadingModal}/>
      <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor='#ffffff'/>
    </SafeAreaView>
  );
};

export default Sensors;
