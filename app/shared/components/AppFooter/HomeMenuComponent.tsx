import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeMenuComponent = (props: IProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('home');
      }}>
      {props.isActive ? (
        <Image
          style={styles.image}
          source={require('../../../../assets/icons/home-active.png')}
        />
      ) : (
        <Image
          style={styles.image}
          source={require('../../../../assets/icons/home.png')}
        />
      )}
    </TouchableOpacity>
  );
};

interface IProps {
  isActive: boolean;
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: 40,
    height: 40,
  },
  image: {
    marginTop: Platform.OS === 'ios' ? '10%' : 0,
    alignSelf: 'center',
  },
});
export default HomeMenuComponent;
