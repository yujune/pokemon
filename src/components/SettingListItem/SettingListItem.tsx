import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Props} from './SettingListItem.type';
import {style} from './SettingListItem.style';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const SettingListItem: FC<Props> = ({label, customRightIcon}) => {
  const {theme} = useCustomTheme();
  return (
    <View style={style.container}>
      <Text style={[style.label, theme.text?.bodyLarge]}>{label}</Text>
      {customRightIcon !== undefined && customRightIcon}
    </View>
  );
};
