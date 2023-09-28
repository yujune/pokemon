import {StyleSheet} from 'react-native';
import {windowWidth} from '../../../utils/constants';
import {AppSpacing} from '../../../themes/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: AppSpacing.standard,
  },
  pokemonLogo: {
    height: 100,
    aspectRatio: 1.5,
    alignSelf: 'center',
  },
});
