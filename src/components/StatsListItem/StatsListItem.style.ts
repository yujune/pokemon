import {StyleSheet} from 'react-native';
import {AppSpacing} from '../../themes/theme';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: AppSpacing.small,
  },
  name: {
    flex: 1.5,
  },
  stat: {
    flex: 0.5,
  },
  progressBar: {
    flex: 2,
  },
});
