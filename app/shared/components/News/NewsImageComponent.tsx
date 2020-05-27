import React from 'react';

import FastImage from 'react-native-fast-image';
import {View} from 'react-native';

const NewsImage = (props: IProps) => {
  return (
    <View>
      <FastImage
        style={{width: 200, height: 200}}
        source={{
          uri: props.source,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

interface IProps {
  source: string;
}

export default NewsImage;
