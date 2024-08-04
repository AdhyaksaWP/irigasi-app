// TabIcon.tsx
import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import icons from '@/constants/icons';

interface TabIconProps {
  source: keyof typeof icons;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ source, color, name, focused }) => {
  const IconSource = icons[source]; // Dynamically select the component or image path

  return (
    <View className={`items-center justify-center gap-1 ${focused ? 'pb-4' : ''}`}>
      {typeof IconSource === 'string' ? (
        <Image source={IconSource as ImageSourcePropType} style={{ tintColor: color, width: 24, height: 24 }} />
      ) : (
        <IconSource color={color} /> // Assuming the icon component accepts a color prop
      )}
      
      <Text className = 'font-NSMedium text-[#49454F]'>
        {focused ? name : ''}
      </Text>
    </View>
  );
};

export default TabIcon;
