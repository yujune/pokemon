import React, {FC} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {style} from './LoadingIndicator.style';
import {Props} from './LoadingIndicator.interface';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const LoadingIndicator: FC<Props> = ({size = 'large'}) => {
  const {theme} = useCustomTheme();
  return (
    <View style={[style.container, {backgroundColor: theme.color.background}]}>
      <ActivityIndicator size={size} />
    </View>
  );
};
