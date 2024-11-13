import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from 'react-native-maps';
import * as Location from 'expo-location';
import { useBleManager } from '@/context/BLEContext';
import { getAreaOfPolygon } from 'geolib'; 
import IconButton from '@/components/iconButton';
import FocusAwareStatusBar from '@/components/FocusedStatusBar';
import { useNavigation } from '@react-navigation/native';
import ResultModal from '@/components/ResultsModal';

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
  const [area, setArea] = useState<number | null>(null); 
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    handleRegionChange();
  }, []);

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

  const handleMapPress = async (e: any) => {
    if (drawingMode) {
      const newCoordinate = e.nativeEvent.coordinate;
      setPolygonCoordinates(prevCoordinates => [...prevCoordinates, newCoordinate]);
    }
  };

  const handleCekLuasArea = async () => {
    setDrawingMode(!drawingMode);

    if (!drawingMode && polygonCoordinates.length > 2) {
      const calculatedArea = getAreaOfPolygon(polygonCoordinates);
      setArea(calculatedArea); 
      Alert.alert(
        'Luas Area', 
        `Luas area yang dipilih adalah: ${calculatedArea.toFixed(2)} m²`,
        [
          {
            text: 'Kalkulasi Pupuk',
            onPress: () => setModalVisible(true),
          }
        ]
      );
    }
  };

  const handleDeleteMarker = async () => {
    if (selectedMarkerIndex !== null) {
      const updatedMarkers = mapRegion.filter((_, index) => index !== selectedMarkerIndex);
      setMapRegion(updatedMarkers);
      setSelectedMarkerIndex(null); 
    }
  };

  const handleRemoveArea = async () => {
    setPolygonCoordinates([]);
    setArea(null); 
  };

  const handleCancelSelectMarker = async () => {
    setSelectedMarkerIndex(null);
  };

  return (
    <SafeAreaView className='h-full bg-primary flex-1'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full h-full'>
          <View className='w-full bg-primary h-20 justify-center items-center border-b-4 border-b-gray-200'>
            <Text className='font-NSBold text-white'> {/* Text color changed to white */}
              Map API Daerah
            </Text>
          </View>

          <MapView
            provider={PROVIDER_GOOGLE}
            className='w-full h-2/3'
            region={mapRegion[0]} 
            onPress={handleMapPress} 
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

          <View className='bg-white shadow-[rgba(0,0,15,0.5)_0px_-10px_10px_0px] h-1/3'>
            <View className='w-full items-center justify-center h-3/4 flex-row'>
              {selectedMarkerIndex === null && (
                <>
                    <IconButton
                      source="RekapSesiIcon"
                      color="rgb(34 197 94)"
                      iconWidth={40}
                      iconHeight={40}
                      name="Rekap Sesi"
                      containerStyles="w-20 h-20 rounded-xl border-green-500 border-4 flex items-center justify-center mx-5"
                      textStyles="font-NSBold text-green-500"
                      handlePress={handleRegionChange}
                      focused={false}
                    />
                    <IconButton
                      source={drawingMode ? "SelesaiMenggambarIcon" : "CekLuasAreaIcon"}
                      color="rgb(168 85 247)"
                      iconWidth={40}
                      iconHeight={40}
                      name={drawingMode ? "Selesai Menggambar" : "Cek Luas"}
                      containerStyles="w-20 h-20 rounded-xl border-purple-500 border-4 flex items-center justify-center mx-5"
                      textStyles="font-NSBold text-purple-500"
                      handlePress={handleCekLuasArea}
                      focused={false}
                    />
                    <IconButton
                      source="RemoveIcon"
                      color="rgb(239 68 68)"
                      iconWidth={40}
                      iconHeight={40}
                      name="Hapus Area"
                      containerStyles="w-20 h-20 rounded-xl border-red-500 border-4 flex items-center justify-center mx-5"
                      textStyles="font-NSBold text-red-500"
                      handlePress={handleRemoveArea}
                      focused={false}
                    />
                </>
              )}

              {selectedMarkerIndex !== null && (
                <>
                  <IconButton
                      source="RemoveIcon"
                      color="rgb(239 68 68)"
                      iconWidth={40}
                      iconHeight={40}
                      name="Hapus Marker"
                      containerStyles="w-20 h-20 rounded-xl border-red-500 border-4 flex items-center justify-center mx-5"
                      textStyles="font-NSBold text-red-500"
                      handlePress={handleDeleteMarker}
                      focused={false}
                    />
                    <IconButton
                      source="BalikIcon"
                      color="rgb(34 197 94)"
                      iconWidth={40}
                      iconHeight={40}
                      name="Balik"
                      containerStyles="w-20 h-20 rounded-xl border-green-500 border-4 flex items-center justify-center mx-5"
                      textStyles="font-NSBold text-green-500"
                      handlePress={handleCancelSelectMarker}
                      focused={false}
                    />
                </>
              )}
            </View>
          </View>
        </View>
      </ScrollView>

      <ResultModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        polygonCoordinates={polygonCoordinates}
        area={area}
        sensorData={sensorData}
      />

      <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor='#31511e'/>
    </SafeAreaView>
  );
};

export default Pupuk;
