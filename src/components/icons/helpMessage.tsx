import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const HelpMessage = (
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
      d="M9.159 37.441c-2.545-.17-4.541-2.055-4.77-4.595-.239-2.665-.47-6.656-.47-12.154s.231-9.49.47-12.154c.229-2.54 2.225-4.426 4.77-4.595 3.228-.215 8.388-.443 15.773-.443s12.545.228 15.774.443c2.544.17 4.54 2.055 4.768 4.595.24 2.665.47 6.656.47 12.154s-.23 9.49-.47 12.154c-.228 2.54-2.224 4.426-4.768 4.595-2.83.189-7.144.387-13.139.433l-7.907 7.04c-1.29 1.147-3.33.232-3.33-1.495v-5.65a189.817 189.817 0 0 1-7.171-.328Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M24.5 33a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM27.069 9c-3.973 0-7.338 2.36-8 5-.595 2.374.791 4.424 3.098 4.378.621-.012 1.198-.29 1.733-.606.826-.49 2.133-1.247 3.169-1.772-2.034 1.125-5.67 2.797-5.67 5.267l-.002 2.229a2.5 2.5 0 0 0 2.5 2.504H25c.858 0 1.616-.433 2.066-1.092.52-.76.943-1.674 1.746-2.125C31.844 21.08 34.07 19.37 34.07 16c0-3.5-2.112-7-7-7Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(HelpMessage);
export default ForwardRef;
