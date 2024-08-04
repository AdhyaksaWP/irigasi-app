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

const DeviceListItem: FC<DeviceListItemProps> = ({ item, connectToPeripheral, isLastItem }) => {
  const connectToDevice = useCallback(() => {
    connectToPeripheral(item.item);
  }, [connectToPeripheral, item.item]);

  return (
    <View className={`flex flex-row justify-between items-center p-2 border-2 ${isLastItem ? 'mb-0' : 'mb-[-2px]'}`}>
      <View className='flex-row items-center justify-center'>
        <View className='border-transparent bg-white w-8 h-8 rounded-full mr-4 items-center justify-center'>
          <Text className=' text-center'>{item.index + 1}</Text>
        </View>
        <Text>{item.item.name ?? "Unnamed Device"}</Text>
      </View>
      <CustomButton
            title= "Connect"
            handlePress={connectToDevice}
            containerStyles= 'bg-tertiary w-24 h-8 rounded-3xl items-center justify-center'
            textStyles= 'font-NSBold text-white text-xs'
      />
    </View>
  );
};

const DeviceList: FC<DeviceListProps> = ({ devices, connectToPeripheral }) => {
  const renderDeviceListItem = useCallback(
    (item: ListRenderItemInfo<Device>) => {
      const isLastItem = item.index === devices.length - 1;
      return <DeviceListItem item={item} connectToPeripheral={connectToPeripheral} isLastItem={isLastItem} />;
    },
    [connectToPeripheral, devices]
  );

  return (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      data={devices}
      renderItem={renderDeviceListItem}
      keyExtractor={(item) => item.id}
      className = 'w-full'
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    justifyContent: 'center',
  },
  ctaButton: {
    backgroundColor: '#FF6060',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DeviceList;
