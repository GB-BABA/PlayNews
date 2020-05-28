import React from 'react';
import {StyleSheet, View, StatusBar, Platform} from 'react-native';
import DarkTheme, {AppSectionColour} from '../../layoutStyles/DarkLayoutStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonIcon from '../ButtonIconComponent';
import {Icons} from '../../../constant/Icons';
import TextView from '../TextComponent';
import {useNavigation} from '@react-navigation/native';
import {Colours} from '../../../constant/Colours';

const AppHeaderWithBackButtonComponent = (props: IProps) => {
  const navigation = useNavigation();
  const backToPreviousScreen = () => {
    navigation.goBack();
  };
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
        <ButtonIcon
          // style={styles.button}
          icon={Icons.BackIcon}
          action={backToPreviousScreen}
        />
        <TextView style={styles.label}>
          {props.name ?? 'Default Title'}
        </TextView>
      </View>
    </SafeAreaView>
  );
};

interface IProps {
  name: string;
}

const styles = StyleSheet.create({
  header: {
    ...DarkTheme.appHeader,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    // alignContent: 'center',
    // textAlignVertical: 'center',
    padding: 15,
    paddingHorizontal: 10,
    width: '100%',
  },
  label: {
    color: Colours.White,
    marginTop: Platform.OS === 'ios' ? 11 : 0,
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  button: {
    // marginTop: 10,
    // height: '100%',
  },
});

export default AppHeaderWithBackButtonComponent;
