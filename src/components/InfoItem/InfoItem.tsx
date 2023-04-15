import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Props} from './InfoItem.type';
import {style} from './InfoItem.style';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const InfoItem: FC<Props> = ({
  label,
  value,
  containerStyle,
  labelStyle,
  direction = 'vertical',
}) => {
  const {theme} = useCustomTheme();
  return (
    <View
      style={[
        direction === 'vertical' ? style.container : style.horizontalContainer,
        containerStyle,
      ]}>
      <Text style={[theme.text?.bodySmall, style.label, labelStyle]}>
        {label}
      </Text>
      <Text
        style={[
          theme.text?.bodyMedium,
          direction === 'vertical' ? style.value : style.horizontalValue,
        ]}>
        {value}
      </Text>
    </View>
  );
};
