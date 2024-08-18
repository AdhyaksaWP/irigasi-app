import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from 'react-native-maps';
import CustomButton from '@/components/custombutton';
import * as Location from 'expo-location';
import { useBleManager } from '@/context/BLEContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAreaOfPolygon } from 'geolib'; // Import the geolib function to calculate area

const zoomLevel = 17;
const latitudeDelta = Math.exp(Math.log(360) - zoomLevel * Math.LN2);
const longitudeDelta = latitudeDelta;

const Pupuk = () => {
  const [mapRegion, setMapRegion] = useState([{
    latitude: -7.887,
    longitude: 110.211,
    latitudeDelta: latitudeDelta,
    longitudeDelta: longitudeDelta,
  }]);
  const { sensorIrigasi } = useBleManager();
  const [sensorData, setSensorData] = useState<String>();
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number | null>(null);
  const [drawingMode, setDrawingMode] = useState<Boolean>(false);
  const [polygonCoordinates, setPolygonCoordinates] = useState<any[]>([]);

  const handleRegionChange = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    
    setMapRegion(prevMapRegion => [
      ...prevMapRegion,
      {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }
    ]);

    if (sensorIrigasi.length > 0) {
      setSensorData((String(sensorIrigasi).replace(',', '\n')));
    }
  };

  const handleMapPress = (e: any) => {
    if (drawingMode) {
      const newCoordinate = e.nativeEvent.coordinate;
      setPolygonCoordinates(prevCoordinates => [...prevCoordinates, newCoordinate]);
    }
  };

  const handleCekLuasArea = () => {
    setDrawingMode(!drawingMode);

    if (!drawingMode && polygonCoordinates.length > 2) {
      const area = getAreaOfPolygon(polygonCoordinates);
      Alert.alert('Luas Area', `Luas area yang dipilih adalah: ${area.toFixed(2)} m²`);
    }
  };

  const handleDeleteMarker = () => {
    if (selectedMarkerIndex !== null) {
      const updatedMarkers = mapRegion.filter((_, index) => index !== selectedMarkerIndex);
      setMapRegion(updatedMarkers);
      setSelectedMarkerIndex(null); // Reset after deletion
    }
  };

  const handleRemoveArea = () => {
    setPolygonCoordinates([]);
  }

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
            region={mapRegion[0]} 
            onPress={handleMapPress} // Handle map press to add polygon points
          >
            {mapRegion.length > 1 && mapRegion.map((value, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: value.latitude,
                  longitude: value.longitude
                }}
                title={`Area ${index}`}
                description={`${sensorData}`}
                onPress={() => {
                  setSelectedMarkerIndex(index); 
                }}
              />
            ))}
            
            {polygonCoordinates.length > 0 && (
              <Polygon
                coordinates={polygonCoordinates}
                fillColor="rgba(0, 200, 0, 0.3)"
                strokeColor="rgba(0,0,0,0.5)"
              />
            )}
          </MapView>

          <View className='bg-white shadow-[rgba(0,0,15,0.5)_0px_-10px_10px_0px] h-1/2'>
            <Text className='font-NSBold p-5'>Sesi</Text>
            <View className='w-full items-center gap-y-8'>
              {selectedMarkerIndex === null && (
                <>
                  <CustomButton
                    title="Rekap Sesi"
                    handlePress={handleRegionChange}
                    containerStyles={'bg-green-500 w-52 h-10 rounded-3xl items-center justify-center mt-10'}
                    textStyles={'font-NSBold text-white text-sm'}
                  />
                  <CustomButton
                    title={drawingMode ? "Selesai Menggambar" : "Cek Luas Area"}
                    handlePress={handleCekLuasArea} // Toggle drawing mode and calculate area
                    containerStyles={'bg-purple-500 w-52 h-10 rounded-3xl items-center justify-center mt-10'}
                    textStyles={'font-NSBold text-white text-sm'}
                  />
                  <CustomButton
                    title="Hapus Area"
                    handlePress={handleRemoveArea} // Toggle drawing mode and calculate area
                    containerStyles={'bg-red-500 w-52 h-10 rounded-3xl items-center justify-center mt-10'}
                    textStyles={'font-NSBold text-white text-sm'}
                  />
                </>
              )}

              {selectedMarkerIndex !== null && (
                <>
                  <CustomButton
                    title="Hapus Marker"
                    handlePress={handleDeleteMarker}
                    containerStyles={'bg-red-500 w-52 h-10 rounded-3xl items-center justify-center mt-10'}
                    textStyles={'font-NSBold text-white text-sm'}
                  />
                  <CustomButton
                    title="Balik"
                    handlePress={() => setSelectedMarkerIndex(null)}
                    containerStyles={'bg-green-500 w-52 h-10 rounded-3xl items-center justify-center mt-10'}
                    textStyles={'font-NSBold text-white text-sm'}
                  />
                </>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pupuk;
