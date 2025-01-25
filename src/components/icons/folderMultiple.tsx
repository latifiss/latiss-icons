import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const FolderMultiple = (
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
      d="M36.531 40.231c-.165 1.735-1.32 3.082-3.035 3.393-2.306.419-6.359.876-13.065.876-6.705 0-10.758-.457-13.064-.876-1.714-.311-2.87-1.658-3.036-3.393-.198-2.088-.4-5.607-.4-11.297s.202-9.209.4-11.297c.166-1.735 1.324-3.082 3.039-3.394.177-.032.364-.064.561-.097"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M20.705 4.693c1.83-.157 3.611.615 4.818 2l1.063 1.219A4 4 0 0 0 29.6 9.283h10.467c3.12 0 5.717 2.393 5.8 5.513.04 1.475.063 3.178.063 5.138 0 5.69-.2 9.209-.4 11.297-.165 1.735-1.32 3.081-3.035 3.393-2.306.419-6.359.876-13.065.876-6.705 0-10.758-.457-13.064-.876-1.714-.312-2.87-1.658-3.036-3.393-.198-2.088-.4-5.607-.4-11.297s.202-9.21.4-11.297c.166-1.735 1.324-3.083 3.039-3.394 1.052-.191 2.469-.39 4.335-.55Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(FolderMultiple);
export default ForwardRef;
