import {Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {useCustomTheme} from '../../../../context/theme/theme_provider';
import {ExpandedButton} from '../../../../components/ExpandedButton/ExpandedButton';
import {CustomTextInput} from '../../../../components/CustomTextInput/CustomTextInput';
import {style} from './SignUpForm.style';
import {Divider} from '@rneui/base';
import {useSignUp} from '../../../../hooks/useSignUp';
import {ISignUpForm} from '../../../../models/auth/sign_up_form';
import {LoadingIndicator} from '../../../../components/loading/LoadingIndicator';
import {AppStyle} from '../../../../utils/global-style';

export const SignUpForm = () => {
  const {theme} = useCustomTheme();
  const {registrationValidationSchema, formInitialValues, mutation} =
    useSignUp();

  const onSubmit = (values: ISignUpForm) => {
    mutation.mutate({
      email: 'user@example.com',
      password: values.password,
      name: values.username,
    });
    console.log(values);
  };

  return (
    <Formik
      validationSchema={registrationValidationSchema}
      initialValues={formInitialValues}
      onSubmit={onSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <>
          <View style={AppStyle.fill}>
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
                showError={
                  touched.username && (errors.username?.length ?? 0) > 0
                }
                errorMessage={errors.username}
              />
              <Divider style={style.inputDivider} />
              <CustomTextInput
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                showError={
                  touched.password && (errors.password?.length ?? 0) > 0
                }
                errorMessage={errors.password}
              />
              <Divider style={style.inputDivider} />
              <CustomTextInput
                placeholder="Confirm Password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                showError={
                  touched.confirmPassword &&
                  (errors.confirmPassword?.length ?? 0) > 0
                }
                errorMessage={errors.confirmPassword}
              />
            </View>
          </View>

          <ExpandedButton
            onPress={() => {
              handleSubmit();
            }}
            title="Sign Up"
          />
          {mutation.isLoading && <LoadingIndicator />}
        </>
      )}
    </Formik>
  );
};
