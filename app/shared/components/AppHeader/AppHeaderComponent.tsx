import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import LogoTitle from './LogoTitleComponent';
import UserAvater from './UserAvaterComponent';
import DarkTheme, {AppSectionColour} from '../../layoutStyles/DarkLayoutStyle';
import {SafeAreaView} from 'react-native-safe-area-context';

const AppHeader = (props: any) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: AppSectionColour.safeAreaView,
      }}>
      <StatusBar
        backgroundColor={AppSectionColour.statusBar}
        barStyle="light-content"
      />
      <View style={styles.header}>
        <LogoTitle style={styles.appLogo} />
        <UserAvater />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    ...DarkTheme.appHeader,

    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    paddingHorizontal: 30,
    width: '100%',
  },
  appLogo: {
    marginTop: 4,
  },
});

export default AppHeader;
