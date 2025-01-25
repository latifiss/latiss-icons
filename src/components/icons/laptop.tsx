import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { forwardRef } from "react";

const Laptop = (
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
      d="M24.931 41.5c-9.62 0-15-.41-17.757-.734-1.603-.19-2.75-1.264-2.923-2.87a60.606 60.606 0 0 1-.197-2.297A1.973 1.973 0 0 1 6.033 33.5h11.696c.702 0 1.323.455 1.534 1.125.21.67.832 1.125 1.534 1.125h8.27c.701 0 1.322-.455 1.533-1.125.211-.67.832-1.125 1.534-1.125H43.83c1.144 0 2.058.959 1.979 2.1a60.55 60.55 0 0 1-.197 2.297c-.173 1.605-1.32 2.68-2.924 2.869-2.755.324-8.137.734-17.757.734Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M6.245 33.5c-.171-2.208-.314-5.42-.314-10 0-5.89.236-9.518.466-11.658.189-1.755 1.402-3.084 3.141-3.383 2.587-.446 7.32-.959 15.393-.959s12.806.513 15.393.959c1.74.299 2.953 1.628 3.142 3.383.23 2.14.465 5.767.465 11.658 0 4.58-.142 7.792-.313 10"
    />
  </Svg>
);

const ForwardRef = forwardRef(Laptop);
export default ForwardRef;
