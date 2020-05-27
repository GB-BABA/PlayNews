import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ITopBarNavigationOption} from '../../../interfaces/ITopBarNavigationOption';
import {DefaultFontFamily} from '../../layoutStyles/DarkLayoutStyle';

const TopBarNavigationOption = (props: ITopBarNavigationOption) => {
  return (
    <TouchableOpacity onPress={props.action} style={styles.optionPanel}>
      <View>
        {props.IsActive && (
          <Image
            style={styles.dot}
            source={require('../../../../assets/icons/active-circle.png')}
          />
        )}
        <Text style={props.IsActive ? styles.label : styles.labelInactive}>
          {props.Text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionPanel: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 4,
    position: 'relative',
    marginHorizontal: 20,
    alignSelf: 'flex-end',
  },
  optionPanelWithBorder: {
    borderBottomWidth: 0.4,
    borderBottomColor: '#707070',
  },
  label: {color: '#fff', fontSize: 18, fontFamily: DefaultFontFamily.Light},
  labelInactive: {
    color: '#C6C6C6',
    fontSize: 18,
    fontFamily: DefaultFontFamily.Thin,
  },
  dot: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: -10,
    top: -10,
  },
});

export default TopBarNavigationOption;
