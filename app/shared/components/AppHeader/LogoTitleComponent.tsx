import React from 'react';
import {Image} from 'react-native';

const LogoTitle = (props: IProps) => {
  return (
    <Image
      source={require('../../../../assets/logo/logo.png')}
      style={{
        ...props.style,
        paddingVertical: 5,
      }}
    />
  );
};

interface IProps {
  style?: object;
}

export default LogoTitle;
