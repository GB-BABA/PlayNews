import React from 'react';
import {View, StyleSheet} from 'react-native';
import {INews, INewsImage} from '../../../interfaces/INews';
import TextView from '../TextComponent';
import {SliderBox} from 'react-native-image-slider-box';
import {Colours} from '../../../constant/Colours';
import {DefaultFontFamily} from '../../layoutStyles/DarkLayoutStyle';
import NewsCommentComponent from './NewsCommentComponent';

const NewsDetailsComponent = (props: IProps) => {
  const getImages = (newsImages: Array<INewsImage>) => {
    return newsImages.map((news) => {
      return news.image;
    });
  };

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <SliderBox autoplay={true} images={getImages(props.news.image ?? [])} />
      <TextView style={styles.title}>{props.news.title}</TextView>
      <TextView style={styles.body}>{props.news.body}</TextView>
      <NewsCommentComponent comments={props.news.comments} />
    </View>
  );
};

interface IProps {
  news: INews;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: Colours.White,
    paddingTop: 20,
    paddingHorizontal: 20,
    lineHeight: 30,
    fontFamily: DefaultFontFamily.Light,
  },
  body: {
    color: Colours.White,
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontWeight: '300',
    fontFamily: DefaultFontFamily.Regular,
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'left',
  },
});

export default NewsDetailsComponent;
