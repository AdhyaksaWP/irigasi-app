import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { StatusBar } from 'expo-status-bar';
import { Redirect, router, Link } from 'expo-router';
import { deleteCurrentSession, getCurrentUser } from '@/lib/appwrite';
import CustomButton from '@/components/custombutton';
// import { Account } from 'react-native-appwrite';
import FocusAwareStatusBar from '@/components/FocusedStatusBar';
// import Ugmlogo from '@/assets/svg/ugmlogo';
// import Splashimage from '@/assets/svg/splashimage';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='h-1/5 items-center justify-end'>
          <Text>
            <Text className='font-NSBold text-2xl'>Selamat Datang,{"\n"}</Text>
            <Text className='font-NSSemibold text-lg'>Di Aplikasi Irigasi Lahan Bawang</Text>
          </Text>
        </View>

        <View className='justify-center items-center w-full h-3/5'>
          <CustomButton
            title='Bluetooth'
            handlePress={() => router.push('/bluetooth')}
            containerStyles='w-4/5 bg-primary h-20 items-center justify-center rounded-2xl my-2 shadow-lg shadow-black'
            textStyles='font-NSSemibold text-lg py-5 text-[#484C52]'
          />
          <CustomButton
            title='Sensor'
            handlePress={() => router.push('/sensors')}
            containerStyles='w-4/5 bg-primary h-20 items-center justify-center rounded-2xl my-2 shadow-lg shadow-black'
            textStyles='font-NSSemibold text-lg py-5 text-[#484C52]'
          />
          <CustomButton
            title='Kalkulasi Pupuk'
            handlePress={() => router.push('/pupuk')}
            containerStyles='w-4/5 bg-primary h-20 items-center justify-center rounded-2xl my-2 shadow-lg shadow-black'
            textStyles='font-NSSemibold text-lg py-5 text-[#484C52]'
          />
          <CustomButton
            title='Tentang'
            handlePress={() => router.push('/about')}
            containerStyles='w-4/5 bg-primary h-20 items-center justify-center rounded-2xl my-2 shadow-lg shadow-black'
            textStyles='font-NSSemibold text-lg py-5 text-[#484C52]'
          />          
          {/* <TouchableOpacity className='border-2 border-[#E1B106] w-full items-center mb-[-2px]' onPress={() => router.push('/bluetooth')}>
            <Text className='font-NSSemibold text-lg py-5 text-[#484C52]'>Bluetooth</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border-2 border-[#E1B106] w-full items-center mb-[-2px]' onPress={() => router.push('/sensors')}>
            <Text className='font-NSSemibold text-lg py-5 text-[#484C52]'>Sensor</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border-2 border-[#E1B106] w-full items-center mb-[-2px]' onPress={() => router.push('/pupuk')}>
            <Text className='font-NSSemibold text-lg py-5 text-[#484C52]'>Kalkulasi Pupuk</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border-2 border-[#E1B106] w-full items-center mb-[-2px]' onPress={() => router.push('/about')}>
            <Text className='font-NSSemibold text-lg py-5 text-[#484C52]'>About</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
      <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor='#ffffff'/>
    </SafeAreaView>
  );
};

export default HomeScreen;
