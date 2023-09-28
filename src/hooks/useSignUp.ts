import {useMutation} from '@tanstack/react-query';
import * as yup from 'yup';
import {api} from '../services/api/api_service';
import {RegistrationReq} from '../models/auth/registration_req';
import {ISignUpForm} from '../models/auth/sign_up_form';
import {AlertUtil} from '../utils/alert';
import {useNavigation} from '@react-navigation/native';

export const useSignUp = () => {
  const navigation = useNavigation();
  const registrationValidationSchema = yup.object<ISignUpForm>().shape({
    username: yup.string().required('User name is required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const formInitialValues: ISignUpForm = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  const mutation = useMutation({
    mutationFn: (registrationReq: RegistrationReq) => {
      return api.register(registrationReq);
    },
    onError: error => {
      AlertUtil.showErrorAlert(error);
    },
    onSuccess: async () => {
      AlertUtil.showSuccessAlert(
        'Successfully registered! Please login with the account now.',
        navigation?.goBack,
      );
    },
  });

  return {registrationValidationSchema, formInitialValues, mutation};
};
