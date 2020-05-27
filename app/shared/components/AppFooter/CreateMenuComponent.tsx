import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CreateMenuComponent = (props: IProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('create');
      }}>
      {props.isActive ? (
        <Image
          style={styles.image}
          source={require('../../../../assets/icons/create-active.png')}
        />
      ) : (
        <Image
          style={styles.image}
          source={require('../../../../assets/icons/create.png')}
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
  },
  image: {
    alignSelf: 'center',
    marginTop: 10,
  },
});
export default CreateMenuComponent;
