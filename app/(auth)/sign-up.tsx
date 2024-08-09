import { View, Text, ScrollView, Alert} from 'react-native'
import { useState } from 'react';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router, Link } from 'expo-router';
import CustomButton from '@/components/custombutton'
import FormField from '@/components/FormField';
import { createUser } from '@/lib/appwrite';
import { useGlobalContext } from '@/context/GlobalProvider';

const SignUp = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const signUpWithEmail = async () => {
    const { username, email, password, confirmPassword} = form;

    if (!username || !email || !password || !confirmPassword){
      Alert.alert("Tidak boleh ada bagian yang kosong");
      return;
    }

    setLoading(true);

    if (password === confirmPassword) {
      try {
        const result = await createUser(email, password, username);
        setUser(result);
        setIsLoggedIn(true);
        
        router.replace('/home');
      } catch (error) {
        Alert.alert('Error', error.message);
      } finally {
        setLoading(false);
      }
    }
    else{ 
      Alert.alert("Kata sandi beda");
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-[15vh] justify-end px-4">
          <Text className='font-PTSBold text-xl'>Register</Text>
          <Text className='font-PTSRegular'>Silahkan isi data diri Anda dengan benar!</Text>
        </View>
        <View className="w-full h-[85vh] px-4 bg-white rounded-t-3xl mt-4">
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({...form,
              username: e
            })}
            otherStyles="mt-12"
            keyboardtype="username"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form,
              email: e
            })}
            otherStyles="mt-4"
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
          <FormField
            title="Konfirmasi Kata Sandi"
            value={form.confirmPassword}
            handleChangeText={(e) => setForm({...form,
              confirmPassword: e
            })}
            otherStyles="mt-4"
            keyboardtype="confirm-password"
          />

          <View className="items-center mt-48">
            <CustomButton
              title='Daftar'
              handlePress = {() => {signUpWithEmail()}}
              containerStyles = 'bg-primary w-11/12 h-10 rounded-lg items-center justify-center text-black mt-8 mb-4'
              textStyles = 'font-PTSBold'
            />
            <Text>
              Sudah punya akun?&nbsp;
              <Link
                href="/sign-in"
                className='text-blue-600'
              >Masuk</Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp