import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {Props} from './LoadingImage.type';
import {POKEBALL_LOADING} from '../../assets';
import {style} from './LoadingImage.style';

export const LoadingImage: FC<Props> = ({...atr}) => {
  return (
    <View style={style.container}>
      <Image
        {...atr}
        style={[style.image, atr.style]}
        source={POKEBALL_LOADING}
      />
    </View>
  );
};
