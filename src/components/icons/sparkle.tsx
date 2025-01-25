import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const Sparkle = (
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
      d="M34.111 32.646c-.374 1.139-1.985 1.139-2.36 0l-2.518-7.656a1.243 1.243 0 0 0-.791-.792l-7.657-2.518c-1.138-.375-1.138-1.985 0-2.36l7.657-2.518c.374-.123.668-.417.791-.792l2.518-7.656c.375-1.139 1.986-1.139 2.36 0l2.518 7.656c.124.375.418.669.792.792l7.656 2.518c1.14.375 1.14 1.985 0 2.36l-7.656 2.518a1.243 1.243 0 0 0-.792.792l-2.518 7.656ZM17.9 44.798c-.307.936-1.63.936-1.938 0l-1.9-5.778a1.02 1.02 0 0 0-.65-.65l-5.779-1.9c-.935-.308-.935-1.632 0-1.94l5.778-1.9a1.02 1.02 0 0 0 .65-.65l1.901-5.778c.308-.936 1.631-.936 1.939 0l1.9 5.778c.101.308.343.549.65.65l5.779 1.9c.935.308.935 1.632 0 1.94l-5.778 1.9a1.02 1.02 0 0 0-.65.65L17.9 44.798ZM13.804 20.869c-.277.841-1.468.841-1.745 0l-1.71-5.2a.919.919 0 0 0-.586-.586l-5.2-1.71c-.842-.277-.842-1.469 0-1.745l5.2-1.71a.919.919 0 0 0 .586-.586l1.71-5.2c.277-.842 1.468-.842 1.745 0l1.71 5.2a.919.919 0 0 0 .586.585l5.2 1.71c.842.277.842 1.469 0 1.745l-5.2 1.71a.919.919 0 0 0-.586.586l-1.71 5.2Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(Sparkle);
export default ForwardRef;
