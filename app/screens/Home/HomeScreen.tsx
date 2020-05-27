import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import TopBarNavigation from '../../shared/components/Navigation/TopBarNavigationComponent';
import DarkTheme from '../../shared/layoutStyles/DarkLayoutStyle';

import NewsListComponent from '../../shared/components/News/NewsListComponent';
import DarkLayoutStyle from '../../shared/layoutStyles/DarkLayoutStyle';

const HomeScreen = (props: IProps) => {
  return (
    <SafeAreaView style={DarkLayoutStyle.scrollView}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={DarkTheme.scrollView}>
        <TopBarNavigation navigation={props.navigation} />
        <NewsListComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

interface IProps {
  navigation: any;
}

export default HomeScreen;
