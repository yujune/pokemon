import {StyleSheet} from 'react-native';
import {AppSpacing} from '../themes/theme';

export const AppStyle = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: AppSpacing.standard,
    paddingVertical: AppSpacing.mediumSmall,
  },
  fill: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
});
