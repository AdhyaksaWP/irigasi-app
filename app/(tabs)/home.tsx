import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import CustomButton from '@/components/custombutton';
import FocusAwareStatusBar from '@/components/FocusedStatusBar';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='h-1/5 items-center justify-end mb-10'>
          <Text>
            <Text className='font-NSBold text-2xl text-white'>Selamat Datang,{"\n"}</Text>
            <Text className='font-NSSemibold text-lg text-white'>Di Aplikasi Irigasi Lahan Bawang</Text>
          </Text>
        </View>

        <View className='justify-center items-center w-full h-3/5'>
          <CustomButton
            title='Bluetooth'
            handlePress={() => router.push('/bluetooth')}
            containerStyles='w-4/5 bg-[#F9C405] h-20 items-center justify-center rounded-2xl my-2 shadow-lg shadow-black'
            textStyles='font-NSSemibold text-lg py-5 text-[#484C52]'
          />
          <CustomButton
            title='Sensor'
            handlePress={() => router.push('/sensors')}
            containerStyles='w-4/5 bg-[#F9C405] h-20 items-center justify-center rounded-2xl my-2 shadow-lg shadow-black'
            textStyles='font-NSSemibold text-lg py-5 text-[#484C52]'
          />
          <CustomButton
            title='Kalkulasi Pupuk'
            handlePress={() => router.push('/pupuk')}
            containerStyles='w-4/5 bg-[#F9C405] h-20 items-center justify-center rounded-2xl my-2 shadow-lg shadow-black'
            textStyles='font-NSSemibold text-lg py-5 text-[#484C52]'
          />
          <CustomButton
            title='Tentang'
            handlePress={() => router.push('/about')}
            containerStyles='w-4/5 bg-[#F9C405] h-20 items-center justify-center rounded-2xl my-2 shadow-lg shadow-black'
            textStyles='font-NSSemibold text-lg py-5 text-[#484C52]'
          />
        </View>
      </ScrollView>
      <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor='#31511e'/>
    </SafeAreaView>
  );
};

export default HomeScreen;
