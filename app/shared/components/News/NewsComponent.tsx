import React from 'react';
import NewsImage from './NewsImageComponent';
import {View, StyleSheet} from 'react-native';
import {INews} from '../../../interfaces/INews';
import NewsImagePlaceholder from './NewsImagePlaceholderComponent';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Colours} from '../../../constant/Colours';
import TextView from '../TextComponent';
import {DefaultFontFamily} from '../../layoutStyles/DarkLayoutStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';

const News = (props: INews) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {/* {props.image && <NewsImagePlaceholder />}
      {!props.image && <NewsImage source={props.image ?? ''} />} */}
        <NewsImagePlaceholder style={styles.captionImage} />
        <View style={styles.caption}>
          <TextView style={styles.captionText}>{props.title}</TextView>
        </View>
      </TouchableOpacity>
    </View>
  );
};

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
