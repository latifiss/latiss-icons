import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { Ref, forwardRef } from "react"

const Send = (
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
      strokeLinejoin="round"
      strokeWidth={3}
      d="M4.92 7.831c-.907-2.236 1.145-4.368 3.425-3.578 7.73 2.679 22.423 8.422 35.323 17.184a3.683 3.683 0 0 1 0 6.127c-12.9 8.761-27.594 14.505-35.323 17.184-2.28.79-4.332-1.343-3.425-3.579 1.95-4.803 4.178-9.412 5.287-11.643a3.907 3.907 0 0 1 2.177-1.93l8.547-3.096-8.547-3.095a3.907 3.907 0 0 1-2.177-1.93C9.098 17.244 6.87 12.635 4.92 7.83Z"
    />
  </Svg>
)

const ForwardRef = forwardRef(Send);
export default ForwardRef;
