import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { Ref, forwardRef } from "react"

const Filter = (
  { width = 48, height = 48, color = "#000", ...props }: SvgProps & { color?: string },
  ref: Ref<Svg>
) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    ref={ref}
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M24.931 6.5c-11.462 0-17.06.485-19.458.793-.912.117-1.542.894-1.542 1.814v3.2c0 .96.342 1.884 1.006 2.577 1.895 1.978 6.396 6.354 12.87 10.624.516.34.854.896.911 1.51.636 6.849 1.218 11.527 1.527 13.83a1.91 1.91 0 0 0 1.902 1.652c.364 0 .721-.102 1.03-.295l5.026-3.136c.766-.477 1.333-1.204 1.521-2.087.321-1.513.838-4.504 1.398-9.963.062-.61.4-1.159.91-1.496 6.488-4.274 10.996-8.658 12.894-10.64.664-.692 1.005-1.617 1.005-2.577v-3.2c0-.919-.63-1.696-1.54-1.813-2.4-.308-7.997-.793-19.46-.793Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(Filter);
export default ForwardRef;
