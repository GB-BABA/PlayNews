import React from 'react';
import {View, StyleSheet} from 'react-native';
import TopBarNavigationOption from './TopBarNavigationOptionComponent';
import DarkTheme from '../../layoutStyles/DarkLayoutStyle';

const TopBarNavigation = (props: IProps) => {
  const goToNewsScreen = () => {
    props.navigation.navigate('news');
  };

  const goToCreateNewsScreen = () => {
    props.navigation.navigate('create-news');
  };

  const goToMyProfileScreen = () => {
    props.navigation.navigate('create-news');
  };

  return (
    <View style={styles.topBarNavigation}>
      <TopBarNavigationOption
        Text="News"
        IsActive={true}
        action={goToNewsScreen}
      />
      <TopBarNavigationOption
        Text="Create"
        IsActive={false}
        action={goToCreateNewsScreen}
      />
      <TopBarNavigationOption
        Text="My Profile"
        IsActive={false}
        action={goToMyProfileScreen}
      />
    </View>
  );
};

interface IProps {
  navigation: any;
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
