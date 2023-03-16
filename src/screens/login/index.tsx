import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import tw from 'twrnc';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {
  continueWithGoogle,
  signinUserWithEmailAndPassword,
} from '../../services/firebase/authService';
import auth from '@react-native-firebase/auth';
import BasicLoader from '../../components/Loaders';

type Props = {};

export type loginFormTypes = {
  email: string;
  password: string;
};

const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .required('This field is required.')
    .email('Please enter valid Email.'),
  password: Yup.string().required('This field is required.'),
});

const LoginScreen = (props: Props) => {
  const theme = useTheme();
  const navigation: any = useNavigation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingMessage, setLoadingMessage] = React.useState('Loading...');
  const [showPassword, setShowPassword] = React.useState(false);

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginFormSchema,
    onSubmit: values => {
      handleLogin(values);
    },
  });

  const handleLogin = async (values: loginFormTypes) => {
    await signinUserWithEmailAndPassword(
      auth,
      values,
      isLoading,
      setIsLoading,
      loadingMessage,
      setLoadingMessage,
    );
  };

  const handleGoogleAuth = async () => {
    await continueWithGoogle(
      auth,
      isLoading,
      setIsLoading,
      loadingMessage,
      setLoadingMessage,
    );
  };

  const handleFacebookAuth = async () => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tw`flex-1`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={tw`p-4`}>
            <BasicLoader
              visible={isLoading}
              setVisible={setIsLoading}
              loadingMessage={loadingMessage}
            />
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
                      loginForm.errors.email && loginForm.touched.email
                        ? true
                        : false
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
                    secureTextEntry={!showPassword}
                    mode={'outlined'}
                    value={loginForm.values.password}
                    onChangeText={loginForm.handleChange('password')}
                    onBlur={loginForm.handleBlur('password')}
                    right={
                      <TextInput.Icon
                        onPress={() => setShowPassword(!showPassword)}
                        icon={!showPassword ? 'eye' : 'eye-off'}
                      />
                    }
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
                      style={[
                        tw`text-right mt-2`,
                        {color: theme.colors.primary},
                      ]}
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
                    style={tw`rounded-full`}
                    contentStyle={tw`py-1`}
                    icon={'login'}
                    onPress={loginForm.handleSubmit}>
                    Login
                  </Button>
                </View>
                {/* Signup link */}
                <View>
                  <Text
                    style={[
                      tw`text-center mt-2`,
                      {color: theme.colors.primary},
                    ]}
                    variant={'labelLarge'}
                    onPress={() => {
                      navigation.navigate('Signup');
                    }}>
                    Need access? Signup.
                  </Text>
                </View>
                {/* Social Signin */}
                <View style={tw`flex-row items-center my-4`}>
                  <View style={tw`border-b flex-1`}></View>
                  <Text style={tw`px-2`}>OR</Text>
                  <View style={tw`border-b flex-1`}></View>
                </View>
                {/* Google Login button */}
                <View>
                  <Button
                    buttonColor="#ea4335"
                    textColor="white"
                    mode="contained"
                    style={tw`rounded-full`}
                    contentStyle={tw`py-1`}
                    icon={'google'}
                    onPress={handleGoogleAuth}>
                    Continue with Google
                  </Button>
                </View>
                {/* Facebook Login button */}
                <View style={tw`mt-5`}>
                  <Button
                    buttonColor="#4267B2"
                    mode="contained"
                    style={tw`rounded-full`}
                    contentStyle={tw`py-1`}
                    icon={'facebook'}
                    textColor="white"
                    onPress={handleFacebookAuth}>
                    Continue with Facebook
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
