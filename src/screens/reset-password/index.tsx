import {StyleSheet, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import * as Yup from 'yup';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';

type Props = {};

const ResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string().required('This field is required.'),
  confirmNewPassword: Yup.string()
    .required('This field is required.')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

const ResetPasswordScreen = (props: Props) => {
  const theme = useTheme();
  const navigation: any = useNavigation();
  const resetPasswordForm = useFormik({
    initialValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: values => {
      console.info(values);
    },
  });

  return (
    <View style={tw`p-4`}>
      <View style={tw`mt-20`}>
        <Text variant="headlineLarge">Enter OTP.</Text>
        <View style={tw`mt-5`}>
          {/* New password text input */}
          <View>
            <TextInput
              label={'New Password'}
              mode={'outlined'}
              value={resetPasswordForm.values.newPassword}
              onChangeText={resetPasswordForm.handleChange('newPassword')}
              onBlur={resetPasswordForm.handleBlur('newPassword')}
              error={
                resetPasswordForm.errors.newPassword &&
                resetPasswordForm.touched.newPassword
                  ? true
                  : false
              }
            />
            {resetPasswordForm.errors.newPassword &&
            resetPasswordForm.touched.newPassword ? (
              <Text
                variant="labelLarge"
                style={{
                  color: theme.colors.error,
                  paddingHorizontal: 3,
                  paddingTop: 3,
                }}>
                {resetPasswordForm.errors.newPassword}
              </Text>
            ) : null}
          </View>
          {/* Confirm new Password text input */}
          <View style={tw`mt-5`}>
            <TextInput
              label={'Confirm Password'}
              secureTextEntry={true}
              mode={'outlined'}
              value={resetPasswordForm.values.confirmNewPassword}
              onChangeText={resetPasswordForm.handleChange(
                'confirmNewPassword',
              )}
              onBlur={resetPasswordForm.handleBlur('confirmNewPassword')}
              error={
                resetPasswordForm.errors.confirmNewPassword &&
                resetPasswordForm.touched.confirmNewPassword
                  ? true
                  : false
              }
            />
            {resetPasswordForm.errors.confirmNewPassword &&
            resetPasswordForm.touched.confirmNewPassword ? (
              <Text
                variant="labelLarge"
                style={{
                  color: theme.colors.error,
                  paddingHorizontal: 3,
                  paddingTop: 3,
                }}>
                {resetPasswordForm.errors.confirmNewPassword}
              </Text>
            ) : null}
            {/* Forgot password link */}
            <View>
              <Text
                style={[tw`text-right mt-2`, {color: theme.colors.primary}]}
                variant={'labelLarge'}
                onPress={() => {
                  navigation.navigate('ResetPassword');
                }}>
                Forgot password?
              </Text>
            </View>
          </View>
          {/* Submit button */}
          <View style={tw`mt-5`}>
            <Button
              mode="contained"
              style={tw`py-1 rounded-full`}
              icon={'lock-reset'}
              onPress={resetPasswordForm.handleSubmit}>
              Reset Password
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({});
