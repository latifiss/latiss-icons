import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const Calendar = (
  { width = 48, height = 48, color = "#000", ...props }: SvgProps & { color?: string },
  ref: Ref<Svg>
) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 48 48"
    ref={ref}
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m16.931 27.553 6.77 6.947 9.23-12"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M11.934 9.063c-1.136.11-2.119.225-2.951.336-2.2.293-3.878 1.948-4.193 4.144-.407 2.844-.859 7.368-.859 13.457 0 6.09.452 10.614.86 13.458.314 2.196 1.993 3.85 4.192 4.144 3.13.417 8.38.898 15.948.898s12.819-.48 15.95-.898c2.198-.293 3.877-1.948 4.191-4.144.408-2.844.86-7.368.86-13.458 0-6.089-.452-10.613-.86-13.457-.314-2.196-1.993-3.851-4.192-4.144a82.173 82.173 0 0 0-2.951-.336M29.931 8.574a164.037 164.037 0 0 0-5-.074c-1.796 0-3.462.027-5 .074"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M29.945 9.77c.043 2.08 1.408 3.694 3.488 3.726a32.976 32.976 0 0 0 .996 0c2.08-.032 3.446-1.646 3.49-3.726a61.262 61.262 0 0 0 0-2.54c-.044-2.08-1.41-3.694-3.49-3.726a32.444 32.444 0 0 0-.996 0c-2.08.032-3.445 1.646-3.488 3.726a61.262 61.262 0 0 0 0 2.54ZM11.944 9.77c.044 2.08 1.41 3.694 3.49 3.726a32.976 32.976 0 0 0 .996 0c2.08-.032 3.445-1.646 3.488-3.726a61.262 61.262 0 0 0 0-2.54c-.043-2.08-1.408-3.694-3.488-3.726a32.444 32.444 0 0 0-.997 0c-2.08.032-3.445 1.646-3.489 3.726a61.262 61.262 0 0 0 0 2.54Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(Calendar);
export default ForwardRef;
