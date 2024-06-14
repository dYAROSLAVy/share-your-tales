import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
export const SvgPlus = (props: SvgProps) => (
  <Svg width={24} height={24} stroke={props.color || "white"} {...props}>
    <G clipPath="url(#clip0_81_3463)">
      <Path
        d="M12 3V21M21 12L3 12"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_81_3463">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
