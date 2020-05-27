import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet} from 'react-native';

const HomeMenuComponent = (props: IProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.navigation.navigate('home');
      }}>
      {props.isActive ? (
        <Image source={require('../../../../assets/icons/home-active.png')} />
      ) : (
        <Image source={require('../../../../assets/icons/home.png')} />
      )}
    </TouchableOpacity>
  );
};

interface IProps {
  navigation: any;
  isActive: boolean;
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: 40,
    height: 40,
    marginTop: 10,
  },
});
export default HomeMenuComponent;
