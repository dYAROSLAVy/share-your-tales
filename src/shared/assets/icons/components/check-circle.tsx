import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
export const SvgCheckCircle = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <G clipPath="url(#clip0_81_3825)">
      <Path
        d="M6.5 9.3125L8.1875 11L11 7.0625M15.5 8.75C15.5 12.4779 12.4779 15.5 8.75 15.5C5.02208 15.5 2 12.4779 2 8.75C2 5.02208 5.02208 2 8.75 2C12.4779 2 15.5 5.02208 15.5 8.75Z"
        stroke="#87B71F"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_81_3825">
        <Rect width={18} height={18} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
