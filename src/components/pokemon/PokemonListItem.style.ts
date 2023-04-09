import {StyleSheet} from 'react-native';
import {windowWidth} from '../../utils/constants';

export const style = StyleSheet.create({
  container: {
    width: windowWidth / 3,
  },
  image: {
    width: '75%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  label: {
    fontSize: 15,
    margin: 15,
    textAlign: 'center',
  },
});
