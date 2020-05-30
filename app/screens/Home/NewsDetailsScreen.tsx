import React from 'react';
import NewsDetailsComponent from '../../shared/components/News/NewsDetailsComponent';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppFooter from '../../shared/components/AppFooter/AppFooter';
import {Colours} from '../../constant/Colours';

const NewsDetailsScreen = ({route}) => {
  const {news} = route.params;
  console.log(news);
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          backgroundColor: '#212121',
        }}>
        <NewsDetailsComponent news={news} />
      </ScrollView>
      <AppFooter />
    </SafeAreaView>
  );
};

export default NewsDetailsScreen;
