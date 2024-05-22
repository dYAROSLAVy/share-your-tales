import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
export const SvgEye = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#clip0_81_3849)">
      <G clipPath="url(#clip1_81_3849)">
        <Path
          d="M10.4455 12.5C11.8262 12.5 12.9454 11.3807 12.9454 10C12.9454 8.61929 11.8262 7.5 10.4455 7.5C9.06485 7.5 7.94559 8.61929 7.94559 10C7.94559 11.3807 9.06485 12.5 10.4455 12.5Z"
          fill="#696969"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.11005 10.5904C0.963193 10.2087 0.96332 9.78563 1.11041 9.40408C2.55453 5.65788 6.18894 3 10.4441 3C14.7014 3 18.3373 5.66051 19.7799 9.40962C19.9268 9.79127 19.9267 10.2144 19.7796 10.5959C18.3355 14.3421 14.7011 17 10.4459 17C6.18862 17 2.55273 14.3395 1.11005 10.5904ZM14.4458 10C14.4458 12.2091 12.655 14 10.4459 14C8.23682 14 6.44601 12.2091 6.44601 10C6.44601 7.79086 8.23682 6 10.4459 6C12.655 6 14.4458 7.79086 14.4458 10Z"
          fill="#696969"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_81_3849">
        <Rect width={20} height={20} rx={10} fill="white" />
      </ClipPath>
      <ClipPath id="clip1_81_3849">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
