import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {style} from './ListEmpty.style';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {AppSpacing} from '../../themes/theme';

export const ListEmpty: FC = () => {
  const {
    theme: {color},
  } = useCustomTheme();
  return (
    <View
      style={[
        style.container,
        {backgroundColor: color.background, padding: AppSpacing.medium},
      ]}>
      <Text style={{color: color.text}}>No Data</Text>
    </View>
  );
};
