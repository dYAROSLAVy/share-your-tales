import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
export const SvgHeart = (props: SvgProps) => (
  <Svg width={18} height={16} fill="none" {...props}>
    <Path
      d="M17.0999 4.72726C17.0999 2.55829 15.2111 0.799988 12.8812 0.799988C11.1391 0.799988 9.64365 1.78292 8.9999 3.18552C8.35615 1.78292 6.86071 0.799988 5.11865 0.799988C2.7887 0.799988 0.899902 2.55829 0.899902 4.72726C0.899902 11.0288 8.9999 15.2 8.9999 15.2C8.9999 15.2 17.0999 11.0288 17.0999 4.72726Z"
      fill="#131313"
      stroke="#131313"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
