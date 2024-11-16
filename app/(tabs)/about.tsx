import Ugmlogo from '@/assets/svg/ugmlogo';
import FocusAwareStatusBar from '@/components/FocusedStatusBar';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const About: React.FC = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='bg-[#31511e] flex-1 justify-center items-center'>
          <Ugmlogo className='mb-10'/>
          <Text className='text-justify text-lg px-10 font-NSMedium'>Aplikasi ini dibuat dalam rangka proyek dengan judul "Irigasi Lahan Bawang" yang dilaksanakan oleh beberapa mahasiswa dan dosen
                dari Universitas Gadjah Mada (UGM). Rencana utama proyek ini adalah untuk membantu proses pemantauan dan pengelolaan proses Irigasi
                lahan bawang dari suatu sistem perkebunan.
          </Text>
        </View>
      </ScrollView>
      <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor='#31511e'/>
    </SafeAreaView>
  );
};

export default About;
