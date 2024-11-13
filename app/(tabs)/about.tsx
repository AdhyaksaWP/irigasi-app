import FocusAwareStatusBar from '@/components/FocusedStatusBar';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const About: React.FC = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='bg-[#31511e] flex-1 justify-center items-center'>
          <Text className='text-xl font-NSSemibold' style={{ color: '#F9C405' }}>About</Text> {/* About text color changed to yellow */}
          <Text className='font-NSSemibold text-white'>+61 000-0000-000</Text> {/* Number text color changed to white */}
          <Text className='font-NSSemibold text-white'>+61 000-0000-000</Text> {/* Number text color changed to white */}
        </View>
      </ScrollView>
      <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor='#31511e'/>
    </SafeAreaView>
  );
};

export default About;
