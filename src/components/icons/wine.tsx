import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { forwardRef } from "react";

const Wine = (
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
      d="M40.248 7.595c-.375-2.223-2.182-3.628-4.43-3.788-2.233-.16-5.703-.307-10.886-.307-5.183 0-8.653.148-10.885.307-2.249.16-4.055 1.565-4.43 3.788-.359 2.118-.685 5.417-.685 10.405 0 7.221 4.371 12.26 10.774 13.912 1.03.265 1.78 1.203 1.681 2.261l-.335 3.573c-.113 1.202-.937 2.214-2.07 2.628a77.543 77.543 0 0 0-5.265 2.176 1.521 1.521 0 0 0-.886 1.392c0 .86.698 1.558 1.558 1.558h21.084c.86 0 1.558-.698 1.558-1.558 0-.6-.34-1.144-.886-1.392a77.543 77.543 0 0 0-5.264-2.176c-1.133-.414-1.958-1.426-2.07-2.628l-.335-3.572c-.1-1.058.651-1.997 1.68-2.262C36.56 30.261 40.932 25.222 40.932 18c0-4.988-.326-8.287-.684-10.405Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M40.931 14.5s-8-.5-16.5-.5-15.5.5-15.5.5"
    />
  </Svg>
);

const ForwardRef = forwardRef(Wine);
export default ForwardRef;
