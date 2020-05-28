import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet} from 'react-native';
import {Icons} from 'app/constant/Icons';

const ButtonIconComponent = (props: IProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.action();
      }}>
      <Image style={styles.image} source={props.icon} />
    </TouchableOpacity>
  );
};

interface IProps {
  icon: Icons;
  action: any;
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: 40,
    height: 40,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
  },
});
export default ButtonIconComponent;
