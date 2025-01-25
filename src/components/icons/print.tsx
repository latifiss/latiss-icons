import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { forwardRef } from "react";

const Print = (
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
      d="M12.947 28.257c2.93.14 6.836.244 11.984.244 5.147 0 9.052-.104 11.982-.244-.045 5.962-.167 10.022-.277 12.579-.093 2.135-1.605 3.892-3.724 4.167a62.476 62.476 0 0 1-7.983.498c-3.277 0-6.006-.242-7.981-.498-2.118-.275-3.63-2.03-3.722-4.164-.112-2.557-.235-6.617-.28-12.582Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M36.786 36.37c1.827-.045 3.336-.097 4.553-.147 2.371-.098 4.252-1.916 4.387-4.286.11-1.92.205-4.45.205-7.437 0-3.262-.227-5.981-.47-7.955-.264-2.132-2.018-3.665-4.164-3.76-3.068-.135-8.291-.285-16.366-.285-7.858 0-13.165.142-16.404.275-2.372.097-4.255 1.916-4.39 4.287-.11 1.92-.206 4.452-.206 7.438 0 2.986.096 5.517.205 7.437.136 2.37 2.017 4.188 4.388 4.286 1.216.05 2.725.102 4.551.147M13.423 8l.052-.469c.214-1.832 1.573-3.247 3.4-3.505 1.873-.265 4.599-.526 8.056-.526 3.458 0 6.183.261 8.057.526 1.826.258 3.186 1.673 3.4 3.505L36.44 8M36.931 20.5h-1M18.931 34.5h12M18.931 39.5h12"
    />
  </Svg>
);

const ForwardRef = forwardRef(Print);
export default ForwardRef;
