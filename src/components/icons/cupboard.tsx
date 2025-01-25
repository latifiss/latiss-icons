import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { forwardRef } from "react";

const Cupboard = (
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
      d="M37.371 3.994c2.205.218 3.827 1.863 4.023 4.07.262 2.943.537 8.036.537 16.436s-.275 13.493-.537 16.435c-.197 2.208-1.818 3.853-4.023 4.071-2.504.248-6.488.494-12.44.494-5.952 0-9.935-.246-12.44-.494-2.204-.218-3.826-1.863-4.022-4.07C8.207 37.993 7.93 32.9 7.93 24.5s.276-13.493.538-16.436c.196-2.207 1.818-3.852 4.023-4.07 2.504-.248 6.487-.494 12.44-.494 5.951 0 9.935.246 12.44.494ZM41.931 24.5h-34M15.931 12.5v4M15.931 32.5v4"
    />
  </Svg>
);

const ForwardRef = forwardRef(Cupboard);
export default ForwardRef;
