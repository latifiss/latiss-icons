import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { forwardRef } from "react";

const IceCream = (
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
      d="M17.94 3.632c-4.408.184-7.64 3.339-7.845 7.746a177.225 177.225 0 0 0-.164 8.122c0 3.359.067 6.023.164 8.122.204 4.407 3.437 7.562 7.845 7.746 1.88.079 4.188.132 6.991.132 2.804 0 5.112-.053 6.992-.132 4.408-.184 7.64-3.338 7.844-7.746.097-2.098.164-4.763.164-8.122s-.067-6.024-.164-8.122c-.204-4.408-3.436-7.562-7.844-7.746-1.88-.079-4.188-.132-6.992-.132a168.2 168.2 0 0 0-6.99.132Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m20.136 35.441-.611 4.58c-.338 2.528 1.275 4.96 3.798 5.33.613.09 1.18.149 1.609.149.43 0 .995-.06 1.608-.15 2.524-.37 4.136-2.801 3.799-5.329l-.612-4.58M19.931 13.5v12M29.931 13.5v12"
    />
  </Svg>
);

const ForwardRef = forwardRef(IceCream);
export default ForwardRef;
