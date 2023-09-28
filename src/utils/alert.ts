import {Alert} from 'react-native';

export class AlertUtil {
  static showErrorAlert = (error: any) => {
    Alert.alert('Error', `${error}`, [{text: 'OK'}]);
  };

  static showSuccessAlert = (
    message: string,
    completionHanlder?: () => void,
  ) => {
    Alert.alert('Pokemon', `${message}`, [
      {text: 'OK', onPress: completionHanlder},
    ]);
  };
}
