import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SensorListScreen from '../components/SensorListScreen';
import SensorDetailScreen from '../components/SensoryHistoryScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SensorList">
                <Stack.Screen name="SensorList" component={SensorListScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SensorDetail" component={SensorDetailScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
