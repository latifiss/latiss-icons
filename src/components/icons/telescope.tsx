import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { forwardRef } from "react";

const Telescope = (
  { width = 48, height = 48, color = "#000", ...props }: SvgProps & { color?: string },
  ref: React.Ref<Svg>
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
      strokeLinejoin="round"
      strokeWidth={3}
      d="M19.654 14.252c-.223-1.31.454-2.39 1.631-3.005 4.188-2.187 9.899-4.687 16.302-6.66 1.872-.576 3.828.384 4.464 2.236.584 1.7 1.344 4.11 2.199 7.302.855 3.192 1.402 5.66 1.747 7.422.375 1.923-.839 3.732-2.748 4.169-6.532 1.494-12.728 2.183-17.449 2.383-1.326.056-2.453-.54-2.914-1.786-.425-1.147-1.02-2.998-1.818-5.976-.798-2.98-1.208-4.88-1.414-6.085Z"
    />
    <Path
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={3}
      d="M19.782 14.954c-3.698 1.527-7.66 3.136-10.464 4.203M11.482 27.233c2.961-.478 7.197-1.066 11.164-1.592"
    />
    <Path
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={3}
      d="M9.08 18.365c-.304-.998-1.165-1.666-2.188-1.457a11.598 11.598 0 0 0-1.342.36c-.99.33-1.402 1.339-1.167 2.356.234 1.008.615 2.558 1.23 4.854.615 2.294 1.06 3.828 1.362 4.817.305.999 1.166 1.667 2.188 1.457a11.6 11.6 0 0 0 1.342-.36c.99-.33 1.402-1.338 1.167-2.355a148.13 148.13 0 0 0-1.23-4.854 148.207 148.207 0 0 0-1.361-4.818Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m21.931 45.5 8-17 8 17"
    />
  </Svg>
);

const ForwardRef = forwardRef(Telescope);
export default ForwardRef;
