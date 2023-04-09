import {Alert} from 'react-native';

export class AlertUtil {
  static showErrorAlert = (error: any) => {
    Alert.alert('Error', `${error}`, [{text: 'OK'}]);
  };
}
