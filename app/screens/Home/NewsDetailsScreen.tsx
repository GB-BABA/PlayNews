import React from 'react';
import NewsDetailsComponent from '../../shared/components/News/NewsDetailsComponent';
import {INews} from '../../interfaces/INews';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppFooter from '../../shared/components/AppFooter/AppFooter';

const NewsDetailsScreen = (props: INews) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <NewsDetailsComponent
          title={props.title}
          author={props.author}
          body={props.body}
          createdAt={props.createdAt}
          id={props.id}
          image={props.image}
          url={props.url}
        />
      </ScrollView>
      <AppFooter />
    </SafeAreaView>
  );
};

export default NewsDetailsScreen;
