import React from 'react';
import {View} from 'react-native';
import NewsImage from './NewsImageComponent';
import {INews} from '../../../interfaces/INews';

const NewsDetailsComponent = (props: INews) => {
  return (
    <View>
      <NewsImage
        source={props.image ?? '../../../../assets/images/demo-news.png'}
      />
    </View>
  );
};

export default NewsDetailsComponent;
