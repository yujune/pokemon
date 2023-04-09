import React, {FC} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {style} from './LoadingIndicator.style';
import {Props} from './LoadingIndicator.interface';

export const LoadingIndicator: FC<Props> = ({size = 'large'}) => {
  return (
    <View style={style.container}>
      <ActivityIndicator size={size} />
    </View>
  );
};
