import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const Cursor = (
  { width = 48, height = 48, color = "#000", ...props }: SvgProps & { color?: string},
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
      d="M12.458 38.838c.819 2.051 3.174 2.842 5.06 1.692a76.548 76.548 0 0 0 7.45-5.175l5.922 7.743c1.557 2.035 4.234 2.79 6.325 1.31 1.181-.835 2.583-1.975 4.117-3.508 1.533-1.533 2.672-2.935 3.508-4.116 1.48-2.091.725-4.769-1.31-6.325l-7.744-5.922a76.554 76.554 0 0 0 5.176-7.45c1.15-1.887.36-4.242-1.693-5.06-5.05-2.016-15.322-5.59-30.817-8.542-2.696-.514-5.049 1.84-4.535 4.535 2.952 15.495 6.525 25.768 8.54 30.818Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(Cursor);
export default ForwardRef;
