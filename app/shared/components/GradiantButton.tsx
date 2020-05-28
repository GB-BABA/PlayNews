import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import TextView from './TextComponent';
import {DefaultFontFamily} from '../layoutStyles/DarkLayoutStyle';
import {TouchableHighlight} from 'react-native-gesture-handler';

const GradiantButton = (props: IProps) => {
  return (
    <TouchableHighlight
      style={props.style}
      onPress={() => (props.onPress ? props.onPress : false)}>
      <LinearGradient
        style={styles.linearGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#1F4C9C', '#6F4896', '#BA67A6']}>
        <TextView style={styles.buttonText}>{props.children}</TextView>
      </LinearGradient>
    </TouchableHighlight>
  );
};

interface IProps {
  children: any;
  onPress?: Function;
  style?: object;
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: DefaultFontFamily.Light,
    textAlign: 'center',
    margin: 10,
    fontWeight: '300',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default GradiantButton;
