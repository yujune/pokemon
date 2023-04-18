import {StyleSheet} from 'react-native';
import {AppSpacing} from '../../themes/theme';
import {AppColor} from '../../utils/color';

export const style = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: AppSpacing.standard,
    shadowColor: AppColor.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3.5,
  },
});
