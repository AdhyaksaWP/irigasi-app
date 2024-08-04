import { View, Text, ScrollView} from 'react-native'
import { useState } from 'react';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router, Link } from 'expo-router';
import CustomButton from '@/components/custombutton'
import FormField from '@/components/FormField';
import { Alert } from 'react-native';
import { getCurrentUser, signIn } from '@/lib/appwrite';
import { useGlobalContext } from '@/context/GlobalProvider';

const SignIn = () => {
  const {setUser, setIsLoggedIn} = useGlobalContext()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const signInWithEmail = async () => {
    const {email, password} = form;

    if (!email || !password){
      Alert.alert("Tidak boleh ada bagian yang kosong");
      return;
    }

    setLoading(true);

    try {
      await signIn(email, password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLoggedIn(true);

      Alert.alert("Sukses")
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-[45vh] justify-end px-4">
          <Text className='font-PTSBold text-xl'>Halo, selamat datang</Text>
          <Text className='font-PTSRegular'>Silahkan isi data diri Anda dengan benar!</Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form,
              email: e
            })}
            otherStyles="mt-20"
            keyboardtype="email-address"
          />
          <FormField
            title="Kata Sandi"
            value={form.password}
            handleChangeText={(e) => setForm({...form,
              password: e
            })}
            otherStyles="mt-4"
            keyboardtype="password"
          />
          <Text className='font-PTSRegular text-right my-3'>Lupa Kata Sandi?</Text>
        </View>
        <View className="w-full h-[55vh] px-4 bg-white rounded-t-3xl items-center">
          <CustomButton
            title='Masuk'
            handlePress = {signInWithEmail}
            containerStyles = 'bg-primary w-11/12 h-10 rounded-lg items-center justify-center text-black mt-8 mb-4'
            textStyles = 'font-PTSBold'
          />
          <Text>
            Belum punya akun?&nbsp;
            <Link
              href="/sign-up"
              className='text-blue-600'
            >Buat Akun</Link>
          </Text>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn