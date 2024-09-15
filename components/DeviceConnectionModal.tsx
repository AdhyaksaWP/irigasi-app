import React, { FC, useCallback } from "react";
import { View, FlatList, ListRenderItemInfo, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Device } from "react-native-ble-plx";
import CustomButton from '@/components/custombutton';

type DeviceListItemProps = {
  item: ListRenderItemInfo<Device>;
  connectToPeripheral: (device: Device) => void;
};

type DeviceListProps = {
  devices: Device[];
  connectToPeripheral: (device: Device) => void;
};

const DeviceListItem: FC<DeviceListItemProps> = ({ item, connectToPeripheral  }) => {
  const connectToDevice = useCallback(() => {
    connectToPeripheral(item.item);
  }, [connectToPeripheral, item.item]);

  return (
    <View className={`flex flex-row bg-primary h-16 rounded-xl justify-between items-center p-2 border-2' mt-10`}>
      <View className='flex-row items-center justify-center'>
        <View className='border-transparent bg-white w-8 h-8 rounded-full items-center justify-center'>
          <Text className='text-center font-NSBold'>{item.index + 1}</Text>
        </View>
        <Text className="font-NSSemibold text-xs mx-2">{item.item.name ?? "Unnamed Device"}</Text>
      </View>
      <CustomButton
            title= "Connect"
            handlePress={connectToDevice}
            containerStyles= 'bg-tertiary w-20 h-8 rounded-3xl items-center justify-center'
            textStyles= 'font-NSBold text-white text-xs'
      />
    </View>
  );
};

const DeviceList: FC<DeviceListProps> = ({ devices, connectToPeripheral }) => {
  const renderDeviceListItem = useCallback(
    (item: ListRenderItemInfo<Device>) => {
      if (!item.item.name) {
        return null;
      }

      return (
        <DeviceListItem 
          item={item} 
          connectToPeripheral={connectToPeripheral} 
          // ={} 
        />
      );
    },
    [connectToPeripheral, devices]
  );

  return (
    // Assuming you're using a FlatList or similar component to render the list
    <FlatList
      data={devices}
      renderItem={renderDeviceListItem}
      keyExtractor={(item) => item.id.toString()}
      className="w-9/12"
    />
  );
};

export default DeviceList;
