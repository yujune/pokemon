import React, {FC} from 'react';
import {Text, TextInput} from 'react-native';
import {Props} from './CustomTextInput.type';
import {style as defaultStyle} from './CustomTextInput.style';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const CustomTextInput: FC<Props> = props => {
  const {style, showError, errorMessage, ...restProps} = props;
  const {theme} = useCustomTheme();
  const combinedStyle = [defaultStyle.input, theme.text?.bodyMedium, style];

  return (
    <>
      <TextInput
        placeholderTextColor={theme.color.text}
        style={combinedStyle}
        autoCapitalize="none"
        {...restProps}
      />
      {showError && <Text style={defaultStyle.error}>{errorMessage}</Text>}
    </>
  );
};
