import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const Skull = (
  { width = 48, height = 48, color = "#000", ...props }: SvgProps & { color?: string },
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
      d="M21.044 39.16C11.859 37.532 4.93 30.244 4.93 21.5c0-9.941 8.955-18 20-18 10.673 0 19.393 7.524 19.97 17h.03V33c0 4.15-.12 6.862-.25 8.58-.13 1.709-1.232 3.055-2.92 3.34-1.754.297-4.548.58-8.83.58-4.281 0-7.075-.283-8.828-.58-1.69-.285-2.79-1.631-2.92-3.34a72.52 72.52 0 0 1-.14-2.42Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M36.931 23.5c0 2.761 1.791 5 4 5 2.21 0 4-2.239 4-5s-1.79-5-4-5c-2.209 0-4 2.239-4 5ZM26.931 28.5c2.21 0 4-2.239 4-5s-1.79-5-4-5c-2.209 0-4 2.239-4 5s1.791 5 4 5ZM29.931 39.5v5.75M36.931 39.5v5.75"
    />
  </Svg>
);

const ForwardRef = forwardRef(Skull);
export default ForwardRef;
