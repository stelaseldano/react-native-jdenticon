# Jdenticon for React Native

`react-native-jdenticon` makes it possible to use [Jdenticon](https://jdenticon.com) (an open-source library for generating identity avatars) in React Native projects. It uses `react-native-svg` as a peer dependency.

## Installation

1. Install `react-native-jdenticon` with `yarn` or `npm`

`yarn add react-native-jdenticon --save` or `npm install react-native-jdenticon --save`

2. Install the peer dependency `react-native-svg`

`yarn add react-native-svg --save` or `npm install react-native-svg --save`

3. Install the RNSVG dependency for ios

`cd ios/ && pod install`

## Usage

```js
import React from 'react';
import { View } from 'react-native'
import Jdenticon from 'react-native-jdenticon';

const SampleComponent = () => {

    return (
        <View>
            <Jdenticon
                value={'sample string'}
                size={60} />
        </View>
    );
};

export default SampleComponent;
```

## Configuring and Styling the Avatar

You can add a `config` prop with options provided by Jdenticon's [official docs](https://jdenticon.com/js-api/P_jdenticon_config.html) to the `<Jdenticon>` component.

**Sample**

```js
import React from 'react';
import { View } from 'react-native'
import Jdenticon from 'react-native-jdenticon';

const SampleComponent = () => {
    const config = {
        saturation: {
            color: 0.7
        }
    };

    const style = {
        padding: 20,
        borderRadius: 50,
        backgroundColor: '#ccc'
    };

    return (
        <View>
            <Jdenticon
                value={'sample string'}
                size={60}
                config={config}
                style={style}
            />
        </View>
    );
};

export default SampleComponent;
```
