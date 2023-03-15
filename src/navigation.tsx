import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ForgotPasswordScreen from './screens/forgot-password';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import ProfileScreen from './screens/profile';
import ResetPasswordScreen from './screens/reset-password';
import SettingsScreen from './screens/settings';
import SignupScreen from './screens/signup';

type Props = {};

const Stack = createNativeStackNavigator();

const RootNavigation = (props: Props) => {
  const [state] = React.useState<null | any>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/**
         * Checks if users state is persisted in the secure storage
         * and based on that it'll either display the auth screens
         * or it'll display the authenticated screens.
         */}
        {!state?.userToken ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPasswordScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </>
        )}
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default RootNavigation;
