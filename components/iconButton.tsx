import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import icons from '@/constants/icons';

interface iconButtonProps {
    source: keyof typeof icons,
    color: string,
    name: string,
    containerStyles: string,
    textStyles: string,
    handlePress: () => {},
    focused: boolean,
    iconWidth: number,
    iconHeight: number,
}

const IconButton: React.FC<iconButtonProps> = ({ 
    source, 
    color, 
    name, 
    focused, 
    containerStyles, 
    textStyles, 
    handlePress, 
    iconWidth, 
    iconHeight 
}) => {
    const IconSource = icons[source];

    return (
        <View className='flex flex-col justify-center items-center'>
            <TouchableOpacity
                className={`${focused ? '' : containerStyles}`}
                onPress={() => {
                    handlePress();
                    !focused;
                }}
            >
                {typeof IconSource === 'string' ? (
                    <Image 
                        source={IconSource as ImageSourcePropType} 
                        style={{ tintColor: color, width: iconWidth, height: iconHeight }} 
                    />
                ) : (
                    <IconSource 
                        color={color} 
                        width={iconWidth}
                        height={iconHeight}
                    />
                )}
            </TouchableOpacity>
            <Text className={`${textStyles}`}>{name}</Text>
        </View>
    );
};

export default IconButton