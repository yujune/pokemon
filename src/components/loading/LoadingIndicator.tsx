import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {style} from './LoadingIndicator.style';
import {Props} from './LoadingIndicator.interface';
import Spinner from 'react-native-loading-spinner-overlay';

export const LoadingIndicator: FC<Props> = ({size = 'large', loadingType}) => {
  return (
    <View style={style.container}>
      {loadingType == 'loadMore' ? (
        <ActivityIndicator size={size} />
      ) : (
        <Spinner visible size={size} />
      )}
    </View>
  );
};
