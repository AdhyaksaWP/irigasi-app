import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const FormField = ({ title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false)
  
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='font-NSLight'>
                {title}
            </Text>
            <View className="w-full h-8 px-4 bg-white border-gray-400 rounded-md border-[0.5px]">
                <TextInput
                    className="flex-1 font-NSLight"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Kata Sandi' && !showPassword}
                />
            </View>
        </View>
  )
}

export default FormField