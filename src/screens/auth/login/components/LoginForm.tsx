import {Formik} from 'formik';
import React from 'react';
import {View, Text} from 'react-native';
import {useCustomTheme} from '../../../../context/theme/theme_provider';
import {ExpandedButton} from '../../../../components/ExpandedButton/ExpandedButton';
import {CustomTextInput} from '../../../../components/CustomTextInput/CustomTextInput';
import {style} from './LoginForm.style';
import {Divider} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import {LoginProps} from '../LoginScreen.type';
import {useLogin} from '../../../../hooks/useLogin';
import {ILoginForm} from '../../../../models/auth/login_form';
import {LoadingIndicator} from '../../../../components/loading/LoadingIndicator';

export const LoginForm = () => {
  const navigation = useNavigation<LoginProps['navigation']>();
  const {theme} = useCustomTheme();
  const {loginValidationSchema, mutation} = useLogin();

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  const onSubmit = (values: ILoginForm) => {
    mutation.mutate(values);
  };

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{username: '', password: ''}}
      onSubmit={onSubmit}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <>
          <View
            style={[
              style.inputContainer,
              {
                backgroundColor: theme.color.background,
                shadowColor: theme.color.shadow,
              },
            ]}>
            <CustomTextInput
              placeholder="User Name"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            <Divider style={style.inputDivider} />
            <CustomTextInput
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
          </View>
          <ExpandedButton
            onPress={() => {
              handleSubmit();
            }}
            title="Login"
          />
          <Text style={[style.signUpNowLabel, theme.text?.bodyMedium]}>
            Dont have an account?
            <Text style={style.signUpLabel} onPress={onSignUpPressed}>
              Sign up
            </Text>
            now
          </Text>
          {mutation.isLoading && <LoadingIndicator />}
        </>
      )}
    </Formik>
  );
};
