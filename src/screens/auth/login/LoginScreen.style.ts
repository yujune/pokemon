import {StyleSheet} from 'react-native';
import {windowWidth} from '../../../utils/constants';
import {AppSpacing} from '../../../themes/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: AppSpacing.standard,
  },
  pokemonLogo: {
    //TODO: find a better way to do this
    width: windowWidth - AppSpacing.standard,
    alignSelf: 'center',
  },
});
