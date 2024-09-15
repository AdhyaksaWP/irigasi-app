import React, { useState, useEffect, FC } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput } from 'react-native';
import { useBleManager } from '../context/BLEContext';  // Ensure you have the BLE context available
import SensorIcon from '@/assets/icons/sensorIcon';  // Ensure the icon is available in your assets

// Sensor Item Component
const SensorItem: FC<{ title: string; data: number }> = ({ title, data }) => (
  <View className="flex-row justify-between p-4 mb-4 bg-gray-200 rounded-lg">
    <Text className="text-base text-black">{title}</Text>
    <Text className="text-base text-black">{data}</Text>
  </View>
);

// SensorReadingsModal Component
const SensorReadingsModal: FC<{ visibility:boolean, onClose: () => void }> = ({ visibility, onClose }) => {
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
        const updatedSensorReadingsModal = [...sensorData];
        updatedSensorReadingsModal[sensorIndex].data = parseFloat(dataDiberikan);
        setSensorData(updatedSensorReadingsModal);
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
      className={`flex-row justify-between p-4 mb-4 rounded-lg ${
        item.title === selectedId ? 'bg-yellow-400' : 'bg-gray-200'
      }`}
      onPress={() => handlePress(item)}
    >
      <Text className="text-base text-black">{item.title}</Text>
      <Text className="text-base text-black">{item.data}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal visible={visibility} className="flex-1 bg-white px-4 pt-10">
      <TouchableOpacity onPress={onClose} className="mb-5 p-3 bg-yellow-400 rounded-lg">
        <Text className="text-base text-black">Back</Text>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center mb-5">
        <SensorIcon color={"#000"} height={52} width={50} />
        <Text className="text-lg font-bold ml-2">Pembacaan Sensor-Sensor</Text>
      </View>
      <FlatList
        data={sensorData}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        extraData={selectedId}
        contentContainerStyle={{ paddingBottom: 16 }}
        className="flex-1"
      />
      <View className="flex-row justify-between mb-4 px-4">
        <View className="flex-1 items-center">
          <Text className="text-sm text-black mb-2">Data yang Diberikan</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-3 py-2 text-base w-full text-center"
            keyboardType="numeric"
            value={dataDiberikan}
            onChangeText={setDataDiberikan}
            placeholder="Enter data"
          />
        </View>
        <View className="flex-1 items-center">
          <Text className="text-sm text-black mb-2">Data Average</Text>
          <Text className="text-base text-black">{calculateAverage()}</Text>
        </View>
      </View>
      <TouchableOpacity className="bg-yellow-400 p-4 rounded-lg items-center mx-4 mb-4" onPress={handleCatat}>
        <Text className="text-base font-bold text-black">CATAT</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default SensorReadingsModal;