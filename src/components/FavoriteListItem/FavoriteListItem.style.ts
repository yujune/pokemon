import {StyleSheet} from 'react-native';
import {windowWidth} from '../../utils/constants';
import {AppSpacing} from '../../themes/theme';

const imageOffset = 20;

export const style = StyleSheet.create({
  container: {
    marginBottom: AppSpacing.medium,
  },
  image: {
    width: windowWidth / 5,
    aspectRatio: 1,
    alignSelf: 'center',
    marginStart: -imageOffset,
  },
  infoContainer: {
    flex: 1,
    padding: AppSpacing.medium,
  },
  roundedContainer: {
    marginLeft: imageOffset,
    marginRight: AppSpacing.small,
    flexDirection: 'row',
    flex: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3.5,
  },
});
