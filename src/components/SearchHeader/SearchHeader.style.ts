import {StyleSheet} from 'react-native';
import {AppSpacing} from '../../themes/theme';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: AppSpacing.mediumSmall,
  },
  searchBarContainer: {
    flex: 1,
    marginLeft: AppSpacing.mediumSmall,
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: AppSpacing.small,
    paddingVertical: 2,
  },
  inputContainer: {
    borderRadius: 30,
  },
});
