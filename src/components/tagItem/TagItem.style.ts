import {StyleSheet} from 'react-native';
import {AppColor} from '../../utils/color';
import {AppSpacing} from '../../themes/theme';

export const style = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: AppColor.transparentBlack,
    paddingHorizontal: AppSpacing.mediumSmall,
    paddingVertical: AppSpacing.small,
    marginEnd: AppSpacing.mediumSmall,
  },
  labelStyle: {
    color: AppColor.white,
    fontWeight: 'bold',
  },
});
