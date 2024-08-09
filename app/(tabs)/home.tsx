import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect, router, Link } from 'expo-router';
import { deleteCurrentSession } from '@/lib/appwrite';
// import Ugmlogo from '@/assets/svg/ugmlogo';
// import Splashimage from '@/assets/svg/splashimage';

const HomeScreen: React.FC = () => {

  const handleLogOut = async () => {
    await deleteCurrentSession();
    router.push('../sign-in')
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='items-center justify-center h-1/3'>
          <Text className='font-NSSemibold text-lg'> Sistem Irigasi </Text>
        </View>

        <View className='justify-center items-center'>
          <TouchableOpacity className='border-2 border-[#E1B106] w-full items-center mb-[-2px]' onPress={() => router.push('/bluetooth')}>
            <Text className='font-NSSemibold text-lg py-5'>Bluetooth</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border-2 border-[#E1B106] w-full items-center mb-[-2px]' onPress={() => router.push('/sensors')}>
            <Text className='font-NSSemibold text-lg py-5'>Sensor</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border-2 border-[#E1B106] w-full items-center mb-[-2px]' onPress={() => router.push('/pupuk')}>
            <Text className='font-NSSemibold text-lg py-5'>Kalkulasi Pupuk</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border-2 border-[#E1B106] w-full items-center mb-[-2px]' onPress={() => router.push('/about')}>
            <Text className='font-NSSemibold text-lg py-5'>About</Text>
          </TouchableOpacity>
        </View>

        <View className='mt-16 justify-center items-center'>
          <TouchableOpacity 
            className='bg-red-500 h-12 w-32 justify-center items-center rounded-3xl'
            onPress={handleLogOut}
          >
            <Text className='font-NSBold text-white'>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
