import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const SvgComponent = (
  { width = 48, height = 48, color = "#000", ...props }: SvgProps & { color?: string },
  ref: Ref<Svg>
) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    ref={ref}
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M4.47 40.243c.208 2.555 2.163 4.51 4.719 4.718 3.228.262 8.378.539 15.742.539 7.364 0 12.515-.277 15.743-.539 2.556-.208 4.51-2.163 4.718-4.718.263-3.228.54-8.379.54-15.743 0-7.364-.277-12.515-.54-15.743-.207-2.555-2.163-4.51-4.718-4.718-3.228-.262-8.379-.539-15.743-.539-7.364 0-12.514.277-15.742.539-2.556.208-4.511 2.163-4.719 4.718-.262 3.228-.539 8.379-.539 15.743 0 7.364.277 12.515.54 15.743ZM23.931 16.5h14M25.931 32.5h-14M11.931 16.5h4M37.931 32.5h-4"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M15.931 16.5a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM33.931 32.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(SvgComponent);
export default ForwardRef;
