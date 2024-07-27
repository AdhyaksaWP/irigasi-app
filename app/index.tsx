import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Link, SplashScreen } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/custombutton';
import images from '../constants/images'

import React from 'react'

const SplashPage = () => {

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className='w-full justify-center items-center h-full px-4 pb-10'>
          <Image
            source={images.ugmlogo}
          />
          <Image
            source={images.splash}
            className='my-7'
          />
          <CustomButton/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SplashPage