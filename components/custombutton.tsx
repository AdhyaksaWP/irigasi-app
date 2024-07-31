import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({ title, handlePress, isLoading, containerStyles, textStyles }) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${containerStyles} ${isLoading ? 'opacity-50 ' : ''}`}
      disabled={isLoading}
    >
        <Text className={`${textStyles}`}>
          {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton