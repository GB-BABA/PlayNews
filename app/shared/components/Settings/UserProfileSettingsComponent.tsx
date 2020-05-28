import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextView from '../TextComponent';
import {Icons} from '../../../constant/Icons';
import ButtonIcon from '../../components/ButtonIconComponent';
import {Colours} from '../../../constant/Colours';
import {DefaultFontFamily} from '../../layoutStyles/DarkLayoutStyle';

const UserProfileSettingsComponent = (props: IProps) => {
  return (
    <View style={styles.component}>
      <TextView style={styles.text}>Author’s name: {props.name}</TextView>
      <ButtonIcon icon={Icons.SettingsIcon} action={() => {}} />
    </View>
  );
};

interface IProps {
  name: string;
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  text: {
    color: '#A8A8A8',
    fontFamily: DefaultFontFamily.Light,
    marginTop: 8,
  },
});

export default UserProfileSettingsComponent;
