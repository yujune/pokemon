import {StyleSheet} from 'react-native';
import {AppFontSize, AppSpacing} from '../../themes/theme';
import {AppColor} from '../../utils/color';

export const style = StyleSheet.create({
  input: {
    paddingVertical: AppSpacing.mediumSmall,
  },
  error: {
    fontSize: AppFontSize.small,
    color: AppColor.red,
  },
});
