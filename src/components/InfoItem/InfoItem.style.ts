import {StyleSheet} from 'react-native';
import {AppSpacing} from '../../themes/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    opacity: 0.5,
  },
  horizontalValue: {
    marginLeft: AppSpacing.mediumSmall,
    fontWeight: 'bold',
  },
  value: {
    marginTop: AppSpacing.small,
    fontWeight: 'bold',
  },
});
