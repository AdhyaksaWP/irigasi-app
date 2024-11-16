import { StatusBar } from 'expo-status-bar';
import { View, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router';
import CustomButton from '@/components/custombutton';
import React from 'react'
import Splashimage from '@/assets/svg/splashimage';
import Ugmlogo from '@/assets/svg/ugmlogo';
import { useGlobalContext } from '@/context/GlobalProvider';

const SplashPage = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className='w-full justify-center items-center h-full px-4 pb-10'>
          <Ugmlogo/>
          <Splashimage
            className='my-4'
          />
          <CustomButton
            title='Mulai'
            handlePress = {() => {router.push('./home')}}
            containerStyles = 'bg-secondary w-44 h-10 rounded-lg items-center justify-center'
            textStyles = 'font-NSBold text-white text-xl'
          />
        </View>
      </ScrollView>
      <StatusBar
        backgroundColor='#31511e'
        style='dark'
      />
    </SafeAreaView>
  )
}

export default SplashPage