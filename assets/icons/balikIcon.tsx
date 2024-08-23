import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BalikIcon = ({width, height, color, ...props}) => (
  <Svg
    width={width ? width : 24}
    height={height ? height : 24}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 6.75C8 6.33579 8.33578 6 8.75 6H15.75C18.0865 6 20.0117 6.78107 21.25 8.01578C22.4814 9.2436 23 10.8763 23 12.5C23 14.1237 22.4814 15.7564 21.25 16.9842C20.0117 18.2189 18.0865 19 15.75 19H7.56066L10.7803 22.2197C11.0732 22.5126 11.0732 22.9874 10.7803 23.2803C10.4874 23.5732 10.0126 23.5732 9.71967 23.2803L5.21967 18.7803C5.07902 18.6397 5 18.4489 5 18.25C5 18.0511 5.07902 17.8603 5.21967 17.7197L9.71967 13.2197C10.0126 12.9268 10.4874 12.9268 10.7803 13.2197C11.0732 13.5126 11.0732 13.9874 10.7803 14.2803L7.56066 17.5H15.75C17.7385 17.5 19.1758 16.8436 20.1 15.922C21.0311 14.9936 21.5 13.7513 21.5 12.5C21.5 11.2487 21.0311 10.0064 20.1 9.07797C19.1758 8.15643 17.7385 7.5 15.75 7.5H8.75C8.33578 7.5 8 7.16421 8 6.75Z"
      fill={color} 
    />
  </Svg>
);
export default BalikIcon;
