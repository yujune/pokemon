import {StyleSheet} from 'react-native';
import {AppColor} from '../../utils/color';
import {AppSpacing} from '../../themes/theme';

export const style = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingHorizontal: AppSpacing.large,
    paddingVertical: AppSpacing.medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppColor.black,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 25,
    height: 25,
  },
  headerText: {
    paddingLeft: AppSpacing.standard,
  },
});
