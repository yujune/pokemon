import {StyleSheet} from 'react-native';
import {AppSpacing} from '../../themes/theme';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: AppSpacing.small,
    paddingHorizontal: AppSpacing.medium,
    alignItems: 'center',
  },
  label: {
    flex: 1,
    marginEnd: AppSpacing.mediumSmall,
  },
});
