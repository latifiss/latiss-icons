import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { forwardRef } from "react";

const ChargeBattery = (
  { width = 48, height = 48, color = "#000000", ...props }: SvgProps & { color?: string },
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
    <G
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      clipPath="url(#a)"
    >
      <Path d="M36.78 40.116c2.549-.166 4.54-2.064 4.752-4.608.082-.979.162-2.136.228-3.481l1.777-.174c1.414-.139 2.638-1.03 2.928-2.42.245-1.176.466-2.818.466-4.917 0-2.105-.222-3.75-.468-4.926-.29-1.386-1.507-2.275-2.916-2.418l-1.786-.182a102.165 102.165 0 0 0-.229-3.497c-.212-2.545-2.203-4.443-4.752-4.609-2.939-.191-7.478-.384-13.849-.384-6.37 0-10.91.193-13.849.384-2.548.166-4.539 2.064-4.752 4.608-.207 2.476-.399 6.096-.399 11.008 0 4.912.192 8.532.4 11.008.212 2.544 2.203 4.442 4.751 4.608 2.94.191 7.48.384 13.85.384 6.37 0 10.91-.193 13.848-.384Z" />
      <Path d="m26.03 22.128-.803-4.018c-.294-1.47-2.04-2.106-3.21-1.17l-8.343 6.674c-1.178.942-.385 2.837 1.112 2.66l5.348-.628.804 4.019c.294 1.47 2.04 2.105 3.21 1.17l8.343-6.675c1.177-.942.385-2.837-1.113-2.66l-5.347.628Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.931.5h48v48h-48z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const ForwardRef = forwardRef(ChargeBattery);
export default ForwardRef;
