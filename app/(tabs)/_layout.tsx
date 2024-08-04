// TabsLayout.tsx
import React from 'react';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons';
import TabIcon from '@/components/TabIcon';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#49454F',
        tabBarInactiveTintColor: 'rgba(73, 69, 79, 0.5)',
        tabBarStyle: {
          borderColor: 'rgba(73, 69, 79, 0.5)',
          backgroundColor: '#F9C405',
          height: '10%',
          paddingTop: 20,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              source="HomeIcon" // Pass the key of the icon
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bluetooth"
        options={{
          title: 'Bluetooth',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              source="BluetoothIcon" // Pass the key of the icon
              color={color}
              name="Bluetooth"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="sensors"
        options={{
          title: 'Sensors',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              source="SensorIcon" // Pass the key of the icon
              color={color}
              name="Sensors"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="pupuk"
        options={{
          title: 'Pupuk',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              source="KalkulasiIcon" // Pass the key of the icon
              color={color}
              name="Pupuk"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              source="AboutIcon" // Pass the key of the icon
              color={color}
              name="About"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
