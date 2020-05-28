import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Icons} from '../../constant/Icons';
import TextView from './TextComponent';
import {Colours} from '../../constant/Colours';
import {DefaultFontFamily} from '../layoutStyles/DarkLayoutStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';

import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */

const UploaderComponent = (props: IPops) => {
  const [state, setState] = useState({url: '', isImageAvailable: false});
  const pickImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      // console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = {uri: response.uri};
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setState({
          url: response.uri,
        });
      }
    });
  };

  return (
    <TouchableOpacity
      // disabled={props.isActive}
      onPress={() => {
        // if (props.isActive) {
        pickImage();
        // }
      }}>
      <View style={styles.container}>
        <Image style={styles.image} source={Icons.UploadIcon} />
        <TextView style={styles.text}>
          Tap to upload your caption image
        </TextView>
        <TextView style={styles.label}>
          You are only allowed to upload one image per slide
        </TextView>
      </View>
    </TouchableOpacity>
  );
};

interface IPops {
  isActive: boolean;
}

const styles = StyleSheet.create({
  container: {
    width: 316,
    height: 210,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#121212',
    marginHorizontal: 10,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    alignSelf: 'center',
    width: 81.5,
    height: 86.85,
  },
  text: {
    color: Colours.White,
    marginTop: 15,
    fontSize: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: DefaultFontFamily.Bold,
  },
  label: {
    color: Colours.Grey,
    marginVertical: 8,
    fontSize: 10,
    alignSelf: 'center',
    fontWeight: 'normal',
    textAlign: 'center',
    fontFamily: DefaultFontFamily.Thin,
  },
});

export default UploaderComponent;
