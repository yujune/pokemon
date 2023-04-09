import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {style} from './ListEmpty.style';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const ListEmpty: FC = () => {
  const {
    theme: {color, spacing},
  } = useCustomTheme();
  return (
    <View
      style={[
        style.container,
        {backgroundColor: color.background, padding: spacing.medium},
      ]}>
      <Text style={{color: color.text}}>No Data</Text>
    </View>
  );
};
