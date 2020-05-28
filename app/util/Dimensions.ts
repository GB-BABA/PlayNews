import {Dimensions} from 'react-native';

export function getPercentageWidth(percentage: number): number {
  return Dimensions.get('screen').width * (percentage / 100);
}
