import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import CustomButton from '@/components/custombutton';
import * as Location from 'expo-location';
import { useBleManager } from '@/context/BLEContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const zoomLevel = 17;
const latitudeDelta = Math.exp(Math.log(360) - zoomLevel * Math.LN2);
const longitudeDelta = latitudeDelta;

const Pupuk = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: -7.887,
    longitude: 110.211,
    latitudeDelta: latitudeDelta,
    longitudeDelta: longitudeDelta,
  });
  const [currentLocation, setCurrentLocation] = useState<Location.LocationObjectCoords | null>(null);
  const { sensorIrigasi } = useBleManager();
  const [sensorData, setSensorData] = useState();

  const handleRegionChange = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location.coords);

    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });

    if (sensorIrigasi.length > 0) {
      setSensorData(sensorIrigasi[sensorIrigasi.length - 1]);
    }
  };

  useEffect(() => {
    const saveSensorData = async () => {
      if (sensorData !== undefined) {
        try {
          const storedReadingsJson = await AsyncStorage.getItem('readings');
          const storedReadings = storedReadingsJson ? JSON.parse(storedReadingsJson) : [];

          if (storedReadings.length >= 3) {
            storedReadings.shift();
          }

          storedReadings.push(sensorData);

          await AsyncStorage.setItem('readings', JSON.stringify(storedReadings));

        } catch (error) {
          console.log(error);
        }
      }
    };

    saveSensorData();
  }, [sensorData]); 

  const getLastRecappedReadings = async () => {
    try {
      const storedReadingsJson = await AsyncStorage.getItem('readings');
      const storedReadings = storedReadingsJson ? JSON.parse(storedReadingsJson) : [];
      console.log(storedReadings);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className='h-full bg-primary flex-1'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full h-full'>
          <View className='w-full bg-white h-20 justify-center pl-5 border-b-4 border-b-gray-200'>
            <Text className='font-NSBold'>Map API Daerah</Text>
          </View>

          <MapView
            provider={PROVIDER_GOOGLE}
            className='w-full h-1/2'
            region={mapRegion}
            onRegionChangeComplete={region => setMapRegion(region)}
          >
            {currentLocation && (
              <Marker
                coordinate={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                }}
                title={String(sensorData)}
              />
            )}
          </MapView>
          <View className='bg-white shadow-[rgba(0,0,15,0.5)_0px_-10px_10px_0px] h-1/2'>
            <Text className='font-NSBold p-5'>Sesi</Text>
            <View className='w-full items-center gap-y-4'>
              <CustomButton
                title="Rekap Sesi"
                handlePress={handleRegionChange}
                containerStyles={'bg-red-500 w-52 h-10 rounded-3xl items-center justify-center mt-10'}
                textStyles={'font-NSBold text-white text-sm'}
              />
              <CustomButton
                title="Riwayat Sesi"
                handlePress={getLastRecappedReadings}
                containerStyles={'bg-green-500 w-52 h-10 rounded-3xl items-center justify-center mt-10'}
                textStyles={'font-NSBold text-white text-sm'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pupuk;
