import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
export const SvgLoading = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    stroke={props.color || "#B8DE64"}
    fill="none"
    {...props}
  >
    <Circle
      opacity={0.5}
      cx={12}
      cy={12}
      r={9}
      stroke="white"
      strokeWidth={2}
    />
    <Path
      d="M12 21C7.02944 21 3 16.9706 3 12"
      strokeWidth={2}
    />
  </Svg>
);
