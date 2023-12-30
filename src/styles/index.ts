import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    borderColor: 'grey',
    padding: 8,
    color: 'black',
  },
  textAlignVertical: {
    textAlignVertical: 'top',
  },
  inputBorder: {
    borderWidth: 2,
    borderRadius: 10,
  },
  borderBottom: {
    borderBottomWidth: 2,
  },
  withoutBorder: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  countHint: {
    color: 'grey',
    fontSize: 16,
  },
});

export default styles;
