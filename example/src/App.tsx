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
