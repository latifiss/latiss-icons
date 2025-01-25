import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { Ref, forwardRef } from "react"

const Signal = (
  { width = 48, height = 48, color = "#000", ...props }: SvgProps & { color?: string },
  ref: Ref<Svg>
) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    ref={ref}
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M29.58 14.216c.806-1.961 3.535-2.09 4.524-.214L38.317 22h5.927c.611 0 1.217.271 1.435.842.388 1.013.388 2.304 0 3.317-.218.57-.824.841-1.435.841h-6.28a4 4 0 0 1-3.542-2.14l-2.171-4.132-4.997 12.118c-.817 1.981-3.584 2.084-4.545.17l-5.29-10.534-.986 2.173A4 4 0 0 1 12.791 27H5.688c-.616 0-1.228-.274-1.459-.846a4.567 4.567 0 0 1 0-3.307c.23-.572.843-.847 1.459-.847h6.808l2.747-5.819c.891-1.888 3.568-1.916 4.498-.046l4.956 9.956 4.883-11.875Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M4.022 17.5c.103-3.77.279-6.657.448-8.743.208-2.555 2.163-4.51 4.719-4.718 3.228-.262 8.378-.539 15.742-.539 7.364 0 12.515.277 15.743.539 2.556.208 4.51 2.163 4.718 4.718.17 2.086.345 4.974.448 8.743m0 14c-.103 3.77-.278 6.657-.448 8.743-.207 2.555-2.163 4.51-4.718 4.718-3.228.262-8.379.539-15.743.539-7.364 0-12.514-.277-15.742-.539-2.556-.208-4.511-2.163-4.719-4.718-.17-2.086-.345-4.974-.448-8.743"
    />
  </Svg>
);

const ForwardRef = forwardRef(Signal);
export default ForwardRef;
