import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { forwardRef } from "react";

const Watermelon = (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M38.725 38.294c-9.002 9.003-23.245 9.57-32.908 1.703-1.137-.926-1.247-2.565-.316-3.699 2.141-2.61 6.701-7.856 15.037-16.192C28.873 11.771 34.118 7.212 36.728 5.07c1.134-.93 2.773-.821 3.699.316 7.867 9.663 7.3 23.906-1.703 32.908Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={3}
      d="M33.978 7.404A18.45 18.45 0 0 1 39.931 21c0 10.217-8.282 18.5-18.5 18.5a18.45 18.45 0 0 1-13.595-5.954"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m29.931 28.5 1 1M31.398 18.193l.933.934M19.002 30.59l.933.933"
    />
  </Svg>
);

const ForwardRef = forwardRef(Watermelon);
export default ForwardRef;
