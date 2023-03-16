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
import tw from 'twrnc';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {createUserWithEmailAndPassword} from '../../services/firebase/authService';
import auth from '@react-native-firebase/auth';
import BasicLoader from '../../components/Loaders';

type Props = {};

export type signupFormTypes = {
  email: string;
  password: string;
  confirmPassword: string;
};

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
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingMessage, setLoadingMessage] = React.useState('Loading...');
  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = React.useState(false);

  const signupForm = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupFormSchema,
    onSubmit: values => {
      handleSignup(values);
    },
  });

  const handleSignup = async (values: signupFormTypes) => {
    await createUserWithEmailAndPassword(
      auth,
      values,
      isLoading,
      setIsLoading,
      loadingMessage,
      setLoadingMessage,
    );
  };

  const handleGoogleAuth = async () => {};

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
                    secureTextEntry={!showPassword}
                    mode={'outlined'}
                    value={signupForm.values.password}
                    onChangeText={signupForm.handleChange('password')}
                    onBlur={signupForm.handleBlur('password')}
                    right={
                      <TextInput.Icon
                        onPress={() => setShowPassword(!showPassword)}
                        icon={!showPassword ? 'eye' : 'eye-off'}
                      />
                    }
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
                    secureTextEntry={!confirmShowPassword}
                    mode={'outlined'}
                    value={signupForm.values.confirmPassword}
                    onChangeText={signupForm.handleChange('confirmPassword')}
                    onBlur={signupForm.handleBlur('confirmPassword')}
                    right={
                      <TextInput.Icon
                        onPress={() =>
                          setConfirmShowPassword(!confirmShowPassword)
                        }
                        icon={!confirmShowPassword ? 'eye' : 'eye-off'}
                      />
                    }
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
                    style={[
                      tw`text-center mt-2`,
                      {color: theme.colors.primary},
                    ]}
                    variant={'labelLarge'}
                    onPress={() => {
                      navigation.navigate('Login');
                    }}>
                    Already have an account? Login.
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

export default SignupScreen;

const styles = StyleSheet.create({});
