import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import TopBarNavigation from '../../shared/components/Navigation/TopBarNavigationComponent';
import DarkTheme from '../../shared/layoutStyles/DarkLayoutStyle';

import NewsListComponent from '../../shared/components/News/NewsListComponent';
import DarkLayoutStyle from '../../shared/layoutStyles/DarkLayoutStyle';
import AppFooter from '../../shared/components/AppFooter/AppFooter';
import AppFooterMenu from '../../shared/components/AppFooter/AppFooterMenu';
import {TopBarNavigationTypes} from '../../constant/TopBarNavigationTypes';

const CreateScreen = (props: IProps) => {
  const activeMenu = TopBarNavigationTypes.Create;
  return (
    <SafeAreaView style={DarkLayoutStyle.scrollView}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={DarkTheme.scrollView}>
        <TopBarNavigation
          navigation={props.navigation}
          activeMenu={activeMenu}
        />
        <NewsListComponent />
        <AppFooter />
      </ScrollView>
      <AppFooterMenu navigation={props.navigation} activeMenu={activeMenu} />
    </SafeAreaView>
  );
};

interface IProps {
  navigation: any;
}

export default CreateScreen;
