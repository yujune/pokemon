import {TextInputProps} from 'react-native';

export type Props = {
  showError?: boolean;
  errorMessage?: string;
} & TextInputProps;
