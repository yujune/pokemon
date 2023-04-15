import {StyleSheet} from 'react-native';
import {AppSpacing} from '../../themes/theme';

export const style = StyleSheet.create({
  tagListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  heightWeightContainer: {
    flexDirection: 'row',
    marginVertical: AppSpacing.medium,
  },
  descriptionLabel: {
    marginTop: AppSpacing.medium,
    marginBottom: AppSpacing.small,
    opacity: 0.5,
  },
  horizontalInfoContainer: {
    marginTop: AppSpacing.small,
  },
});
