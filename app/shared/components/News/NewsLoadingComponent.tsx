import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Colours} from '../../../constant/Colours';
import TextView from '../TextComponent';
import {DefaultFontFamily} from '../../layoutStyles/DarkLayoutStyle';

const NewsLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <TextView style={styles.captionText}>Loading...</TextView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: Colours.Dark,
    marginVertical: 20,
    paddingVertical: 30,
    borderRadius: 20,
  },

  captionText: {
    color: Colours.White,
    fontSize: 22,
    fontFamily: DefaultFontFamily.Thin,
    fontWeight: '200',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default NewsLoading;
