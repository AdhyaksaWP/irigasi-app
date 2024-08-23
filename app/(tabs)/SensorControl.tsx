import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Switch } from 'react-native';
import * as Progress from 'react-native-progress';
import CustomButton from './CustomButton'; // Assuming you have this component
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const SensorScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [progress, setProgress] = useState(0.05); // Initial progress

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        setProgress(isEnabled ? 0.05 : 0.95); // Update progress based on the switch
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Kontrol Pompa</Text>
            <Progress.Circle 
                size={200} 
                progress={progress} 
                color={isEnabled ? '#00C853' : '#FF5252'} 
                thickness={10} 
                showsText 
                textStyle={styles.progressText}
                formatText={() => `${Math.round(progress * 100)} %`}
            />
            <Text style={styles.statusText}>Connecting / Running</Text>
            <CustomButton
                title={isEnabled ? 'TURNED ON' : 'TURNED OFF'}
                handlePress={toggleSwitch}
                containerStyles={`${isEnabled ? 'bg-green-500' : 'bg-red-500'} w-52 h-10 rounded-3xl items-center justify-center mt-10`}
                textStyles='font-NSBold text-white text-sm'
            />
            <View style={styles.bottomNav}>
                <Text style={styles.dataSensorButton}>Data Sensor</Text>
            </View>
        </SafeAreaView>
    );
};

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Sensor" component={SensorScreen} />
                {/* Other tabs */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFD54F',
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    progressText: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    statusText: {
        fontSize: 18,
        color: '#616161',
        marginVertical: 10,
    },
    bottomNav: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        alignItems: 'center',
    },
    dataSensorButton: {
        fontSize: 18,
        backgroundColor: '#FFD700',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        color: '#000',
        fontWeight: 'bold',
    },
});
