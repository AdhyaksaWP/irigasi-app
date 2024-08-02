import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import BarsStatusBarIPhoneLight from "../components/BarsStatusBarIPhoneLight";
import FrameComponent2 from "../components/FrameComponent2";
import IphoneIndicator from "../components/IphoneIndicator";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const About = () => {
  return (
    <View style={styles.about}>
      <Image
        style={styles.aboutChild}
        contentFit="cover"
        source={require("../assets/vector-709.png")}
      />
      <BarsStatusBarIPhoneLight
        wifi={require("../assets/wifi1.png")}
        cellularConnection={require("../assets/cellular-connection.png")}
        barsStatusBarIPhoneLPosition="absolute"
        barsStatusBarIPhoneLWidth={374}
        barsStatusBarIPhoneLTop={0}
        barsStatusBarIPhoneLLeft={1}
        barsStatusBarIPhoneLBackgroundColor="unset"
        wifiIconWidth={15}
        cellularConnectionIconWidth={17}
      />
      <BarsStatusBarIPhoneLight
        wifi={require("../assets/wifi1.png")}
        cellularConnection={require("../assets/cellular-connection.png")}
        barsStatusBarIPhoneLPosition="absolute"
        barsStatusBarIPhoneLWidth={374}
        barsStatusBarIPhoneLTop={0}
        barsStatusBarIPhoneLLeft={1}
        barsStatusBarIPhoneLBackgroundColor="unset"
        wifiIconWidth={15}
        cellularConnectionIconWidth={17}
      />
      <FrameComponent2 />
      <Text style={styles.about1}>About</Text>
      <Image
        style={[styles.phoneCallIcon, styles.phoneIconLayout]}
        contentFit="cover"
        source={require("../assets/phone-call.png")}
      />
      <Image
        style={[styles.phoneCallIcon1, styles.phoneIconLayout]}
        contentFit="cover"
        source={require("../assets/phone-call.png")}
      />
      <View style={[styles.aboutItem, styles.aboutLayout]} />
      <View style={[styles.aboutInner, styles.aboutLayout]} />
      <Text style={[styles.text, styles.textTypo]}>+61 000-0000-000</Text>
      <Text style={[styles.text1, styles.textTypo]}>+61 000-0000-000</Text>
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
  phoneIconLayout: {
    height: 28,
    width: 28,
    position: "absolute",
    overflow: "hidden",
  },
  aboutLayout: {
    height: 179,
    width: 139,
    backgroundColor: Color.colorGainsboro,
    left: 120,
    position: "absolute",
  },
  textTypo: {
    height: 25,
    width: 151,
    color: Color.palettesNeutralVariant0,
    lineHeight: 14,
    fontSize: FontSize.body1_size,
    left: 120,
    textAlign: "left",
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    position: "absolute",
  },
  aboutChild: {
    top: -21,
    left: 58,
    width: 317,
    height: 214,
    display: "none",
    position: "absolute",
  },
  about1: {
    top: 58,
    left: 169,
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    position: "absolute",
  },
  phoneCallIcon: {
    top: 331,
    left: 63,
  },
  phoneCallIcon1: {
    top: 600,
    left: 65,
  },
  aboutItem: {
    top: 116,
  },
  aboutInner: {
    top: 392,
  },
  text: {
    top: 603,
  },
  text1: {
    top: 342,
  },
  about: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGold_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default About;
