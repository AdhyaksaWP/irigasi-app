import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontFamily,
  Color,
  FontSize,
  Padding,
  Border,
  StyleVariable,
} from "../GlobalStyles";

const Bluetooth1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bluetooth}>
      <Image
        style={styles.bluetoothChild}
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
          source={require("../assets/wifi.png")}
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
          source={require("../assets/wifi.png")}
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
      <View style={[styles.navigationIconParent, styles.stateFlexBox]}>
        <Pressable
          style={styles.navigationIcon}
          onPress={() => navigation.navigate("MainPage")}
        >
          <View style={styles.navigationButton}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Home</Text>
          </View>
        </Pressable>
        <View style={styles.navigationIcon}>
          <View style={styles.navigationButton1}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bluetooth2.png")}
            />
            <Text style={[styles.label1, styles.label1Clr]}>BT</Text>
          </View>
        </View>
        <Pressable
          style={styles.navigationIcon}
          onPress={() => navigation.navigate("Component1")}
        >
          <View style={styles.navigationButton}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/monitor1.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Sensor</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.navigationIcon}
          onPress={() => navigation.navigate("Pupuk")}
        >
          <View style={styles.navigationButton}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/file-text.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Kalkulasi</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.navigationIcon}
          onPress={() => navigation.navigate("About")}
        >
          <View style={styles.navigationButton}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/info.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>About</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.navigationIcon}
          onPress={() => navigation.navigate("Akun")}
        >
          <View style={styles.navigationButton}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/user.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Profile</Text>
          </View>
        </Pressable>
      </View>
      <View style={[styles.refreshWrapper, styles.bluetoothItemLayout]}>
        <Text style={styles.refresh}>Refresh</Text>
      </View>
      <Image
        style={styles.bluetoothIcon1}
        contentFit="cover"
        source={require("../assets/bluetooth3.png")}
      />
      <Text style={styles.bluetoothConnection}>Bluetooth Connection</Text>
      <Text style={[styles.connectedDisconnected, styles.status2Typo]}>
        Connected / Disconnected
      </Text>
      <Text style={[styles.status2, styles.linePosition]}>Status:</Text>
      <View style={[styles.listItem1, styles.listItemLayout]}>
        <View style={styles.stateLayerOverlay} />
        <View style={[styles.stateLayer, styles.stateFlexBox]}>
          <View style={styles.leadingElement}>
            <View style={styles.buildingBlocksmonogram}>
              <Text style={styles.initial}>1</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={[styles.overline, styles.overlineTypo]}>Overline</Text>
            <Text style={[styles.headline, styles.headlineTypo]}>Device 1</Text>
            <Text style={[styles.supportingText, styles.headlineTypo]}>
              Supporting line text lorem ipsum dolor sit amet, consectetur.
            </Text>
          </View>
          <View style={[styles.trailingElement, styles.stateFlexBox]}>
            <Text style={[styles.trailingSupportingText, styles.overlineTypo]}>
              100+
            </Text>
            <View style={styles.checkboxes}>
              <View style={[styles.stateLayer1, styles.stateFlexBox]}>
                <View style={styles.container} />
                <Image
                  style={[styles.checkSmallIcon, styles.linePosition]}
                  contentFit="cover"
                  source={require("../assets/check-small.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.horizontalfullWidth}>
          <View style={styles.divider} />
        </View>
      </View>
      <View style={[styles.listItem2, styles.listItemLayout]}>
        <View style={styles.stateLayerOverlay} />
        <View style={[styles.stateLayer, styles.stateFlexBox]}>
          <View style={styles.leadingElement}>
            <View style={styles.buildingBlocksmonogram}>
              <Text style={styles.initial}>4</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={[styles.overline, styles.overlineTypo]}>Overline</Text>
            <Text style={[styles.headline, styles.headlineTypo]}>Device 4</Text>
            <Text style={[styles.supportingText, styles.headlineTypo]}>
              Supporting line text lorem ipsum dolor sit amet, consectetur.
            </Text>
          </View>
          <View style={[styles.trailingElement, styles.stateFlexBox]}>
            <Text style={[styles.trailingSupportingText, styles.overlineTypo]}>
              100+
            </Text>
            <View style={styles.checkboxes}>
              <View style={[styles.stateLayer1, styles.stateFlexBox]}>
                <View style={styles.container} />
                <Image
                  style={[styles.checkSmallIcon, styles.linePosition]}
                  contentFit="cover"
                  source={require("../assets/check-small.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.horizontalfullWidth}>
          <View style={styles.divider} />
        </View>
      </View>
      <View style={[styles.connectWrapper, styles.frameWrapperFlexBox]}>
        <Text style={styles.connect}>Connect</Text>
      </View>
      <View style={[styles.connectContainer, styles.frameWrapperFlexBox]}>
        <Text style={styles.connect}>Connect</Text>
      </View>
      <View style={[styles.disconnectWrapper, styles.frameWrapperFlexBox]}>
        <Text style={styles.connect}>Disconnect</Text>
      </View>
      <View style={[styles.connectFrame, styles.frameWrapperFlexBox]}>
        <Text style={styles.connect}>Connect</Text>
      </View>
      <View style={[styles.frameView, styles.frameWrapperFlexBox]}>
        <Text style={styles.connect}>Connect</Text>
      </View>
      <View style={[styles.bluetoothItem, styles.bluetoothItemLayout]} />
      <View style={[styles.listItem3, styles.listItemLayout]}>
        <View style={styles.stateLayerOverlay} />
        <View style={[styles.stateLayer, styles.stateFlexBox]}>
          <View style={styles.leadingElement}>
            <View style={styles.buildingBlocksmonogram}>
              <Text style={styles.initial}>3</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={[styles.overline, styles.overlineTypo]}>Overline</Text>
            <Text style={[styles.headline, styles.headlineTypo]}>Device 3</Text>
            <Text style={[styles.supportingText, styles.headlineTypo]}>
              Supporting line text lorem ipsum dolor sit amet, consectetur.
            </Text>
          </View>
          <View style={[styles.trailingElement, styles.stateFlexBox]}>
            <Text style={[styles.trailingSupportingText, styles.overlineTypo]}>
              100+
            </Text>
            <View style={styles.checkboxes}>
              <View style={[styles.stateLayer1, styles.stateFlexBox]}>
                <View style={styles.container} />
                <Image
                  style={[styles.checkSmallIcon, styles.linePosition]}
                  contentFit="cover"
                  source={require("../assets/check-small.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.horizontalfullWidth}>
          <View style={styles.divider} />
        </View>
      </View>
      <View style={[styles.listItem4, styles.listItemLayout]}>
        <View style={styles.stateLayerOverlay} />
        <View style={[styles.stateLayer, styles.stateFlexBox]}>
          <View style={styles.leadingElement}>
            <View style={styles.buildingBlocksmonogram}>
              <Text style={styles.initial}>2</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={[styles.overline, styles.overlineTypo]}>Overline</Text>
            <Text style={[styles.headline, styles.headlineTypo]}>Device 2</Text>
            <Text style={[styles.supportingText, styles.headlineTypo]}>
              Supporting line text lorem ipsum dolor sit amet, consectetur.
            </Text>
          </View>
          <View style={[styles.trailingElement, styles.stateFlexBox]}>
            <Text style={[styles.trailingSupportingText, styles.overlineTypo]}>
              100+
            </Text>
            <View style={styles.checkboxes}>
              <View style={[styles.stateLayer1, styles.stateFlexBox]}>
                <View style={styles.container} />
                <Image
                  style={[styles.checkSmallIcon, styles.linePosition]}
                  contentFit="cover"
                  source={require("../assets/check-small.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.horizontalfullWidth}>
          <View style={styles.divider} />
        </View>
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
  stateFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  labelTypo: {
    marginTop: 8,
    fontFamily: FontFamily.singleLineBodySmallStrong,
    fontWeight: "600",
    lineHeight: 14,
    textAlign: "center",
  },
  label1Clr: {
    color: Color.schemesOnSurfaceVariant,
    fontSize: FontSize.bodyForm_size,
  },
  bluetoothItemLayout: {
    width: 83,
    position: "absolute",
  },
  status2Typo: {
    height: 32,
    top: 186,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.body1,
    fontWeight: "700",
  },
  linePosition: {
    left: "50%",
    position: "absolute",
  },
  listItemLayout: {
    minHeight: 56,
    width: 375,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    borderWidth: 1,
    borderColor: Color.palettesNeutralVariant0,
    borderStyle: "solid",
    position: "absolute",
  },
  overlineTypo: {
    lineHeight: 16,
    letterSpacing: 1,
    fontFamily: FontFamily.m3LabelSmall,
    fontWeight: "500",
    color: Color.schemesOnSurfaceVariant,
    display: "none",
  },
  headlineTypo: {
    fontFamily: FontFamily.m3BodyMedium,
    textAlign: "left",
    alignSelf: "stretch",
  },
  frameWrapperFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_126xl,
    borderRadius: Border.br_21xl,
    height: 30,
    backgroundColor: Color.schemesPrimary,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  bluetoothChild: {
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
    width: 22,
    opacity: 0.35,
    borderColor: Color.palettesNeutralVariant0,
    borderWidth: 1,
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
    height: 7,
    width: 18,
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
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProDisplay,
    color: Color.palettesNeutralVariant0,
    textAlign: "center",
    left: 0,
    letterSpacing: 0,
    top: "50%",
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
    overflow: "hidden",
  },
  label: {
    color: Color.textDefaultSecondary,
    fontSize: FontSize.bodyForm_size,
    marginTop: 8,
    fontFamily: FontFamily.singleLineBodySmallStrong,
    fontWeight: "600",
    lineHeight: 14,
    display: "none",
  },
  navigationButton: {
    paddingHorizontal: StyleVariable.space200,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
  },
  navigationIcon: {
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
  },
  label1: {
    marginTop: 8,
    fontFamily: FontFamily.singleLineBodySmallStrong,
    fontWeight: "600",
    lineHeight: 14,
    textAlign: "center",
  },
  navigationButton1: {
    height: 68,
    padding: StyleVariable.space200,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
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
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorGold_100,
    flexDirection: "row",
  },
  refresh: {
    color: "#0f21c8",
    width: 61,
    transform: [
      {
        rotate: "0.2deg",
      },
    ],
    display: "flex",
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    fontSize: FontSize.body1_size,
    lineHeight: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  refreshWrapper: {
    top: 241,
    left: 282,
    borderRadius: Border.br_3xs,
    height: 34,
    paddingHorizontal: Padding.p_110xl,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorGold_100,
  },
  bluetoothIcon1: {
    top: 110,
    left: 26,
    width: 48,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  bluetoothConnection: {
    top: 122,
    left: 93,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    position: "absolute",
  },
  connectedDisconnected: {
    left: 103,
    width: 241,
    position: "absolute",
  },
  status2: {
    marginLeft: -161.5,
    width: 66,
    height: 32,
    top: 186,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.body1,
    fontWeight: "700",
  },
  stateLayerOverlay: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    zIndex: 0,
    position: "absolute",
    width: "100%",
  },
  initial: {
    marginTop: -20,
    marginLeft: -20,
    color: Color.schemesOnPrimaryContainer,
    fontFamily: FontFamily.m3LabelSmall,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.heading2_size,
    height: 40,
    width: 40,
    left: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  buildingBlocksmonogram: {
    backgroundColor: Color.schemesPrimaryContainer,
    height: 40,
    width: 40,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  leadingElement: {
    justifyContent: "center",
    overflow: "hidden",
  },
  overline: {
    textAlign: "left",
    fontSize: FontSize.body1_size,
    lineHeight: 16,
    alignSelf: "stretch",
  },
  headline: {
    color: Color.schemesOnSurface,
    letterSpacing: 1,
    fontFamily: FontFamily.m3BodyMedium,
    lineHeight: 24,
    fontSize: FontSize.heading2_size,
  },
  supportingText: {
    lineHeight: 20,
    color: Color.schemesOnSurfaceVariant,
    fontSize: FontSize.bodyForm_size,
    fontFamily: FontFamily.m3BodyMedium,
    letterSpacing: 0,
    display: "none",
  },
  content: {
    marginLeft: 16,
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
    flex: 1,
  },
  trailingSupportingText: {
    fontSize: FontSize.m3LabelSmall_size,
    textAlign: "right",
  },
  container: {
    borderRadius: Border.br_11xs,
    height: 18,
    backgroundColor: Color.schemesPrimary,
    zIndex: 0,
    width: 18,
  },
  checkSmallIcon: {
    marginTop: -12,
    marginLeft: -12,
    zIndex: 1,
    height: 24,
    width: 24,
    top: "50%",
    left: "50%",
  },
  stateLayer1: {
    padding: Padding.p_2xs,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxes: {
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_9xs,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "none",
  },
  trailingElement: {
    width: 44,
    marginLeft: 16,
    height: 48,
    alignItems: "center",
  },
  stateLayer: {
    height: 56,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    zIndex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  divider: {
    borderColor: Color.schemesOutlineVariant,
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
    borderStyle: "solid",
  },
  horizontalfullWidth: {
    zIndex: 2,
    alignSelf: "stretch",
    justifyContent: "center",
    display: "none",
  },
  listItem1: {
    top: 279,
  },
  listItem2: {
    top: 447,
  },
  connect: {
    lineHeight: 17,
    color: Color.colorWhitesmoke,
    textAlign: "left",
    fontFamily: FontFamily.body1,
    fontWeight: "700",
    fontSize: FontSize.bodyForm_size,
  },
  connectWrapper: {
    top: 292,
    width: 90,
    left: 271,
    paddingHorizontal: Padding.p_126xl,
    borderRadius: Border.br_21xl,
  },
  connectContainer: {
    top: 457,
    width: 90,
    left: 271,
    paddingHorizontal: Padding.p_126xl,
    borderRadius: Border.br_21xl,
  },
  disconnectWrapper: {
    top: 541,
    left: 6,
    width: 123,
    paddingHorizontal: Padding.p_126xl,
    borderRadius: Border.br_21xl,
  },
  connectFrame: {
    top: 402,
    width: 90,
    left: 271,
    paddingHorizontal: Padding.p_126xl,
    borderRadius: Border.br_21xl,
  },
  frameView: {
    top: 349,
    width: 90,
    left: 271,
    paddingHorizontal: Padding.p_126xl,
    borderRadius: Border.br_21xl,
  },
  bluetoothItem: {
    top: 584,
    left: 254,
    height: 8,
  },
  listItem3: {
    top: 391,
  },
  listItem4: {
    top: 335,
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    backgroundColor: Color.colorSilver_100,
    width: 135,
    height: 5,
    borderRadius: Border.br_81xl,
  },
  iphoneIndicator: {
    bottom: 0,
    left: -18,
    width: 393,
    height: 30,
    position: "absolute",
  },
  bluetooth: {
    borderRadius: Border.br_11xl,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorGold_100,
  },
});

export default Bluetooth1;
