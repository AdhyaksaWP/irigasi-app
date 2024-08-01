import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Color,
  StyleVariable,
  Padding,
  Border,
} from "../GlobalStyles";

const Pupuk = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pupuk}>
      <Image
        style={[styles.screenshot6981, styles.statusPosition]}
        contentFit="cover"
        source={require("../assets/screenshot-698-1.png")}
      />
      <View style={[styles.navigationIconParent, styles.navigationIconFlexBox]}>
        <Pressable
          style={[styles.navigationIcon, styles.navigationIconFlexBox]}
          onPress={() => navigation.navigate("MainPage")}
        >
          <View style={[styles.navigationButton, styles.navigationIconFlexBox]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/home1.png")}
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
              source={require("../assets/bluetooth1.png")}
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
              source={require("../assets/monitor2.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Sensor</Text>
          </View>
        </Pressable>
        <View style={[styles.navigationIcon, styles.navigationIconFlexBox]}>
          <View
            style={[styles.navigationButton3, styles.navigationIconFlexBox]}
          >
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/file-text1.png")}
            />
            <Text style={[styles.label3, styles.labelTypo]}>Kalkulasi</Text>
          </View>
        </View>
        <Pressable
          style={[styles.navigationIcon, styles.navigationIconFlexBox]}
          onPress={() => navigation.navigate("About")}
        >
          <View style={[styles.navigationButton, styles.navigationIconFlexBox]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/info2.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>About</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.navigationIcon, styles.navigationIconFlexBox]}
          onPress={() => navigation.navigate("Akun")}
        >
          <View style={[styles.navigationButton, styles.navigationIconFlexBox]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/user2.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Profile</Text>
          </View>
        </Pressable>
      </View>
      <View style={[styles.pupukChild, styles.pupukChildShadowBox]} />
      <View style={[styles.status, styles.statusPosition]}>
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
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={[styles.timeStyle, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.mapApiDaerahWrapper, styles.wrapperFlexBox]}>
        <Text
          style={[styles.mapApiDaerah, styles.rumusTypo]}
        >{`Map Api daerah `}</Text>
      </View>
      <Image
        style={styles.pupukItem}
        contentFit="cover"
        source={require("../assets/group-6.png")}
      />
      <View style={[styles.frameParent, styles.pupukChildShadowBox]}>
        <View style={[styles.frameWrapper, styles.wrapperLayout]}>
          <View style={styles.wrapperFlexBox}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-2608673.png")}
            />
            <Text style={[styles.lokasi, styles.dataTypo]}>Lokasi</Text>
          </View>
        </View>
        <View style={[styles.rumusWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.rumusTypo}>Rumus</Text>
        </View>
        <Text style={[styles.dataData, styles.dataTypo]}>Data Data</Text>
      </View>
      <View style={[styles.kebutuhanWrapper, styles.wrapperLayout]}>
        <Text style={[styles.kebutuhan, styles.dataTypo]}>Kebutuhan</Text>
      </View>
      <View style={styles.iphoneIndicator}>
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusPosition: {
    width: 374,
    left: 1,
    top: 0,
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
  pupukChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 374,
    left: 1,
    position: "absolute",
    backgroundColor: Color.palettesSecondary100,
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  rumusTypo: {
    textAlign: "left",
    lineHeight: 19,
    fontSize: FontSize.heading2_size,
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    color: Color.palettesNeutralVariant0,
  },
  wrapperLayout: {
    width: 330,
    position: "absolute",
  },
  dataTypo: {
    fontSize: FontSize.body1_size,
    textAlign: "left",
    lineHeight: 14,
  },
  screenshot6981: {
    height: 628,
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
  label3: {
    color: Color.schemesOnSurfaceVariant,
  },
  navigationButton3: {
    alignSelf: "stretch",
    height: 68,
    padding: StyleVariable.space200,
  },
  navigationIconParent: {
    top: 689,
    left: -1,
    borderColor: Color.colorGoldenrod_100,
    width: 376,
    height: 92,
    paddingHorizontal: Padding.p_23xl,
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorGold_100,
  },
  pupukChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    height: 115,
    top: 0,
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
    color: Color.palettesNeutralVariant0,
    textAlign: "center",
    width: 54,
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
  },
  status: {
    height: 44,
    backgroundColor: Color.colorGold_100,
  },
  mapApiDaerah: {
    width: 130,
  },
  mapApiDaerahWrapper: {
    top: 81,
    left: 23,
    position: "absolute",
  },
  pupukItem: {
    top: 156,
    left: 186,
    width: 33,
    height: 58,
    position: "absolute",
  },
  frameChild: {
    borderRadius: 4,
    width: 23,
    height: 23,
    overflow: "hidden",
  },
  lokasi: {
    fontFamily: FontFamily.body1Reg,
    marginLeft: 12,
    color: Color.palettesNeutralVariant0,
  },
  frameWrapper: {
    top: 75,
    left: 23,
  },
  rumusWrapper: {
    top: 16,
    left: 23,
    position: "absolute",
  },
  dataData: {
    top: 114,
    left: 40,
    width: 271,
    height: 101,
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    fontSize: FontSize.body1_size,
    color: Color.palettesNeutralVariant0,
    position: "absolute",
  },
  frameParent: {
    top: 404,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowRadius: 22,
    elevation: 22,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 234,
  },
  kebutuhan: {
    color: Color.palettesSecondary100,
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    fontSize: FontSize.body1_size,
  },
  kebutuhanWrapper: {
    top: 638,
    left: 17,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumseagreen,
    height: 34,
    paddingHorizontal: Padding.p_110xl,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
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
    backgroundColor: Color.palettesSecondary100,
  },
  pupuk: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.palettesSecondary100,
  },
});

export default Pupuk;
