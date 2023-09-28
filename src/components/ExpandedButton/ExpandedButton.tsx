import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Props} from './ExpandedButton.type';
import {style} from './ExpandedButton.style';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {LoadingIndicator} from '../loading/LoadingIndicator';

export const ExpandedButton: FC<Props> = ({
  title,
  onPress,
  buttonStyle,
  labelStyle,
}) => {
  const {theme} = useCustomTheme();

  return (
    <TouchableOpacity style={[style.button, buttonStyle]} onPress={onPress}>
      <Text style={[style.label, labelStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
