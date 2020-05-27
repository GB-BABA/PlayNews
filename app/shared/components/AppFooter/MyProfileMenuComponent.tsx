import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MyProfileMenuComponent = (props: IProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('profile');
      }}>
      {props.isActive ? (
        <Image
          style={styles.image}
          source={require('../../../../assets/icons/profile-active.png')}
        />
      ) : (
        <Image
          style={styles.image}
          source={require('../../../../assets/icons/profile.png')}
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
    marginTop: 10,
    alignSelf: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: 10,
  },
});
export default MyProfileMenuComponent;
