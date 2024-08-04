import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BluetoothIcon = ({width, height, color, ...props}) => (
  <Svg
    width={width ? width : 24}
    height={height ? height : 24}
    viewBox="0 0 26 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 13L24 35L13 46V2L24 13L2 35"
      stroke={color ? color : "#49454F"}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BluetoothIcon;
