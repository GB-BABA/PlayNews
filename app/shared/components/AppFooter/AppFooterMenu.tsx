import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonIcon from '../ButtonIconComponent';
import {useLinkProps} from '@react-navigation/native';
import HomeMenu from './HomeMenuComponent';
import CreateMenuComponent from './CreateMenuComponent';
import MyProfileMenuComponent from './MyProfileMenuComponent';
import {TopBarNavigationTypes} from '../../../constant/TopBarNavigationTypes';

const AppFooterMenu = (props: IProps) => {
  return (
    <View style={styles.container}>
      <HomeMenu
        navigation={props.navigation}
        isActive={
          props.activeMenu === TopBarNavigationTypes.News ? true : false
        }
      />
      <CreateMenuComponent
        navigation={props.navigation}
        isActive={
          props.activeMenu === TopBarNavigationTypes.Create ? true : false
        }
      />
      <MyProfileMenuComponent
        navigation={props.navigation}
        isActive={
          props.activeMenu === TopBarNavigationTypes.Profile ? true : false
        }
      />
    </View>
  );
};

interface IProps {
  navigation: any;
  activeMenu: TopBarNavigationTypes;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    padding: 10,
    backgroundColor: '#363636',
  },
});

export default AppFooterMenu;
