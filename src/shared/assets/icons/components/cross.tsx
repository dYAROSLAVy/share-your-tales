import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
export const SvgCross = (props: SvgProps) => (
  <Svg width={24} height={24} fill={props.color || "#131313"} {...props}>
    <G clipPath="url(#clip0_84_12764)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.21967 5.21967C5.51256 4.92678 5.98744 4.92678 6.28033 5.21967L18.7803 17.7197C19.0732 18.0126 19.0732 18.4874 18.7803 18.7803C18.4874 19.0732 18.0126 19.0732 17.7197 18.7803L5.21967 6.28033C4.92678 5.98744 4.92678 5.51256 5.21967 5.21967Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7803 5.21967C19.0732 5.51256 19.0732 5.98744 18.7803 6.28033L6.28033 18.7803C5.98744 19.0732 5.51256 19.0732 5.21967 18.7803C4.92678 18.4874 4.92678 18.0126 5.21967 17.7197L17.7197 5.21967C18.0126 4.92678 18.4874 4.92678 18.7803 5.21967Z"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_84_12764">
        <Rect width={20} height={20} fill="white" transform="translate(2 2)" />
      </ClipPath>
    </Defs>
  </Svg>
);
