import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import CustomButton from '@/components/custombutton';
import * as Location from 'expo-location';

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
                title={"Lokasi"}
              />
            )}
          </MapView>
          <View className='bg-white shadow-[rgba(0,0,15,0.5)_0px_-10px_10px_0px] h-1/2'>
            <Text className='font-NSBold p-5'>Sesi Akhir</Text>
            <View className='w-full items-center'>
              <CustomButton
                title="Rekap Sesi"
                handlePress={handleRegionChange}
                containerStyles={'bg-red-500 w-52 h-10 rounded-3xl items-center justify-center mt-10'}
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
