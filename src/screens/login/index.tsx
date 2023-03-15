import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import tw from 'twrnc';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .required('This field is required.')
    .email('Please enter valid Email.'),
  password: Yup.string().required('This field is required.'),
});

const LoginScreen = (props: Props) => {
  const theme = useTheme();
  const navigation: any = useNavigation();
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginFormSchema,
    onSubmit: values => {},
  });

  return (
    <View style={tw`p-4`}>
      <View style={tw`mt-20`}>
        <Text variant="headlineLarge">Login.</Text>
        <View style={tw`mt-5`}>
          {/* Login text input */}
          <View>
            <TextInput
              label={'Email'}
              mode={'outlined'}
              value={loginForm.values.email}
              onChangeText={loginForm.handleChange('email')}
              onBlur={loginForm.handleBlur('email')}
              error={
                loginForm.errors.email && loginForm.touched.email ? true : false
              }
            />
            {loginForm.errors.email && loginForm.touched.email ? (
              <Text
                variant="labelLarge"
                style={{
                  color: theme.colors.error,
                  paddingHorizontal: 3,
                  paddingTop: 3,
                }}>
                {loginForm.errors.email}
              </Text>
            ) : null}
          </View>
          {/* Password text input */}
          <View style={tw`mt-5`}>
            <TextInput
              label={'Password'}
              secureTextEntry={true}
              mode={'outlined'}
              value={loginForm.values.password}
              onChangeText={loginForm.handleChange('password')}
              onBlur={loginForm.handleBlur('password')}
              error={
                loginForm.errors.password && loginForm.touched.password
                  ? true
                  : false
              }
            />
            {loginForm.errors.password && loginForm.touched.password ? (
              <Text
                variant="labelLarge"
                style={{
                  color: theme.colors.error,
                  paddingHorizontal: 3,
                  paddingTop: 3,
                }}>
                {loginForm.errors.password}
              </Text>
            ) : null}
            {/* Forgot password link */}
            <View>
              <Text
                style={[tw`text-right mt-2`, {color: theme.colors.primary}]}
                variant={'labelLarge'}
                onPress={() => {
                  navigation.navigate('ForgotPassword');
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
              icon={'login'}
              onPress={loginForm.handleSubmit}>
              Login
            </Button>
          </View>
          {/* Signup link */}
          <View>
            <Text
              style={[tw`text-center mt-2`, {color: theme.colors.primary}]}
              variant={'labelLarge'}
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              Need access? Signup.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
