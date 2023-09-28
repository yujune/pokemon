import {useMutation} from '@tanstack/react-query';
import {ILoginForm} from '../models/auth/login_form';
import * as yup from 'yup';
import {api} from '../services/api/api_service';
import {AlertUtil} from '../utils/alert';
import {useAuth} from '../context/auth/auth_provider';
import {useNavigation} from '@react-navigation/native';
import {HomeProps} from '../navigators/home/HomeNavigator';

export const useLogin = () => {
  const {login} = useAuth();
  const navigation = useNavigation<HomeProps['navigation']>();
  const loginValidationSchema = yup.object<ILoginForm>().shape({
    username: yup.string().required('User name is required'),
    password: yup.string().required('Password is required'),
  });

  const mutation = useMutation({
    mutationFn: (loginReq: ILoginForm) => api.login(loginReq),
    onError: error => AlertUtil.showErrorAlert(error),
    onSuccess: response => {
      var accessToken = response.data.access_token;
      var refreshToken = response.data.refresh_token;
      login(accessToken, refreshToken);
      navigation.navigate('Home');
    },
  });
  return {loginValidationSchema, mutation};
};
