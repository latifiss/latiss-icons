import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const AlertAdd = (
  { width = 48, height = 48, color = "#000", ...props }: SvgProps & { color?: string },
  ref: Ref<Svg>
) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    ref={ref}
    viewBox="0 0 48 48"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m42.932 30.075 1.47 2.384c1.478 2.393.672 4.866-2.116 5.237-3.188.424-8.512.804-17.355.804-8.842 0-14.166-.38-17.354-.804-2.789-.37-3.594-2.844-2.117-5.237l1.471-2.384a16 16 0 0 0 2.326-7.037l.479-5.589C10.324 10.581 15.403 5.1 21.93 3.796"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M33.931 27.5c6.628 0 12-5.373 12-12s-5.372-12-12-12c-6.627 0-12 5.373-12 12s5.373 12 12 12ZM33.931 10.5v10M33.931 9.5v12M38.931 15.5h-10M39.931 15.5h-12M16.979 38.378a8.001 8.001 0 0 0 15.905 0"
    />
  </Svg>
);

const ForwardRef = forwardRef(AlertAdd);
export default ForwardRef;
