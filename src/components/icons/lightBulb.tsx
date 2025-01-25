import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const LightBulb = (
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
      d="M14.447 33.883c-3.967-3.112-6.516-7.95-6.516-13.383 0-9.389 7.612-17 17-17 9.39 0 17 7.611 17 17 0 5.433-2.548 10.271-6.516 13.383a66.705 66.705 0 0 1-.971 3.48c-.307.998-1.136 1.723-2.174 1.832-1.394.145-3.743.305-7.339.305-3.595 0-5.944-.16-7.338-.305-1.038-.109-1.867-.834-2.174-1.833-.287-.933-.65-2.18-.972-3.479Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M17.42 39.17c.202 1.31.413 2.502.59 3.444.249 1.325 1.191 2.389 2.524 2.59 1.046.159 2.5.296 4.397.296 1.805 0 3.288-.124 4.418-.272 1.584-.208 2.694-1.526 2.866-3.114l.32-2.962M34.931 19.5c0-5.523-4.477-10-10-10"
    />
  </Svg>
);

const ForwardRef = forwardRef(LightBulb);
export default ForwardRef;
