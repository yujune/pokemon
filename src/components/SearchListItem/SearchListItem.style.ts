import {StyleSheet} from 'react-native';
import {AppSpacing} from '../../themes/theme';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: AppSpacing.small,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
  loadingImage: {
    width: 10,
    height: 10,
  },
  name: {
    flex: 1,
  },
});
