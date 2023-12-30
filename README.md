# react-native-text-input-with-limit-hint

This is a React-Native TextInput component, containing a hint text to below of the [TextInput](https://reactnative.dev/docs/textinput) and the hint provides three type of count such as maximum count as limit, entered text count, and available text count.

## Installation

```sh
npm install react-native-text-input-with-limit-hint
```

## Usage

```js
import { LimitedTextInput } from 'react-native-text-input-with-limit-hint';
```

place `<LimitedTextInput>` tag wherever you want to have it.
`maxLength` is an important Prop to ensure the limit; otherwise it'll allow unlimited inputs along with hint as entered text count.

```js
<LimitedTextInput
  maxLength={10}
  onChangeText={(text) => {
    console.log(text);
  }}
/>
```

## Methods

|     Prop        |    Required     |
| --------------- | --------------- |
| onChangeText    |       No        |

## Props

Note: The component has the below custom props and also it supports all the props of [TextInputProps](https://reactnative.dev/docs/textinput#props) to customize the TextInput as per the need.

|     Prop             |      Type           |   default value    | Description |
| ---------------      | --------------------------- | ------------------ | ----------- |
| hintStyles           |     `TextStyle`     || Specifies styles for the hint text and it can be customized as per need via [TextStyle](https://reactnative.dev/docs/text#style) |
| hintType             |   `all`<br/> `only-entered`<br/> `only-available`<br/> `none` | `all` | Hint text can be configured by its type. `all` - It shows both entered and maximum count can be entered. For example if the hint value is 5/15, here 5 represents entered text count and 15 represents maximum length can be entered in it.|
| borderType           |  `all` <br/> `bottom`<br/>`none`<br/> |`all`| Specifies the type of border around the TextInput. `all` - Displays border at all the side with rounded radius corner. `bottom` - Displays border only at the bottom of the field. |
| delimiter           |  `/`, `~`, `out of`| `/`| Specifies delimiter between entered count and max count. |

## Example

```js
import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import LimitedTextInput from 'react-native-text-input-with-limit-hint';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Default hint with bottom border</Text>
      <LimitedTextInput
        maxLength={15}
        style={styles.example1}
        borderType="bottom"
      />
      <Text>Hint for only-entered text</Text>
      <LimitedTextInput
        maxLength={15}
        style={styles.example2}
        hintType="only-entered"
        borderType="all"
      />
      <Text>Hint for only-available text</Text>
      <LimitedTextInput
        maxLength={15}
        style={styles.example3}
        hintType="only-available"
      />
      <Text>Different delimiter</Text>
      <LimitedTextInput
        maxLength={10}
        numberOfLines={2}
        style={styles.example4}
        multiline={true}
        delimiter="~"
        onChangeText={(text) => {
          console.log(text);
        }}
      />
      <Text>Different delimiter(out of) with custom hint style</Text>
      <LimitedTextInput
        maxLength={500}
        numberOfLines={5}
        style={styles.example5}
        multiline={true}
        hintStyles={styles.hint}
        delimiter="out of"
        onChangeText={(text) => {
          console.log(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 16,
  },
  example1: {
    flex: 1,
    borderColor: 'red',
  },
  example2: {
    flex: 1,
    borderColor: 'blue',
  },
  example3: {
    flex: 1,
  },
  example4: {
    flex: 1,
  },
  example5: {
    flex: 1,
  },
  hint: {
    color: 'purple',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)