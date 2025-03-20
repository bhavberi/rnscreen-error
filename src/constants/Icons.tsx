import { ImageSourcePropType } from "react-native";

export interface IconSet {
  [key: string]: ImageSourcePropType;
}

export const otherIcons = {
  light: {
    back: require("../assets/icons/back.png"),
  },
  dark: {
    back: require("../assets/icons/back_dark.png"),
  },
};
