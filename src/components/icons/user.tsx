import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { Ref, forwardRef } from "react"

const User = (
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
      d="M38.931 17.5c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M19.283 30.314c-5.094 1.519-9.076 5.036-10.637 9.44-.846 2.39.907 4.637 3.417 4.994 2.698.383 6.855.752 12.868.752 6.014 0 10.171-.37 12.869-.752 2.51-.357 4.263-2.604 3.417-4.994-1.56-4.404-5.543-7.921-10.637-9.44M38.931 17.5c-7.732 0-14-6.268-14-14 0 7.732-6.268 14-14 14M28.931 24c-1.75 2.667-6.25 2.667-8 0M19.931 18.5v.5M29.932 18.5v.5"
    />
  </Svg>
)

const ForwardRef = forwardRef(User);
export default ForwardRef;
