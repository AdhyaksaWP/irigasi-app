import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  StyleVariable,
  Padding,
  Border,
} from "../GlobalStyles";

const MainPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainPage}>
      <View style={styles.mainPageChild} />
      <Image
        style={styles.mainPageItem}
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
      <View style={styles.mainPageInner} />
      <Pressable
        style={[styles.rectanglePressable, styles.mainChildBorder]}
        onPress={() => navigation.navigate("Bluetooth1")}
      />
      <Text style={styles.bluetoothConnection}>Bluetooth Connection</Text>
      <Text style={[styles.bluetoothConnection1, styles.aboutTypo]}>
        Bluetooth Connection
      </Text>
      <Text style={[styles.sistemIrigasi, styles.linePosition]}>
        Sistem Irigasi
      </Text>
      <Pressable
        style={[styles.mainPageChild1, styles.mainChildBorder]}
        onPress={() => navigation.navigate("About")}
      />
      <Text style={[styles.about, styles.linePosition]}>About</Text>
      <Pressable
        style={[styles.mainPageChild2, styles.mainChildBorder]}
        onPress={() => navigation.navigate("Pupuk")}
      />
      <Pressable
        style={[styles.mainPageChild3, styles.mainChildBorder]}
        onPress={() => navigation.navigate("Component1")}
      />
      <Text style={[styles.sensor, styles.linePosition]}>Sensor</Text>
      <Text style={[styles.kalkulasiPupuk, styles.linePosition]}>
        Kalkulasi Pupuk
      </Text>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View style={[styles.navigationIconParent, styles.navigationIconFlexBox]}>
        <View style={[styles.navigationIcon, styles.navigationIconFlexBox]}>
          <View style={[styles.navigationButton, styles.navigationIconFlexBox]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/home2.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Home</Text>
          </View>
        </View>
        <Pressable
          style={[styles.navigationIcon, styles.navigationIconFlexBox]}
          onPress={() => navigation.navigate("Bluetooth1")}
        >
          <View
            style={[styles.navigationButton1, styles.navigationIconFlexBox]}
          >
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/bluetooth.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>BT</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.navigationIcon, styles.navigationIconFlexBox]}
          onPress={() => navigation.navigate("Component1")}
        >
          <View
            style={[styles.navigationButton1, styles.navigationIconFlexBox]}
          >
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/monitor1.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>Sensor</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.navigationIcon, styles.navigationIconFlexBox]}
          onPress={() => navigation.navigate("Pupuk")}
        >
          <View
            style={[styles.navigationButton1, styles.navigationIconFlexBox]}
          >
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/file-text.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>Kalkulasi</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.navigationIcon, styles.navigationIconFlexBox]}
          onPress={() => navigation.navigate("About")}
        >
          <View
            style={[styles.navigationButton1, styles.navigationIconFlexBox]}
          >
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/info.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>About</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.navigationIcon, styles.navigationIconFlexBox]}
          onPress={() => navigation.navigate("Akun")}
        >
          <View
            style={[styles.navigationButton1, styles.navigationIconFlexBox]}
          >
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/user.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>Profile</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.iphoneIndicator}>
        <View style={[styles.line, styles.linePosition]} />
      </View>
      <View style={styles.iphoneIndicator}>
        <View style={[styles.line, styles.linePosition]} />
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
  mainChildBorder: {
    borderColor: Color.colorGoldenrod_200,
    height: 88,
    left: 0,
    width: 375,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorGold_100,
  },
  aboutTypo: {
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  linePosition: {
    left: "50%",
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
  mainPageChild: {
    backgroundColor: "rgba(255, 212, 62, 0.71)",
    borderColor: "#fdd23b",
    height: 136,
    width: 375,
    borderWidth: 1,
    borderStyle: "solid",
    left: 1,
    top: 0,
    position: "absolute",
  },
  mainPageItem: {
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
    borderWidth: 1,
    borderStyle: "solid",
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
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFProDisplay,
    color: Color.palettesNeutralVariant0,
    textAlign: "center",
    left: 0,
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
    width: 374,
    height: 44,
    left: 1,
    top: 0,
    position: "absolute",
  },
  mainPageInner: {
    backgroundColor: Color.colorGainsboro,
    height: 88,
    top: 197,
    left: 0,
    width: 375,
    position: "absolute",
  },
  rectanglePressable: {
    top: 197,
    borderColor: Color.colorGoldenrod_200,
  },
  bluetoothConnection: {
    color: Color.colorDarkred,
    textAlign: "left",
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    left: 87,
    top: 229,
    position: "absolute",
  },
  bluetoothConnection1: {
    left: 87,
    top: 229,
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  sistemIrigasi: {
    marginLeft: -62.5,
    top: 65,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  mainPageChild1: {
    top: 461,
  },
  about: {
    marginLeft: -28.5,
    top: 493,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  mainPageChild2: {
    top: 373,
  },
  mainPageChild3: {
    top: 285,
  },
  sensor: {
    marginLeft: -32.5,
    top: 317,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  kalkulasiPupuk: {
    marginLeft: -74.5,
    top: 405,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  image1Icon: {
    top: 44,
    left: 22,
    width: 67,
    height: 67,
    position: "absolute",
  },
  homeIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  label: {
    color: Color.schemesOnSurfaceVariant,
  },
  navigationButton: {
    alignSelf: "stretch",
    height: 68,
    padding: StyleVariable.space200,
  },
  navigationIcon: {
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_xs,
  },
  label1: {
    color: Color.textDefaultSecondary,
    display: "none",
  },
  navigationButton1: {
    paddingHorizontal: StyleVariable.space200,
    paddingVertical: Padding.p_base,
  },
  navigationIconParent: {
    top: 689,
    left: -1,
    borderColor: Color.colorGoldenrod_100,
    width: 376,
    height: 92,
    flexDirection: "row",
    paddingHorizontal: Padding.p_23xl,
    paddingVertical: 0,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorGold_100,
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorSilver_100,
    width: 135,
    height: 5,
  },
  iphoneIndicator: {
    bottom: 0,
    left: -18,
    width: 393,
    height: 30,
    position: "absolute",
  },
  mainPage: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGold_100,
  },
});

export default MainPage;
