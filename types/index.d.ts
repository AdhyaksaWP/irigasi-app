declare module "*.jpg";
declare module "*.png";
declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}
declare module 'react-native-base64' {
    export function encode(input: string): string;
    export function encodeFromByteArray(input: number[]): string;
    export function decode(input: string): string;
  }
  