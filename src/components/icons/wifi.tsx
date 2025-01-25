import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { forwardRef } from "react";

const Wifi = (
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
      d="M28.894 38.5a3.999 3.999 0 1 1-7.997 0 3.999 3.999 0 1 1 7.997 0ZM5.132 17.6c-.7-1.226-.461-2.786.656-3.65C10.614 10.223 16.995 7.5 24.93 7.5c7.937 0 14.318 2.722 19.144 6.45 1.117.864 1.357 2.425.656 3.65l-.982 1.719c-.94 1.645-3.147 2.008-4.704.928-3.798-2.635-8.62-4.747-14.114-4.747-5.493 0-10.315 2.112-14.113 4.747-1.557 1.08-3.764.717-4.704-.928L5.132 17.6ZM13.345 28.62c-.816-1.223-.642-2.88.542-3.75 2.812-2.064 6.217-3.37 11.044-3.37 4.828 0 8.232 1.306 11.044 3.37 1.185.87 1.358 2.527.543 3.75l-.954 1.43c-.855 1.284-2.668 1.49-3.998.708-1.756-1.033-4.059-1.902-6.635-1.902-2.576 0-4.878.87-6.635 1.902-1.33.782-3.142.576-3.998-.707l-.953-1.431Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(Wifi);
export default ForwardRef;
