import {StyleSheet} from 'react-native';
import {AppSpacing} from '../../themes/theme';
import {windowWidth} from '../../utils/constants';

export const style = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  categoryTitle: {
    marginVertical: AppSpacing.small,
    fontWeight: 'bold',
  },
  imageListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    width: windowWidth / 3.4,
  },
});
