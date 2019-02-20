import { Platform, Dimensions } from "react-native";
import { setContrast } from "./variables-helpers";

//== Global variables
//## Variables to be used during styling
//-------------------------------------------------------------------------------------------------------------------//
// System defined read-only values
export const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

// Brand Style
export const brand = {
  primary: "#0595DB",
  success: "#76CA02",
  warning: "#f99b1d",
  danger: "#ed1c24"
};

// Gray Colors
export const gray = {
  darkest: "#222",
  darker: "#444",
  dark: "#666",
  regular: "#888",
  light: "#aaa",
  lighter: "#ccc",
  lightest: "#eee"
};

// Background Colors
export const background = {
  light: "#FFF",
  dark: "#222",
  primary: brand.primary,
  secondary: gray.light
};

// Border Style
export const border = {
  color: "#ddd",
  radius: Platform.select({ ios: 10, android: 5 })
};

// Font Styles
export const font = {
  size: 14,
  sizeSmall: 12,
  sizeLarge: 18,
  sizeH1: 31,
  sizeH2: 26,
  sizeH3: 24,
  sizeH4: 18,
  sizeH5: 14,
  sizeH6: 12,
  color: setContrast("#FFF"),
  weightLight: "100",
  weightNormal: "normal",
  weightSemiBold: "600",
  weightBold: "bold",
  family: Platform.select({ ios: "San Francisco", android: "normal" })
};

// Spacing
export const spacing = {
  smallest: 5,
  smaller: 10,
  small: 15,
  regular: 20,
  large: 25,
  larger: 30,
  largest: 40
};

// Button Styles
export const button = {
  fontSize: font.size,
  borderRadius: Platform.select({ ios: border.radius + 16, android: border.radius }),

  primary: {
    color: setContrast(brand.primary),
    // color: brand.primary,
    borderColor: brand.primary,
    background: brand.primary
  },
  secondary: {
    color: setContrast("#FFF"),
    // color: brand.primary,
    borderColor: gray.lighter,
    background: "#FFF"
  },
  success: {
    color: setContrast(brand.success),
    // color: brand.success,
    borderColor: brand.success,
    background: brand.success
  },
  warning: {
    color: setContrast(brand.warning),
    // color: brand.warning,
    borderColor: brand.warning,
    background: brand.warning
  },
  danger: {
    color: setContrast(brand.danger),
    // color: brand.danger,
    borderColor: brand.danger,
    background: brand.danger
  }
};