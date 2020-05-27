import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet} from 'react-native';

const MyProfileMenuComponent = (props: IProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.navigation.navigate('profile');
      }}>
      {props.isActive ? (
        <Image
          source={require('../../../../assets/icons/profile-active.png')}
        />
      ) : (
        <Image source={require('../../../../assets/icons/profile.png')} />
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
export default MyProfileMenuComponent;
