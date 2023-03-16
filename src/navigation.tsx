import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import tw from 'twrnc';
import {useColorScheme, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ForgotPasswordScreen from './screens/forgot-password';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import ProfileScreen from './screens/profile';
import ResetPasswordScreen from './screens/reset-password';
import SettingsScreen from './screens/settings';
import SignupScreen from './screens/signup';
import {onAuthStateChanged} from './services/firebase/authService';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import BasicLoader from './components/Loaders';
import VerifyEmailScreen from './screens/verify-email';

type Props = {};

const Stack = createNativeStackNavigator();

const RootNavigation = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadingMessage, setLoadingMessage] = React.useState('Loading...');
  const [user, setUser] = React.useState<FirebaseAuthTypes.User | null>(null);
  const isDarkMode = useColorScheme();

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user =>
      onAuthStateChanged(
        user,
        setUser,
        isLoading,
        setIsLoading,
        setLoadingMessage,
      ),
    );

    return subscriber;
  }, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <BasicLoader
        visible={isLoading}
        setVisible={setIsLoading}
        loadingMessage={loadingMessage}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: isDarkMode === 'dark' ? '#363636' : '#ffffff',
          },
          animation: 'fade',
        }}
        initialRouteName="Home">
        {/**
         * Checks if users state is persisted in the secure storage
         * and based on that it'll either display the auth screens
         * or it'll display the authenticated screens.
         */}
        {!user ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPasswordScreen}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPasswordScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </>
        )}
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default RootNavigation;
