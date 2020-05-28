import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import UploaderComponent from '../UploaderComponent';

const UploadNewsImage = () => {
  const [state, setState] = useState({
    isPreviewAvailable: false,
  });
  return (
    <ScrollView style={styles.container} horizontal={true} scrollEnabled={true}>
      <UploaderComponent isActive={true} />
      <UploaderComponent isActive={!state.isPreviewAvailable} />
      <UploaderComponent isActive={!state.isPreviewAvailable} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default UploadNewsImage;
