import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {DefaultFontFamily} from '../layoutStyles/DarkLayoutStyle';

const TextView = (props: IProps) => {
  const style = props.style
    ? {...props.style, ...styles.defaultTextStyle}
    : styles.defaultTextStyle;
  return <Text style={style}>{props.children}</Text>;
};

interface IProps {
  children: any;
  style?: object;
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: DefaultFontFamily.Regular,
  },
});

export default TextView;
