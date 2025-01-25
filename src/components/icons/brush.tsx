import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const Brush = (
  { width = 48, height = 48, color = "#000", ...props }: SvgProps & { color?: string },
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
      d="m45.499 13.53-8.587 13.637c-.637 1.012-1.56 1.814-2.675 2.245-2.133.823-5.815 2.088-8.306 2.088 0 0 .22-2.78-2.5-5.5s-5.5-2.5-5.5-2.5c0-2.54 1.367-6.246 2.232-8.335.432-1.046 1.198-1.911 2.152-2.52L35.93 3.947c.31-.199.638-.37.995-.461 1.207-.307 4.278-.713 7.011 2.02 2.75 2.75 2.315 5.862 2.005 7.062-.089.345-.254.66-.443.962Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M17.931 23.5c-12.167 0-12.602 7.684-12.93 13.487-.093 1.633-.177 3.116-.511 4.238-.044.149-.094.299-.143.449-.224.68-.45 1.371-.251 2.046.356 1.2 1.302 1.78 2.978 1.78 11.382 0 18.796-1.984 18.857-14.346M35.894 28.384c-.166-1.893-1.007-5.918-4.968-9.879-3.85-3.849-7.758-4.753-9.714-4.952"
    />
  </Svg>
);

const ForwardRef = forwardRef(Brush);
export default ForwardRef;
