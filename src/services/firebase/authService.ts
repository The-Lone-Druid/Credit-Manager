import {ReactNativeFirebase} from '@react-native-firebase/app';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';
import {loginFormTypes} from '../../screens/login';
import {signupFormTypes} from '../../screens/signup';

/**
 *
 * Firebase user login service
 *
 * @param auth
 * @param values
 * @param isLoading
 * @param setIsLoading
 * @param loadingMessage
 * @param setLoadingMessage
 */
export const signinUserWithEmailAndPassword = async (
  auth: ReactNativeFirebase.FirebaseModuleWithStaticsAndApp<
    FirebaseAuthTypes.Module,
    FirebaseAuthTypes.Statics
  >,
  values: loginFormTypes,
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  loadingMessage: string,
  setLoadingMessage: React.Dispatch<React.SetStateAction<string>>,
) => {
  setIsLoading(true);
  setLoadingMessage('Logging in.');

  auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then(() => {
      setIsLoading(false);
    })
    .catch((error: any) => {
      setIsLoading(false);

      if (error.code === 'auth/wrong-password') {
        Alert.alert(
          'Password is incorrect!',
          "Password that you've entered is incorrect. Click on forgot password in case you've forgot your password.",
        );
      }

      if (error.code === 'auth/user-not-found') {
        Alert.alert(
          'Account not found!',
          'Please check your credentials or try creating a new account.',
        );
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      }

      console.error(error);
    });
};

/**
 *
 * Firebase user signup service
 *
 * @param auth
 * @param values
 * @param isLoading
 * @param setIsLoading
 * @param loadingMessage
 * @param setLoadingMessage
 */
export const createUserWithEmailAndPassword = async (
  auth: ReactNativeFirebase.FirebaseModuleWithStaticsAndApp<
    FirebaseAuthTypes.Module,
    FirebaseAuthTypes.Statics
  >,
  values: signupFormTypes,
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  loadingMessage: string,
  setLoadingMessage: React.Dispatch<React.SetStateAction<string>>,
) => {
  setIsLoading(true);
  setLoadingMessage('Creating an account.');

  auth()
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(() => {
      setIsLoading(false);

      console.log('User account created & signed in!');
    })
    .catch((error: any) => {
      setIsLoading(false);

      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

/**
 * Continue with google.
 *
 * @param auth
 * @param isLoading
 * @param setIsLoading
 * @param loadingMessage
 * @param setLoadingMessage
 * @returns
 */
export const continueWithGoogle = async (
  auth: ReactNativeFirebase.FirebaseModuleWithStaticsAndApp<
    FirebaseAuthTypes.Module,
    FirebaseAuthTypes.Statics
  >,
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  loadingMessage: string,
  setLoadingMessage: React.Dispatch<React.SetStateAction<string>>,
) => {
  setIsLoading(true);
  setLoadingMessage('Continuing with Google...');

  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  const {idToken} = await GoogleSignin.signIn();

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  setIsLoading(false);

  return auth()
    .signInWithCredential(googleCredential)
    .then(data => {
      setIsLoading(false);

      return data;
    })
    .catch((error: any) => {
      setIsLoading(false);

      console.log(error);
    });
};

export const continueWithFacebook = async () => {};

/**
 * User auth state change detector which helps you identify and
 * redirect the user to the protected screens (if authenticated) else
 * redirects the user to the auth screens.
 *
 * @param user
 * @param setUser
 * @param isLoading
 * @param setIsLoading
 * @param setLoadignMessage
 */
export const onAuthStateChanged = async (
  user: FirebaseAuthTypes.User | null,
  setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.User | null>>,
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setLoadignMessage: React.Dispatch<React.SetStateAction<string>>,
) => {
  setLoadignMessage('Please wait...');
  setUser(user);
  if (isLoading) setIsLoading(false);
};
