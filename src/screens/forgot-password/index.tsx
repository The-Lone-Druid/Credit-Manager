import {StyleSheet, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Appbar, Button, Text, TextInput, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import * as Yup from 'yup';

type Props = {};

const ForgotPasswordFormSchema = Yup.object().shape({
  email: Yup.string()
    .required('This field is required.')
    .email('Please enter valid Email.'),
});

const ForgotPasswordScreen = (props: Props) => {
  const theme = useTheme();
  const navigation: any = useNavigation();
  const forgotPasswordForm = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgotPasswordFormSchema,
    onSubmit: values => {},
  });

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Appbar.Header>
      <View style={tw`p-4`}>
        <View style={tw`mt-20`}>
          <Text variant="headlineLarge">Forgot Password.</Text>
          <View style={tw`mt-5`}>
            {/* Login text input */}
            <View>
              <TextInput
                label={'Enter your email.'}
                mode={'outlined'}
                value={forgotPasswordForm.values.email}
                onChangeText={forgotPasswordForm.handleChange('email')}
                onBlur={forgotPasswordForm.handleBlur('email')}
                error={
                  forgotPasswordForm.errors.email &&
                  forgotPasswordForm.touched.email
                    ? true
                    : false
                }
              />
              {forgotPasswordForm.errors.email &&
              forgotPasswordForm.touched.email ? (
                <Text
                  variant="labelLarge"
                  style={{
                    color: theme.colors.error,
                    paddingHorizontal: 3,
                    paddingTop: 3,
                  }}>
                  {forgotPasswordForm.errors.email}
                </Text>
              ) : null}
            </View>
            {/* Submit button */}
            <View style={tw`mt-5`}>
              <Button
                mode="contained"
                style={tw`py-1 rounded-full`}
                icon={'email'}
                onPress={forgotPasswordForm.handleSubmit}>
                Confirm Email
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
