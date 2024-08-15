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
  declare module '@env' {
    export const MAP_GEO_API_SECRET: string;
    export const APPWRITE_PROJECTID: string;
    export const APPWRITE_DATABASEID: string;
    export const APPWRITE_USECOLLECTIONID: string;
    export const APPWRITE_STORAGEID: string;
  }
  