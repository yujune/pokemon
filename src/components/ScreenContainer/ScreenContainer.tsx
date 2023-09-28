import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Props} from './ScreenContainer.type';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {AppStyle} from '../../utils/global-style';

export const ScreenContainer: FC<Props> = ({
  children,
  style,
  useScrollView = false,
}) => {
  const {theme} = useCustomTheme();

  const body = () => (
    <SafeAreaView style={AppStyle.fill}>
      <View style={AppStyle.screenContainer}>{children}</View>
    </SafeAreaView>
  );

  if (useScrollView) {
    return (
      <ScrollView style={{backgroundColor: theme.color.background}}>
        {body()}
      </ScrollView>
    );
  }
  return (
    <View style={[AppStyle.fill, {backgroundColor: theme.color.background}]}>
      {body()}
    </View>
  );
};
