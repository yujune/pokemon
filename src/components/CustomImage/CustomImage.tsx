import React, {FC, useState} from 'react';
import {Image, View} from 'react-native';
import {Props} from './CustomImage.type';
import {LoadingImage} from '../LoadingImage/LoadingImage';

export const CustomImage: FC<Props> = ({loadingImageStyle, ...atr}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View>
      <Image
        resizeMode="contain"
        onLoadEnd={() => {
          setIsLoading(false);
        }}
        {...atr}
      />

      {isLoading && <LoadingImage {...atr} style={loadingImageStyle} />}
    </View>
  );
};
