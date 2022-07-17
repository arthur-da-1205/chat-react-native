import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ArrowBack} from '../../../assets';

const Icon = ({onPress, icon}) => {
  const IconType = () => {
    if (icon === 'dark') {
      return <ArrowBack />;
    }
    if (icon === 'light') {
      return <ArrowBack />;
    }
    return <ArrowBack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <IconType />
    </TouchableOpacity>
  );
};

export default Icon;
