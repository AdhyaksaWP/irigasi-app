import { Text, View, Image } from 'react-native';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons';
import React from 'react';

const TabIcon = ({ source, color, name, focused }) => {
  return (
    <View className='items-center justify-center gap-1'>
      <Image
        source={source}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text className={`${ focused ? 'font-NSBold' : 'font-NSLight'} text-xs`}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              source={icons.home}
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
              source={icons.home}
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
              source={icons.home}
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
              source={icons.home}
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
              source={icons.home}
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
