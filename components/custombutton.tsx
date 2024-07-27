import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = () => {
  return (
    <TouchableOpacity className=
    'bg-secondary w-44 h-8 rounded-lg items-center justify-center'>
        <Text className='font-NSBold text-white'>Mulai</Text>
    </TouchableOpacity>
  )
}

export default CustomButton