import {StyleSheet} from 'react-native';
import {AppSpacing} from '../../../themes/theme';

export const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  evolutionItem: {
    flex: 1,
  },
  evolutionList: {
    flexDirection: 'row',
    paddingVertical: AppSpacing.standard,
  },
  fastForwardContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
  },
  fastForwardIcon: {
    marginBottom: AppSpacing.small,
  },
});
