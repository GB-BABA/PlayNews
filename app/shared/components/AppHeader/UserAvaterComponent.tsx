import React from 'react';
import {Image} from 'react-native';
import {useLinkProps} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const UserAvater = (props: IProps) => {
  return (
    <TouchableOpacity
      style={{
        ...props.style,
        // flex: 1,
        margin: 'auto',
      }}>
      <Image source={require('../../../../assets/images/demo-avatar.png')} />
    </TouchableOpacity>
  );
};

interface IProps {
  style?: object;
}

export default UserAvater;
