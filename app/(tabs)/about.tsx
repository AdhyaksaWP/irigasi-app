import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Color,
  StyleVariable,
  Padding,
  Border,
} from "../GlobalStyles";

const About = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.about}>
      <Image
        style={styles.aboutChild}
        contentFit="cover"
        source={require("../assets/vector-709.png")}
      />
      <View style={styles.status}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={styles.status}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={[styles.navigationIconParent, styles.navigationIconFlexBox]}>
        <Pressable
          style={[styles.navigationIcon, styles.navigationIconFlexBox]}
          onPress={() => navigation.navigate("MainPage")}
        >
          <View style={[styles.navigationButton, styles.navigationIconFlexBox]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Home</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.navigationIcon, styles.navigationIconFlexBox]}
          onPress={() => navigation.navigate("Bluetooth1")}
        >
          <View style={[styles.navigationButton, styles.navigationIconFlexBox]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/bluetooth.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>BT</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.navigationIcon, styles.navigationIconFlexBox]}
          onPress={() => navigation.navigate("Component1")}
        >
          <View style={[styles.navigationButton, styles.navigationIconFlexBox]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/monitor1.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Sensor</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.navigationIcon, styles.navigationIconFlexBox]}
          onPress={() => navigation.navigate("Pupuk")}
        >
          <View style={[styles.navigationButton, styles.navigationIconFlexBox]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/file-text.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Kalkulasi</Text>
          </View>
        </Pressable>
        <View style={[styles.navigationIcon, styles.navigationIconFlexBox]}>
          <View
            style={[styles.navigationButton4, styles.navigationIconFlexBox]}
          >
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/info1.png")}
            />
            <Text style={[styles.label4, styles.labelTypo]}>About</Text>
          </View>
        </View>
        <Pressable
          style={[styles.navigationIcon, styles.navigationIconFlexBox]}
          onPress={() => navigation.navigate("Akun")}
        >
          <View style={[styles.navigationButton, styles.navigationIconFlexBox]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/user.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Profile</Text>
          </View>
        </Pressable>
      </View>
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
      <View style={styles.iphoneIndicator}>
        <View style={styles.line} />
      </View>
      <View style={styles.iphoneIndicator}>
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  navigationIconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelTypo: {
    marginTop: 8,
    fontFamily: FontFamily.singleLineBodySmallStrong,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.bodyForm_size,
    textAlign: "center",
  },
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
    fontSize: FontSize.body1_size,
    left: 120,
    textAlign: "left",
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    lineHeight: 14,
    color: Color.palettesNeutralVariant0,
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
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.palettesNeutralVariant0,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.palettesNeutralVariant0,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 15,
    height: 11,
    width: 24,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFProDisplay,
    textAlign: "center",
    color: Color.palettesNeutralVariant0,
    width: 54,
    position: "absolute",
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
    width: 54,
    position: "absolute",
  },
  status: {
    left: 1,
    width: 374,
    height: 44,
    top: 0,
    position: "absolute",
  },
  homeIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  label: {
    color: Color.textDefaultSecondary,
    display: "none",
  },
  navigationButton: {
    paddingHorizontal: StyleVariable.space200,
    paddingVertical: Padding.p_base,
  },
  navigationIcon: {
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_xs,
  },
  label4: {
    color: Color.schemesOnSurfaceVariant,
  },
  navigationButton4: {
    alignSelf: "stretch",
    height: 68,
    padding: StyleVariable.space200,
  },
  navigationIconParent: {
    top: 689,
    left: -1,
    borderColor: Color.colorGoldenrod_100,
    width: 376,
    flexDirection: "row",
    paddingHorizontal: Padding.p_23xl,
    paddingVertical: 0,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorGold_100,
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
  line: {
    marginLeft: -67.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorSilver_100,
    width: 135,
    height: 5,
    position: "absolute",
  },
  iphoneIndicator: {
    bottom: 0,
    left: -18,
    width: 393,
    height: 30,
    position: "absolute",
  },
  about: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGold_100,
  },
});

export default About;
