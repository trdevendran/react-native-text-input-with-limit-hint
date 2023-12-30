import { TextInput } from 'react-native';
import type { InputProps } from './types';
import { View } from 'react-native';
import { Text } from 'react-native';
import styles from './styles';
import React, { useState } from 'react';

const LimitedTextInput: React.FC<InputProps> = (props: InputProps) => {
  const {
    maxLength,
    style,
    hintStyles,
    hintType,
    borderType,
    delimiter,
    multiline,
    onChangeText,
  } = props;

  const [enteredCount, setEnteredCount] = useState(0);
  const [availableCount, setAvailableCount] = useState(maxLength);

  const onChange = (text: string) => {
    if (onChangeText !== undefined) {
      onChangeText(text);
    }
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          onChangeText={(text: string) => {
            const entered = text.length;
            const available = maxLength === undefined ? 0 : maxLength - entered;
            setEnteredCount(entered);
            setAvailableCount(available);
            onChange(text);
          }}
          style={[
            styles.input,
            (borderType === undefined || borderType === 'all') &&
              styles.inputBorder,
            style,
            borderType === 'bottom' && styles.borderBottom,
            borderType === 'none' && styles.withoutBorder,
            multiline !== undefined && multiline && styles.textAlignVertical,
          ]}
        />
      </View>

      {hintType !== 'none' && (
        <Text style={[styles.countHint, styles.countHint, hintStyles]}>
          {(hintType !== 'all' &&
            (maxLength === undefined || maxLength === 0)) ||
          hintType === 'only-entered'
            ? enteredCount
            : hintType === 'only-available'
            ? availableCount
            : enteredCount +
              (delimiter === 'out of'
                ? ' ' + delimiter + ' '
                : delimiter !== undefined
                ? delimiter
                : '/') +
              maxLength}
        </Text>
      )}
    </View>
  );
};

export default LimitedTextInput;
