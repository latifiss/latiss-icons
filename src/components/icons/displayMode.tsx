import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const DisplayMode = (
  { width = 48, height = 48, color = "#000", ...props }: SvgProps & { color?: string, strokeWidth?: number },
  ref: Ref<Svg>
) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    ref={ref}
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M24.931 45.5c-11.598 0-21-9.402-21-21s9.402-21 21-21 21 9.402 21 21-9.402 21-21 21Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M34.975 14.747c.647.666-.114 1.754-1.043 1.754a8 8 0 1 0 0 16c.928 0 1.69 1.088 1.043 1.754A13.959 13.959 0 0 1 24.932 38.5c-7.732 0-14-6.268-14-14s6.268-14 14-14c3.94 0 7.5 1.627 10.043 4.246Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(DisplayMode);
export default ForwardRef;
