/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer, Theme} from '@react-navigation/native';
import React from 'react';
import RootNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {store} from './src/cache/store';
import {useColorScheme} from 'react-native';
import {ThemeProp} from 'react-native-paper/lib/typescript/src/types';

const App = () => {
  const isDarkMode = useColorScheme();

  const defaultTheme: ThemeProp = {
    ...(isDarkMode === 'dark' ? MD3DarkTheme : MD3LightTheme),
    fonts: {
      default: {
        ...MD3LightTheme.fonts.default,
        fontFamily: 'Poppins-Medium',
      },
      titleLarge: {
        ...MD3LightTheme.fonts.titleLarge,
        fontFamily: 'Poppins-Bold',
      },
      titleMedium: {
        ...MD3LightTheme.fonts.titleMedium,
        fontFamily: 'Poppins-Bold',
      },
      titleSmall: {
        ...MD3LightTheme.fonts.titleSmall,
        fontFamily: 'Poppins-Bold',
      },
      displayLarge: {
        ...MD3LightTheme.fonts.displayLarge,
        fontFamily: 'Poppins-Bold',
      },
      displayMedium: {
        ...MD3LightTheme.fonts.displayMedium,
        fontFamily: 'Poppins-Bold',
      },
      displaySmall: {
        ...MD3LightTheme.fonts.displaySmall,
        fontFamily: 'Poppins-Bold',
      },
      labelLarge: {
        ...MD3LightTheme.fonts.labelLarge,
        fontFamily: 'Poppins-Regular',
      },
      labelMedium: {
        ...MD3LightTheme.fonts.labelMedium,
        fontFamily: 'Poppins-Regular',
      },
      labelSmall: {
        ...MD3LightTheme.fonts.labelSmall,
        fontFamily: 'Poppins-Regular',
      },
      bodyLarge: {
        ...MD3LightTheme.fonts.bodyLarge,
        fontFamily: 'Poppins-Regular',
      },
      bodyMedium: {
        ...MD3LightTheme.fonts.bodyMedium,
        fontFamily: 'Poppins-Regular',
      },
      bodySmall: {
        ...MD3LightTheme.fonts.bodySmall,
        fontFamily: 'Poppins-Regular',
      },
      headlineLarge: {
        ...MD3LightTheme.fonts.headlineLarge,
        fontFamily: 'Poppins-Bold',
      },
      headlineMedium: {
        ...MD3LightTheme.fonts.headlineMedium,
        fontFamily: 'Poppins-Bold',
      },
      headlineSmall: {
        ...MD3LightTheme.fonts.headlineSmall,
        fontFamily: 'Poppins-Bold',
      },
    },
  };

  return (
    <Provider store={store}>
      <PaperProvider theme={defaultTheme}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
