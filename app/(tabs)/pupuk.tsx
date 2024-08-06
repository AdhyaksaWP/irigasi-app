import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// Calculate latitudeDelta and longitudeDelta for zoom level 18
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

  // Add useEffect to ensure mapRegion state is set correctly
  useEffect(() => {
    setMapRegion({
      latitude: -7.887,
      longitude: 110.211,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    });
  }, []);

  return (
    <SafeAreaView className='h-full flex-1'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full h-full'>
          <View className = 'w-full bg-white h-20 justify-center pl-5 border-b-4 border-b-gray-200'>
            <Text className='font-NSBold'>Map API Daerah</Text>
          </View>

          <MapView
            provider={PROVIDER_GOOGLE}
            className='w-full h-1/2 z-0 mt-1'
            region={mapRegion}
            onRegionChangeComplete={(region) => setMapRegion(region)}
          />

          <View className='bg-white rounded-t-2xl shadow-[rgba(0,0,15,0.5)_0px_-10px_10px_0px] h-1/2 z-10'>
            <Text className='font-NSBold p-5'>Rumus</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pupuk;


