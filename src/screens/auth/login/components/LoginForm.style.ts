import {StyleSheet} from 'react-native';
import {AppSpacing} from '../../../../themes/theme';
import {AppColor} from '../../../../utils/color';

export const style = StyleSheet.create({
  inputContainer: {
    marginVertical: AppSpacing.standard,
    paddingVertical: AppSpacing.mediumSmall,
    paddingHorizontal: AppSpacing.standard,
    borderRadius: 5,
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
  },
  inputDivider: {
    marginVertical: AppSpacing.small,
  },
  signUpNowLabel: {
    marginVertical: AppSpacing.mediumSmall,
    alignSelf: 'flex-end',
  },
  signUpLabel: {
    color: AppColor.deepSkyBlue,
    textDecorationLine: 'underline',
  },
});
