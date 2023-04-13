import {StyleSheet} from 'react-native';
import {AppSpacing} from '../../themes/theme';
import {AppColor} from '../../utils/color';

export const style = StyleSheet.create({
  evolutionItem: {
    flex: 1,
  },
  evolutionList: {
    flexDirection: 'row',
    paddingVertical: AppSpacing.standard,
  },
  border: {
    borderBottomColor: AppColor.seaShell,
    borderBottomWidth: 2,
  },
  fastForwardIcon: {
    alignSelf: 'center',
    alignItems: 'center',
  },
});
