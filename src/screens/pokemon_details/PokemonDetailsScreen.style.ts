import {StyleSheet} from 'react-native';
import {AppColor} from '../../utils/color';
import {AppSpacing} from '../../themes/theme';

export const style = StyleSheet.create({
  titleStyle: {
    backgroundColor: AppColor.transparentBlack,
    color: AppColor.white,
    padding: AppSpacing.medium,
  },
  tabTextContainerStyle: {
    backgroundColor: 'transparent',
    borderRadius: 18,
  },
  tabText: {
    lineHeight: 20,
    paddingHorizontal: AppSpacing.medium,
    paddingVertical: AppSpacing.mediumSmall,
  },
  tabTextActiveStyle: {
    lineHeight: 20,
    paddingHorizontal: AppSpacing.medium,
    paddingVertical: AppSpacing.mediumSmall,
  },
  tabWrapperStyle: {
    paddingVertical: AppSpacing.medium,
  },
  tabsContainerStyle: {
    paddingHorizontal: AppSpacing.medium,
  },
  stretchContainer: {
    alignSelf: 'stretch',
    flex: 1,
  },
});
