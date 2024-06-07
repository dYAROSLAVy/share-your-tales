import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
export const SvgUser = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.color}
    {...props}
  >
    <Path d="M15.7501 6C15.7501 8.07107 14.0712 9.75 12.0001 9.75C9.92902 9.75 8.25009 8.07107 8.25009 6C8.25009 3.92893 9.92902 2.25 12.0001 2.25C14.0712 2.25 15.7501 3.92893 15.7501 6Z" />
    <Path d="M4.50122 20.1182C4.57153 16.0369 7.90196 12.75 12.0001 12.75C16.0983 12.75 19.4288 16.0371 19.499 20.1185C17.2162 21.166 14.6765 21.75 12.0004 21.75C9.32408 21.75 6.78418 21.1659 4.50122 20.1182Z" />
    <Path
      d="M15.7501 6C15.7501 8.07107 14.0712 9.75 12.0001 9.75C9.92902 9.75 8.25009 8.07107 8.25009 6C8.25009 3.92893 9.92902 2.25 12.0001 2.25C14.0712 2.25 15.7501 3.92893 15.7501 6Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.50122 20.1182C4.57153 16.0369 7.90196 12.75 12.0001 12.75C16.0983 12.75 19.4288 16.0371 19.499 20.1185C17.2162 21.166 14.6765 21.75 12.0004 21.75C9.32408 21.75 6.78418 21.1659 4.50122 20.1182Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
