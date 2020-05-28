import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import TextView from './TextComponent';
import {Colours} from '../../constant/Colours';
import {DefaultFontFamily} from '../layoutStyles/DarkLayoutStyle';

const InputWithLabel = (props: IProps) => {
  const [value, setValue] = useState(props.value);
  return (
    <View
      style={
        props.style ? {...props.style, ...styles.container} : styles.container
      }>
      <TextView style={styles.label}>{props.title}</TextView>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        onChangeText={(text) => setValue(text)}
        placeholderTextColor={
          Platform.OS === 'ios' ? Colours.Grey : Colours.White
        }
        value={value}
        multiline={props.isMultiline}
        autoFocus={false}
      />
    </View>
  );
};

interface IProps {
  title: string;
  placeholder: string;
  style?: object;
  isMultiline: boolean;
  value?: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: Platform.OS === 'ios' ? Colours.White : Colours.Grey,
    fontFamily:
      Platform.OS === 'ios' ? DefaultFontFamily.Light : DefaultFontFamily.Thin,
    fontWeight: Platform.OS === 'ios' ? '300' : '200',
    fontSize: Platform.OS === 'ios' ? 22 : 16,
  },
  textInput: {
    fontSize: Platform.OS === 'ios' ? 18 : 20,
    color: Colours.White,
    fontFamily:
      Platform.OS === 'ios' ? DefaultFontFamily.Light : DefaultFontFamily.Thin,
    fontWeight: Platform.OS === 'ios' ? '200' : '100',
    borderBottomWidth: 0.4,
    paddingBottom: 20,
    marginTop: Platform.OS === 'ios' ? 25 : 15,
    borderBottomColor: Colours.Grey,
  },
});

export default InputWithLabel;
