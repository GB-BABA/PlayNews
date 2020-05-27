import {StyleSheet} from 'react-native';

const DarkLayoutStyle = StyleSheet.create({
  scrollView: {
    flex: 4,
    backgroundColor: '#212121',
    borderBottomColor: '#212121',
    borderBottomWidth: 0,
  },
  safeView: {
    backgroundColor: '#212121',
    borderBottomColor: '#212121',
    borderBottomWidth: 0,
  },
  topBarNavigation: {
    backgroundColor: '#212121',
    height: 60,
  },
  appHeader: {
    backgroundColor: '#292929',
  },
});

export const AppSectionColour = {
  safeAreaView: '#212121',
  statusBar: '#212121',
  appBackground: '#212121',
};

export const DefaultFontFamily = {
  Default: 'Roboto',
  Regular: 'Roboto-Regular',
  Thin: 'Roboto-Thin',
  Light: 'Roboto-Light',
  Medium: 'Roboto-Medium',
  Bold: 'Roboto-Bold',
};

export default DarkLayoutStyle;
