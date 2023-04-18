import React, {FC} from 'react';
import {View} from 'react-native';
import {style} from './CardContainer.style';
import {Props} from './CardContainer.type';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const CardContainer: FC<Props> = ({children, containerStyle}) => {
  const {theme} = useCustomTheme();
  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: theme.color.background,
          shadowColor: theme.color.shadow,
        },
        containerStyle,
      ]}>
      {children}
    </View>
  );
};
