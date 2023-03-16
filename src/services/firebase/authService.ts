import {ReactNativeFirebase} from '@react-native-firebase/app';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {signupFormTypes} from '../../screens/signup';

export const signinUserWithEmailAndPassword = async () => {};

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

export const continueWithGoogle = async () => {};

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
