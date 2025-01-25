import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { forwardRef } from "react";

const Alien = (
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
      strokeLinejoin="round"
      strokeWidth={3}
      d="M24.931 45.5c-10 0-21-11.118-21-25.421 0-3 0-16.579 21-16.579s21 13.579 21 16.579c0 14.303-11 25.421-21 25.421Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M30.931 34.5s-2 3-6 3-6-3-6-3"
    />
    <Path
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={3}
      d="M22.431 24.97c0 .826-.645 1.499-1.47 1.522-.188.005-.379.008-.573.008C9.43 26.5 9.43 17.924 9.43 16.03c0-.826.646-1.499 1.47-1.522.188-.005.38-.008.574-.008 10.956 0 10.956 8.576 10.956 10.47ZM27.431 24.97c0 .826.646 1.499 1.47 1.522.189.005.38.008.574.008 10.956 0 10.956-8.576 10.956-10.47 0-.826-.645-1.499-1.47-1.522a20.292 20.292 0 0 0-.573-.008c-10.956 0-10.957 8.576-10.957 10.47Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(Alien);
export default ForwardRef;
