import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { forwardRef } from "react";

const Chef = (
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
      d="M32.5 7.627A8.993 8.993 0 0 0 24.93 3.5a8.993 8.993 0 0 0-7.568 4.127A8 8 0 1 0 9.651 21.17a478.991 478.991 0 0 0 2.18 21.549c.171 1.36 1.252 2.4 2.62 2.488 2.086.135 5.58.293 10.48.293 4.901 0 8.395-.158 10.48-.293 1.369-.088 2.45-1.128 2.62-2.488a479.002 479.002 0 0 0 2.18-21.549A8 8 0 1 0 32.5 7.627Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M38.684 37.863c-2.556-.133-6.835-.265-13.753-.265-6.917 0-11.196.132-13.753.265"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={3}
      d="m19.931 21.5 1 8M29.931 21.5l-1 8"
    />
  </Svg>
);

const ForwardRef = forwardRef(Chef);
export default ForwardRef;
