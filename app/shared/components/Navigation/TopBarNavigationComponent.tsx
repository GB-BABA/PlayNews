import React from 'react';
import {View, StyleSheet} from 'react-native';
import TopBarNavigationOption from './TopBarNavigationOptionComponent';
import DarkTheme from '../../layoutStyles/DarkLayoutStyle';
import {TopBarNavigationTypes} from '../../../constant/TopBarNavigationTypes';

const TopBarNavigation = (props: IProps) => {
  const goToNewsScreen = () => {
    props.navigation.navigate('home');
  };

  const goToCreateNewsScreen = () => {
    props.navigation.navigate('create');
  };

  const goToMyProfileScreen = () => {
    props.navigation.navigate('profile');
  };

  return (
    <View style={styles.topBarNavigation}>
      <TopBarNavigationOption
        Text="News"
        IsActive={
          props.activeMenu === TopBarNavigationTypes.News ? true : false
        }
        action={goToNewsScreen}
      />
      <TopBarNavigationOption
        Text="Create"
        IsActive={
          props.activeMenu === TopBarNavigationTypes.Create ? true : false
        }
        action={goToCreateNewsScreen}
      />
      <TopBarNavigationOption
        Text="My Profile"
        IsActive={
          props.activeMenu === TopBarNavigationTypes.Profile ? true : false
        }
        action={goToMyProfileScreen}
      />
    </View>
  );
};

interface IProps {
  navigation: any;
  activeMenu: TopBarNavigationTypes;
}

const styles = StyleSheet.create({
  topBarNavigation: {
    ...DarkTheme.topBarNavigation,
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 80,
    paddingVertical: 5,
    // backgroundColor: 'red',
  },
});

export default TopBarNavigation;
