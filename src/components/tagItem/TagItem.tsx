import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {style} from './TagItem.style';
import {Props} from './TagItem.type';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const TagItem: FC<Props> = ({label, tagContainerStyle, labelStyle}) => {
  const {theme} = useCustomTheme();
  return (
    <View style={[style.container, tagContainerStyle]}>
      <Text style={[theme.text?.bodySmall, style.labelStyle, labelStyle]}>
        {label}
      </Text>
    </View>
  );
};
