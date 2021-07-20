import { typography } from "./typography";
import { colors } from "./colors";
import { CSSObject } from "styled-components";
import { layouts } from "./layouts";

export type ThemeType = {
  typography: Record<keyof typeof typography, CSSObject>
  colors: Record<keyof typeof colors, string>
  layouts: Record<keyof typeof layouts, CSSObject>
}

export const theme = {
  typography,
  colors,
  layouts
};

