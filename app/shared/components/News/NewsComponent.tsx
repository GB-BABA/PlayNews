import React from 'react';
import NewsImage from './NewsImageComponent';
import {View, StyleSheet} from 'react-native';
import {INews} from '../../../interfaces/INews';
import NewsImagePlaceholder from './NewsImagePlaceholderComponent';
import {Colours} from '../../../constant/Colours';
import TextView from '../TextComponent';
import {DefaultFontFamily} from '../../layoutStyles/DarkLayoutStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const News = (props: IProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('news-details', {news: props.news});
        }}>
        {!props.news.image && <NewsImagePlaceholder />}
        {props.news.image && <NewsImage source={props.news.image} />}
        <View style={styles.caption}>
          <TextView style={styles.captionText}>{props.news.title}</TextView>
        </View>
      </TouchableOpacity>
    </View>
  );
};

interface IProps {
  news: INews;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.Dark,
    marginVertical: 20,
    borderRadius: 50,
  },
  caption: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: Colours.Black,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  captionImage: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  captionText: {
    color: Colours.White,
    fontSize: 22,
    fontFamily: DefaultFontFamily.Thin,
    fontWeight: '200',
  },
});

export default News;
