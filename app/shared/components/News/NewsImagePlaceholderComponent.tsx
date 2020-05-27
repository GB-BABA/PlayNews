import React from 'react';
import {Image, StyleSheet} from 'react-native';

const NewsImagePlaceholder = (props: IProps) => {
  const style = props.style
    ? {...props.style, ...styles.defaultContainer}
    : styles.defaultContainer;
  return (
    <Image
      style={style}
      source={require('../../../../assets/images/demo-news.png')}
    />
  );
};

interface IProps {
  style?: object;
}

const styles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
});

export default NewsImagePlaceholder;
