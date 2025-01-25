import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const Thumbprint = (
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
      d="M24.931 20.5v8M15.931 21.25c0-.178 0-.356.002-.533.03-5.062 3.926-9.217 8.988-9.217 5.067 0 8.888 4.15 8.978 9.216a213.473 213.473 0 0 1 0 7.568c-.09 5.067-3.91 9.216-8.978 9.216-5.073 0-8.962-4.144-8.988-9.217l-.002-.533"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M34.431 6.208a17.916 17.916 0 0 0-9.5-2.708c-9.94 0-18 8.059-18 18v6c0 8.743 6.235 16.031 14.5 17.66M39.553 11a17.918 17.918 0 0 1 3.378 10.5v6c0 8.743-6.234 16.031-14.5 17.66"
    />
  </Svg>
);

const ForwardRef = forwardRef(Thumbprint);
export default ForwardRef;
