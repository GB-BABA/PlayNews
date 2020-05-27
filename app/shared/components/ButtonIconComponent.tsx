import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet} from 'react-native';

const ButtonIconComponent = (props: IProps) => {
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      props.action();
    }}>
    <Image source={require(props.icon)} />
  </TouchableOpacity>;
};

interface IProps {
  icon: string;
  action: Function;
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: 40,
    height: 40,
  },
});
export default ButtonIconComponent;
