import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import BarsStatusBarIPhoneLight from "../components/BarsStatusBarIPhoneLight";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import NavigationIcon2 from "../components/NavigationIcon2";
import IphoneIndicator from "../components/IphoneIndicator";
import { Padding, FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const ControlScreenOnState = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.controlScreenOnState}>
      <Image
        style={styles.controlScreenOnStateChild}
        contentFit="cover"
        source={require("../assets/vector-709.png")}
      />
      <BarsStatusBarIPhoneLight
        wifi={require("../assets/wifi.png")}
        cellularConnection={require("../assets/cellular-connection.png")}
        barsStatusBarIPhoneLPosition="absolute"
        barsStatusBarIPhoneLWidth={374}
        barsStatusBarIPhoneLTop={0}
        barsStatusBarIPhoneLLeft={1}
        barsStatusBarIPhoneLBackgroundColor="unset"
        wifiIconWidth={15}
        cellularConnectionIconWidth={17}
      />
      <View style={[styles.turnedOffWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.turnedOff, styles.turnedTypo]}>TURNED OFF</Text>
      </View>
      <Image
        style={[styles.controlScreenOnStateItem, styles.controlLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <BarsStatusBarIPhoneLight
        wifi={require("../assets/wifi.png")}
        cellularConnection={require("../assets/cellular-connection.png")}
        barsStatusBarIPhoneLPosition="absolute"
        barsStatusBarIPhoneLWidth={374}
        barsStatusBarIPhoneLTop={0}
        barsStatusBarIPhoneLLeft={1}
        barsStatusBarIPhoneLBackgroundColor="unset"
        wifiIconWidth={15}
        cellularConnectionIconWidth={17}
      />
      <View style={[styles.turnedOnWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.turnedOn, styles.turnedTypo]}>TURNED ON</Text>
      </View>
      <Image
        style={[styles.controlScreenOnStateInner, styles.controlLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text style={[styles.text, styles.turnedTypo]}>95 %</Text>
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <Pressable
        style={[styles.dataWrapper, styles.ellipseIconLayout]}
        onPress={() => navigation.navigate("ControlScreenOffState1")}
      >
        <Pressable
          onPress={() => navigation.navigate("ControlScreenOffState1")}
        >
          <Text style={[styles.data1, styles.turnedTypo]}>Data</Text>
        </Pressable>
      </Pressable>
      <View style={[styles.navigationIconParent, styles.rectangleViewBorder]}>
        <NavigationIcon2
          home={require("../assets/home.png")}
          label="Home"
          label1={false}
          navigationIconPosition="unset"
          navigationIconTop="unset"
          navigationIconLeft="unset"
          navigationIconPaddingHorizontal="unset"
          navigationIconPaddingVertical="unset"
          navigationButtonPaddingHorizontal="unset"
          navigationButtonPaddingVertical="unset"
          navigationButtonAlignSelf="unset"
          navigationButtonHeight="unset"
          navigationButtonPadding="unset"
          labelColor="#757575"
        />
        <NavigationIcon2
          home={require("../assets/bluetooth.png")}
          label="BT"
          label1={false}
          navigationIconPosition="unset"
          navigationIconTop="unset"
          navigationIconLeft="unset"
          navigationIconPaddingHorizontal="unset"
          navigationIconPaddingVertical="unset"
          navigationButtonPaddingHorizontal="unset"
          navigationButtonPaddingVertical="unset"
          navigationButtonAlignSelf="unset"
          navigationButtonHeight="unset"
          navigationButtonPadding="unset"
          labelColor="#757575"
        />
        <NavigationIcon2
          home={require("../assets/monitor.png")}
          label="Sensor"
          label1
          navigationIconPosition="unset"
          navigationIconTop="unset"
          navigationIconLeft="unset"
          navigationIconPaddingHorizontal="unset"
          navigationIconPaddingVertical="unset"
          navigationButtonPaddingHorizontal="unset"
          navigationButtonPaddingVertical="unset"
          navigationButtonAlignSelf="stretch"
          navigationButtonHeight={68}
          navigationButtonPadding="~S_DT_~StyleVariable.space200"
          labelColor="#49454f"
        />
        <NavigationIcon2
          home={require("../assets/file-text.png")}
          label="Kalkulasi"
          label1={false}
          navigationIconPosition="unset"
          navigationIconTop="unset"
          navigationIconLeft="unset"
          navigationIconPaddingHorizontal="unset"
          navigationIconPaddingVertical="unset"
          navigationButtonPaddingHorizontal="unset"
          navigationButtonPaddingVertical="unset"
          navigationButtonAlignSelf="unset"
          navigationButtonHeight="unset"
          navigationButtonPadding="unset"
          labelColor="#757575"
        />
        <NavigationIcon2
          home={require("../assets/info.png")}
          label="About"
          label1={false}
          navigationIconPosition="unset"
          navigationIconTop="unset"
          navigationIconLeft="unset"
          navigationIconPaddingHorizontal="unset"
          navigationIconPaddingVertical="unset"
          navigationButtonPaddingHorizontal="unset"
          navigationButtonPaddingVertical="unset"
          navigationButtonAlignSelf="unset"
          navigationButtonHeight="unset"
          navigationButtonPadding="unset"
          labelColor="#757575"
        />
        <NavigationIcon2
          home={require("../assets/user.png")}
          label="Profile"
          label1={false}
          navigationIconPosition="unset"
          navigationIconTop="unset"
          navigationIconLeft="unset"
          navigationIconPaddingHorizontal="unset"
          navigationIconPaddingVertical="unset"
          navigationButtonPaddingHorizontal="unset"
          navigationButtonPaddingVertical="unset"
          navigationButtonAlignSelf="unset"
          navigationButtonHeight="unset"
          navigationButtonPadding="unset"
          labelColor="#757575"
        />
      </View>
      <IphoneIndicator
        iphoneIndicatorPosition="absolute"
        iphoneIndicatorBottom={0}
        iphoneIndicatorLeft={-18}
      />
      <IphoneIndicator
        iphoneIndicatorPosition="absolute"
        iphoneIndicatorBottom={0}
        iphoneIndicatorLeft={-18}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_126xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  turnedTypo: {
    textAlign: "left",
    fontFamily: FontFamily.body1,
    fontWeight: "700",
  },
  controlLayout: {
    height: 50,
    width: 50,
    top: 447,
    position: "absolute",
  },
  ellipseIconLayout: {
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  rectangleViewBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorGold_100,
  },
  controlScreenOnStateChild: {
    top: -21,
    left: 58,
    width: 317,
    height: 214,
    display: "none",
    position: "absolute",
  },
  turnedOff: {
    color: Color.colorDarkred,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.body1,
    fontWeight: "700",
  },
  turnedOffWrapper: {
    backgroundColor: Color.colorWhitesmoke,
    height: 65,
    width: 349,
    borderRadius: Border.br_16xl,
    left: 12,
    top: 439,
    paddingHorizontal: Padding.p_126xl,
    position: "absolute",
  },
  controlScreenOnStateItem: {
    left: 26,
  },
  turnedOn: {
    color: Color.palettesSecondary100,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.body1,
    fontWeight: "700",
  },
  turnedOnWrapper: {
    backgroundColor: Color.colorLimegreen_100,
    height: 65,
    width: 349,
    borderRadius: Border.br_16xl,
    left: 12,
    top: 439,
    paddingHorizontal: Padding.p_126xl,
    position: "absolute",
  },
  controlScreenOnStateInner: {
    left: 294,
  },
  ellipseIcon: {
    top: 152,
    left: 74,
    width: 229,
    height: 229,
  },
  text: {
    marginLeft: -50.5,
    top: 236,
    left: "50%",
    fontSize: FontSize.size_31xl,
    lineHeight: 60,
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  rectangleView: {
    top: 547,
    left: 0,
    borderColor: Color.colorGoldenrod_200,
    width: 375,
    height: 88,
  },
  data1: {
    fontSize: FontSize.bodyForm_size,
    lineHeight: 17,
    color: Color.colorWhitesmoke,
  },
  dataWrapper: {
    top: 552,
    left: 22,
    backgroundColor: Color.schemesPrimary,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_126xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  navigationIconParent: {
    top: 689,
    left: -1,
    borderColor: Color.colorGoldenrod_100,
    width: 376,
    height: 92,
    paddingHorizontal: Padding.p_23xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
  },
  controlScreenOnState: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGold_100,
  },
});

export default ControlScreenOnState;
