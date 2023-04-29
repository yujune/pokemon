import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {style} from './TagItem.style';
import {Props} from './TagItem.type';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const TagItem: FC<Props> = ({
  label,
  color,
  labelColor,
  tagContainerStyle,
  labelStyle,
}) => {
  const {theme} = useCustomTheme();
  return (
    <View
      style={[style.container, {backgroundColor: color}, tagContainerStyle]}>
      <Text
        style={[
          theme.text?.bodySmall,
          style.labelStyle,
          labelStyle,
          labelColor !== undefined && {color: labelColor},
        ]}>
        {label}
      </Text>
    </View>
  );
};
