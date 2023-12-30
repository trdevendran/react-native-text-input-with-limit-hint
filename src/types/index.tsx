import type { TextStyle } from 'react-native';
import type { TextInputProps } from 'react-native';

/**
 * This class is responsible to specify properties to build component with predefined values.
 * It also supports all the properties of {@link TextInputProps} to build {@link TextInput} and count hint {@link Text}
 * @see https://reactnative.dev/docs/textinput#props
 */
export interface InputProps extends TextInputProps {
  /**
   * Specifies styles for the hint text and it can be customized as per the need via {@link TextStyle}
   *
   * @see https://reactnative.dev/docs/text#style
   */
  hintStyles?: TextStyle | undefined;

  /**
   * Hint text can be configured by its type
   *      all | undefined - it shows both entered and maximum count can be entered.
   *      For example if the hint value is 5/15, here 5 represents entered text count and 15 represents maximum length can be entered in it.
   */
  hintType?: 'all' | 'only-entered' | 'only-available' | 'none' | undefined;

  /**
   * Specifies the type of border around the {@link TextInput}
   *      all: Displays border at all the side with rounded radius corner
   *      bottom: Displays border only at the bottom of the field
   */
  borderType?: 'all' | 'bottom' | 'none' | undefined;

  /**
   * Specifies delimiter between entered count and max count
   */
  delimiter?: '/' | '~' | 'out of';
}
