import {StyleSheet} from 'react-native';
import {AppColor} from '../../utils/color';
import {AppFontSize, AppSpacing} from '../../themes/theme';

export const style = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColor.deepSkyBlue,
    borderRadius: 5,
    paddingVertical: AppSpacing.mediumSmall,
    paddingHorizontal: AppSpacing.standard,
  },
  label: {
    color: AppColor.white,
    fontSize: AppFontSize.medium,
  },
});
