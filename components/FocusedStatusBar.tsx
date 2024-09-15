import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { StatusBarStyle } from 'react-native';

interface StatusBarProps {
    barStyle: StatusBarStyle | null | undefined,
    backgroundColor: string
}

const FocusAwareStatusBar: FC<StatusBarProps> = ({ barStyle, backgroundColor }) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} /> : null;
}

export default FocusAwareStatusBar;