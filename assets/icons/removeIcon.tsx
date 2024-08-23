import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */
const RemoveIcon = ({width, height, color, ...props}) => (
  <Svg
    width={width ? width : 24}
    height={height ? height : 24}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <G
      id="\uD83D\uDD0D-Product-Icons"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <G
        id="ic_fluent_dismiss_circle_48_regular"
        fill={color}
        fillRule="nonzero"
      >
        <Path
          d="M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M24,6.5 C14.3350169,6.5 6.5,14.3350169 6.5,24 C6.5,33.6649831 14.3350169,41.5 24,41.5 C33.6649831,41.5 41.5,33.6649831 41.5,24 C41.5,14.3350169 33.6649831,6.5 24,6.5 Z M17.7823881,16.0249942 L17.8838835,16.1161165 L24,22.233 L30.1161165,16.1161165 C30.5717282,15.6605048 31.2915486,15.6301307 31.7823881,16.0249942 L31.8838835,16.1161165 C32.3394952,16.5717282 32.3698693,17.2915486 31.9750058,17.7823881 L31.8838835,17.8838835 L25.767,24 L31.8838835,30.1161165 C32.3394952,30.5717282 32.3698693,31.2915486 31.9750058,31.7823881 L31.8838835,31.8838835 C31.4282718,32.3394952 30.7084514,32.3698693 30.2176119,31.9750058 L30.1161165,31.8838835 L24,25.767 L17.8838835,31.8838835 C17.4282718,32.3394952 16.7084514,32.3698693 16.2176119,31.9750058 L16.1161165,31.8838835 C15.6605048,31.4282718 15.6301307,30.7084514 16.0249942,30.2176119 L16.1161165,30.1161165 L22.233,24 L16.1161165,17.8838835 C15.6605048,17.4282718 15.6301307,16.7084514 16.0249942,16.2176119 L16.1161165,16.1161165 C16.5717282,15.6605048 17.2915486,15.6301307 17.7823881,16.0249942 Z"
          id="\uD83C\uDFA8-Color"
        />
      </G>
    </G>
  </Svg>
);
export default RemoveIcon;
