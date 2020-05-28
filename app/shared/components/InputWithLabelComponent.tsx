import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import TextView from './TextComponent';
import {Colours} from '../../constant/Colours';
import {DefaultFontFamily} from '../layoutStyles/DarkLayoutStyle';

const InputWithLabel = (props: IProps) => {
  return (
    <View
      style={
        props.style ? {...props.style, ...styles.container} : styles.container
      }>
      <TextView style={styles.label}>{props.title}</TextView>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        placeholderTextColor={Colours.Grey}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: Colours.White,
    fontFamily: DefaultFontFamily.Light,
    fontWeight: '300',
    fontSize: 22,
  },
  textInput: {
    fontSize: 18,
    color: Colours.White,
    fontWeight: '200',
    borderBottomWidth: 0.4,
    paddingBottom: 20,
    marginTop: 25,
    borderBottomColor: Colours.Grey,
  },
});

export default InputWithLabel;
