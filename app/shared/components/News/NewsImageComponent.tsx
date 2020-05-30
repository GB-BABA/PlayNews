import React from 'react';

import {View, ActivityIndicator} from 'react-native';
import {INewsImage} from '../../../interfaces/INews';
import {Image} from 'react-native-elements';
import NewsImagePlaceholder from './NewsImagePlaceholderComponent';
import {Colours} from '../../../constant/Colours';

import ImageSlider from 'react-native-image-slider';

const NewsImage = (props: IProps) => {
  return (
    <View>
      {props.source?.length > 0 ? (
        <Image
          source={{uri: props.source[0].image}}
          style={{
            width: '100%',
            height: 200,
          }}
          PlaceholderContent={<ActivityIndicator color={Colours.White} />}
        />
      ) : (
        <NewsImagePlaceholder />
      )}
    </View>
  );
};

interface IProps {
  source: Array<INewsImage>;
}

export default NewsImage;
