
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SensorListScreen from '../../components/SensorListScreen';
import SensorHistoryScreen from '../../components/SensoryHistoryScreen';

const Stack = createNativeStackNavigator();

const SensorHistory = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SensorList">
        <Stack.Screen 
          name="SensorList" 
          component={SensorListScreen} 
          options={{ title: 'Riwayat Sensor' }} 
        />
        <Stack.Screen 
          name="SensorHistory" 
          component={SensorHistoryScreen} 
          // options={({ route }) => ({ title: `Riwayat ${route.params.sensor}` })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SensorHistory;
