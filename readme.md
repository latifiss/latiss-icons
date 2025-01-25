# @react-native/latiss-icons

A collection of customizable, lightweight, and beautiful icons for React Native applications. This library provides easy-to-use icon components that you can use in your React Native project with minimal effort.

## Features:

- **Cross-Platform Support:** Fully compatible with React Native.
- **Customizable Icons:** Adjust icon size, color, and style with simple props.
- **Optimized for Performance:** Designed to be minimal and efficient.
- **TypeScript Support:** Built with TypeScript for enhanced development experience.

## Installation

### Step 1: Install the package

First, you need to install the package in your React Native project.

npm install @react-native/latiss-icons react-native-svg

Alternatively, you can use `yarn`:

yarn add @react-native/latiss-icons react-native-svg

`react-native-svg` is a peer dependency required for rendering the SVG icons.

### Step 2: Linking `react-native-svg`

If you're using React Native `0.59` or earlier, you may need to link `react-native-svg`. However, for React Native `0.60` and above, this will be automatically linked via auto-linking.

To link `react-native-svg` manually (for older React Native versions):

react-native link react-native-svg

## Usage

Once installed, you can import and use the icons in your project like so:

### Example:

import React from 'react'; import { View } from 'react-native'; import { HomeIcon, SearchIcon } from '@react-native/latiss-icons';

const App = () => ( <View> <HomeIcon width={32} height={32} color="blue" /> <SearchIcon width={32} height={32} color="green" /> </View> );

export default App;

In this example:

- The `HomeIcon` and `SearchIcon` components are imported from the library.
- The icons are rendered with custom `width`, `height`, and `color` props.

### Customization

Each icon component accepts the following props:

- `width`: (Optional) The width of the icon. Default is `24`.
- `height`: (Optional) The height of the icon. Default is `24`.
- `color`: (Optional) The color of the icon. Default is `black`.

<HomeIcon width={40} height={40} color="red" /> ```
Available Icons

The package includes a growing list of icons, such as:

    HomeIcon
    SearchIcon

You can import and use any of the icons directly from the package.

Example:

import { HomeIcon, SearchIcon } from '@react-native/latiss-icons';

Contributing

We welcome contributions to @react-native/latiss-icons! If you would like to contribute, follow these steps:

    Fork the repository.
    Create a new branch (git checkout -b feature/your-feature).
    Make your changes and commit them (git commit -m 'Add a feature').
    Push to your branch (git push origin feature/your-feature).
    Create a pull request with a description of your changes.

Adding New Icons

To add a new icon:

    Create a new file under src/icons/, e.g., NewIcon.tsx.
    Create an SVG icon component using react-native-svg.
    Export the new icon in src/index.ts so that it can be imported by users.

Example:

// src/icons/NewIcon.tsx
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const NewIcon = ({ width = 24, height = 24, color = 'black' }) => (
<Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
<Path d="M..." fill={color} />
</Svg>
);

export default NewIcon;

Then, export it in src/index.ts:

export { default as NewIcon } from './icons/NewIcon';

License

This project is licensed under the MIT License.

Now the entire README content is provided in raw markdown without any style or transformation.
