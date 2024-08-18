import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({ title, handlePress, containerStyles, textStyles }) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${containerStyles}`}
    >
        <Text className={`${textStyles}`}>
          {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton