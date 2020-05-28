import {StyleSheet, Platform} from 'react-native';
import {Colours} from '../../constant/Colours';
import {DefaultFontFamily} from '../../shared/layoutStyles/DarkLayoutStyle';
import {getPercentageWidth} from '../../util/Dimensions';

const styles = StyleSheet.create({
  footer: {
    color: Colours.Dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  formControl: {
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  terms: {
    color: Colours.White,
    fontFamily: DefaultFontFamily.Thin,
    paddingHorizontal: 30,
    fontWeight: '200',
    lineHeight: 20,
    marginVertical: 10,
  },
  submitBtn: {
    marginVertical: 40,
    // paddingHorizontal: 30,
    // width: '90%',
    width: Platform.ios ? '90%' : getPercentageWidth(90),
    alignSelf: 'center',
  },
});

export default styles;
