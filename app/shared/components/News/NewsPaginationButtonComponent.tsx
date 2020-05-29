import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import TextView from '../TextComponent';
import {Colours} from '../../../constant/Colours';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NewsPaginationButton = (props: IProps) => {
  const defaultContainer = {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginHorizontal: 8,
    borderWidth: 0.8,
    borderColor: props.highlight
      ? '#FAB812'
      : props.icon
      ? Colours.Grey
      : Colours.DarkGrey,
    backgroundColor: 'transparent',
    color: Colours.White,
  };
  return (
    <TouchableOpacity
      disabled={props.isActive === false}
      onPress={() => {
        props.action();
      }}>
      <View style={defaultContainer}>
        {props.data ? (
          <TextView style={styles.text}>{props.data}</TextView>
        ) : (
          <Image
            style={styles.icon}
            source={
              props.icon === 'back'
                ? require('../../../../assets/icons/back.png')
                : require('../../../../assets/icons/next.png')
            }
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

interface IProps {
  data?: number;
  action: Function;
  icon: string;
  isActive: boolean;
  highlight?: boolean;
}

const styles = StyleSheet.create({
  defaultContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginHorizontal: 8,
    borderWidth: 0.8,
    borderColor: '#FAB812',
    backgroundColor: 'transparent',
    color: Colours.White,
  },
  defaultIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginHorizontal: 8,
    borderWidth: 0.8,
    borderColor: Colours.White,
    backgroundColor: 'transparent',
    color: Colours.White,
  },
  text: {
    color: Colours.White,
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
  },
  icon: {
    alignSelf: 'center',
    marginTop: 13,
  },
});

export default NewsPaginationButton;
