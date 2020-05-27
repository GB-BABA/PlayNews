import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import LogoTitle from './LogoTitleComponent';
import UserAvater from './UserAvaterComponent';
import DarkTheme, {AppSectionColour} from '../../layoutStyles/DarkLayoutStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonIcon from '../ButtonIconComponent';
import {Icons} from 'app/constant/Icons';
import TextView from '../TextComponent';

const AppHeaderWithBackButtonComponent = (props: any) => {
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
        <ButtonIcon icon={Icons.BackIcon} action={() => {}} />
        <TextView>{props.title}</TextView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    ...DarkTheme.appHeader,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    paddingHorizontal: 30,
    width: '100%',
  },
});

export default AppHeaderWithBackButtonComponent;
