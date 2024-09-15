import FocusAwareStatusBar from '@/components/FocusedStatusBar';
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const About: React.FC = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='bg-white flex-1 justify-center items-center'>
          <Text className='text-xl font-NSSemibold'>About</Text>
          <Text className='font-NSSemibold'>+61 000-0000-000</Text>
          <Text className='font-NSSemibold'>+61 000-0000-000</Text>
        </View>
      </ScrollView>
      <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor='#ffffff'/>
    </SafeAreaView>
  );
};

export default About;
