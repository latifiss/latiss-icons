import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const Expand = (
  { width = 48, height = 48, color = "#000", ...props }: SvgProps & { color?: string },
  ref: Ref<Svg>
) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 48 48"
    ref={ref}
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M19.283 3.807c1.329.146 1.94 1.538 1.123 2.595-.812 1.052-2.014 2.495-3.746 4.357 2.114 2.355 3.488 4.11 4.301 5.22.647.88.732 1.992.021 2.822a15.8 15.8 0 0 1-.865.926c-.33.328-.623.597-.878.816-.835.717-1.944.617-2.822-.046-1.097-.828-2.83-2.212-5.173-4.31-1.916 1.792-3.384 3.013-4.443 3.828-1.048.806-2.412.2-2.558-1.113-.446-4.012-.343-8.76-.131-12.485A2.902 2.902 0 0 1 6.848 3.68c3.71-.21 8.434-.314 12.435.126ZM30.58 3.807c-1.33.146-1.941 1.538-1.124 2.595.813 1.052 2.014 2.495 3.747 4.357-2.114 2.355-3.488 4.11-4.302 5.22-.646.88-.731 1.992-.02 2.822.23.269.514.577.865.926.33.328.623.597.878.816.834.717 1.944.617 2.822-.046 1.097-.828 2.83-2.212 5.173-4.31 1.916 1.792 3.383 3.013 4.443 3.828 1.047.806 2.412.2 2.558-1.113.446-4.012.343-8.76.131-12.485a2.902 2.902 0 0 0-2.736-2.736c-3.71-.21-8.434-.314-12.436.126ZM30.58 45.193c-1.33-.146-1.941-1.537-1.124-2.595.813-1.052 2.014-2.495 3.747-4.357-2.115-2.355-3.488-4.11-4.302-5.22-.646-.88-.731-1.992-.02-2.822.23-.268.514-.576.865-.925.33-.33.623-.598.878-.817.834-.717 1.944-.617 2.822.046 1.097.828 2.83 2.213 5.173 4.31 1.916-1.792 3.383-3.013 4.443-3.828 1.047-.806 2.412-.2 2.558 1.113.446 4.012.343 8.76.131 12.485a2.902 2.902 0 0 1-2.736 2.736c-3.71.211-8.434.314-12.436-.126ZM18.283 45.226c1.33-.14 1.938-1.53 1.117-2.585-.737-.946-1.793-2.21-3.274-3.81 2.42-2.654 3.956-4.608 4.835-5.81.647-.88.732-1.992.021-2.822a15.8 15.8 0 0 0-.865-.925 16.56 16.56 0 0 0-.878-.817c-.835-.717-1.944-.617-2.822.046-1.187.896-3.12 2.444-5.764 4.843C9 31.81 7.712 30.732 6.756 29.991c-1.044-.81-2.406-.207-2.546 1.108-.398 3.706-.309 8.052-.116 11.503a2.897 2.897 0 0 0 2.734 2.735c3.437.191 7.76.28 11.455-.11Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(Expand);
export default ForwardRef;
