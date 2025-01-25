import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const Shield = (
  { width = 48, height = 48, color = "#000", ...props }: SvgProps & { color?: string, strokeWidth?: number },
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
      d="M4.618 8.302c.2-1.73 1.25-3.158 2.95-3.534C10.22 4.181 15.361 3.5 24.931 3.5s14.711.681 17.363 1.268c1.7.376 2.75 1.804 2.95 3.534.304 2.616.687 6.924.687 11.998 0 9.48-5.003 18.35-13.432 22.688-2.816 1.45-5.564 2.512-7.568 2.512-2.004 0-4.752-1.063-7.567-2.512C8.934 38.65 3.93 29.78 3.93 20.3c0-5.074.384-9.382.687-11.998Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M12.272 14.387c.16-1.626 1.146-2.953 2.754-3.243 1.811-.327 4.867-.644 9.905-.644 5.04 0 8.095.317 9.905.644 1.609.29 2.594 1.617 2.755 3.243.167 1.697.34 4.125.34 6.913 0 5.314-2.58 10.21-6.902 13.302-2.204 1.576-4.522 2.898-6.098 2.898-1.575 0-3.894-1.322-6.097-2.898C14.51 31.51 11.93 26.614 11.93 21.3c0-2.788.174-5.216.341-6.913Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(Shield);
export default ForwardRef;
