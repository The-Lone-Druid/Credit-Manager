import {StyleSheet, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';

type Props = {};

const SignupFormSchema = Yup.object().shape({
  email: Yup.string()
    .required('This field is required.')
    .email('Please enter valid Email.'),
  password: Yup.string().required('This field is required.'),
  confirmPassword: Yup.string()
    .required('This field is required.')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

const SignupScreen = (props: Props) => {
  const theme = useTheme();
  const navigation: any = useNavigation();
  const signupForm = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupFormSchema,
    onSubmit: values => {
      console.info(values);
    },
  });

  return (
    <View style={tw`p-4`}>
      <View style={tw`mt-20`}>
        <Text variant="headlineLarge">Signup.</Text>
        <View style={tw`mt-5`}>
          {/* Signup text input */}
          <View>
            <TextInput
              label={'Email'}
              mode={'outlined'}
              value={signupForm.values.email}
              onChangeText={signupForm.handleChange('email')}
              onBlur={signupForm.handleBlur('email')}
              error={
                signupForm.errors.email && signupForm.touched.email
                  ? true
                  : false
              }
            />
            {signupForm.errors.email && signupForm.touched.email ? (
              <Text
                variant="labelLarge"
                style={{
                  color: theme.colors.error,
                  paddingHorizontal: 3,
                  paddingTop: 3,
                }}>
                {signupForm.errors.email}
              </Text>
            ) : null}
          </View>
          {/* Password text input */}
          <View style={tw`mt-5`}>
            <TextInput
              label={'Password'}
              secureTextEntry={true}
              mode={'outlined'}
              value={signupForm.values.password}
              onChangeText={signupForm.handleChange('password')}
              onBlur={signupForm.handleBlur('password')}
              error={
                signupForm.errors.password && signupForm.touched.password
                  ? true
                  : false
              }
            />
            {signupForm.errors.password && signupForm.touched.password ? (
              <Text
                variant="labelLarge"
                style={{
                  color: theme.colors.error,
                  paddingHorizontal: 3,
                  paddingTop: 3,
                }}>
                {signupForm.errors.password}
              </Text>
            ) : null}
          </View>
          {/* Confirm password text input */}
          <View style={tw`mt-5`}>
            <TextInput
              label={'Confirm Password'}
              secureTextEntry={true}
              mode={'outlined'}
              value={signupForm.values.confirmPassword}
              onChangeText={signupForm.handleChange('confirmPassword')}
              onBlur={signupForm.handleBlur('confirmPassword')}
              error={
                signupForm.errors.confirmPassword &&
                signupForm.touched.confirmPassword
                  ? true
                  : false
              }
            />
            {signupForm.errors.confirmPassword &&
            signupForm.touched.confirmPassword ? (
              <Text
                variant="labelLarge"
                style={{
                  color: theme.colors.error,
                  paddingHorizontal: 3,
                  paddingTop: 3,
                }}>
                {signupForm.errors.confirmPassword}
              </Text>
            ) : null}
          </View>
          {/* Submit button */}
          <View style={tw`mt-5`}>
            <Button
              mode="contained"
              style={tw`py-1 rounded-full`}
              icon={'account'}
              onPress={signupForm.handleSubmit}>
              Signup
            </Button>
          </View>
          {/* Signup link */}
          <View>
            <Text
              style={[tw`text-center mt-2`, {color: theme.colors.primary}]}
              variant={'labelLarge'}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              Already have an account? Login.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
