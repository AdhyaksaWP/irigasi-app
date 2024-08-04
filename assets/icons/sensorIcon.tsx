import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SensorIcon = ({color, ...props}) => (
  <Svg
    width={24}
    height={22}
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 20H16M12 16V20M4 2H20C21.1046 2 22 2.89543 22 4V14C22 15.1046 21.1046 16 20 16H4C2.89543 16 2 15.1046 2 14V4C2 2.89543 2.89543 2 4 2Z"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SensorIcon;
