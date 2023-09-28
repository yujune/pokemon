import {SharedValue} from 'react-native-reanimated';

export type Props = {
  scrollValue: SharedValue<number>;
  title: string;
  pokemonName: string;
  pokemonId: string;
  types: string[];
};
