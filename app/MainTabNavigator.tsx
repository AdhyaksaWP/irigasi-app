import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './home';
import AboutScreen from './about';
import BluetoothConnectionScreen from './bluetooth';
import SensorScreen from './sensors';
import KalkulasiPupukScreen from './pupuk';

const Tab = createBottomTabNavigator();

const MainTabNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="BluetoothConnection" component={BluetoothConnectionScreen} />
        <Tab.Screen name="Sensor" component={SensorScreen} />
        <Tab.Screen name="KalkulasiPupuk" component={KalkulasiPupukScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
