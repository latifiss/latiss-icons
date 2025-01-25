import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { forwardRef } from "react";

const Camera = (
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
      d="M15.002 11.294c-2.182.073-4.008.163-5.48.252-2.713.164-4.856 2.235-5.097 4.943a124.46 124.46 0 0 0-.494 10.875c0 4.257.246 8.09.494 10.874.24 2.708 2.384 4.78 5.097 4.943 3.323.2 8.456.41 15.41.41 6.953 0 12.085-.21 15.409-.41 2.713-.164 4.856-2.235 5.097-4.943.248-2.783.493-6.617.493-10.874 0-4.258-.245-8.091-.493-10.875-.241-2.708-2.384-4.779-5.097-4.943-1.472-.089-3.298-.18-5.48-.252L33.4 8.283c-.712-1.466-2.093-2.49-3.718-2.613a63.502 63.502 0 0 0-4.75-.17c-1.933 0-3.54.079-4.752.17-1.624.123-3.005 1.147-3.717 2.613l-1.46 3.01Z"
    />
    <Path
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={3}
      d="M24.931 35.5a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(Camera);
export default ForwardRef;
