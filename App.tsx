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
import RootNavigation from './src';
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
        fontFamily: 'Poppins-Regular',
      },
      titleLarge: {
        ...MD3LightTheme.fonts.titleLarge,
        fontFamily: 'Poppins-SemiBold',
      },
      titleMedium: {
        ...MD3LightTheme.fonts.titleMedium,
        fontFamily: 'Poppins-SemiBold',
      },
      titleSmall: {
        ...MD3LightTheme.fonts.titleSmall,
        fontFamily: 'Poppins-SemiBold',
      },
      displayLarge: {
        ...MD3LightTheme.fonts.displayLarge,
        fontFamily: 'Poppins-SemiBold',
      },
      displayMedium: {
        ...MD3LightTheme.fonts.displayMedium,
        fontFamily: 'Poppins-SemiBold',
      },
      displaySmall: {
        ...MD3LightTheme.fonts.displaySmall,
        fontFamily: 'Poppins-SemiBold',
      },
      labelLarge: {
        ...MD3LightTheme.fonts.labelLarge,
        fontFamily: 'Poppins-SemiBold',
      },
      labelMedium: {
        ...MD3LightTheme.fonts.labelMedium,
        fontFamily: 'Poppins-SemiBold',
      },
      labelSmall: {
        ...MD3LightTheme.fonts.labelSmall,
        fontFamily: 'Poppins-SemiBold',
      },
      bodyLarge: {
        ...MD3LightTheme.fonts.bodyLarge,
        fontFamily: 'Poppins-SemiBold',
      },
      bodyMedium: {
        ...MD3LightTheme.fonts.bodyMedium,
        fontFamily: 'Poppins-SemiBold',
      },
      bodySmall: {
        ...MD3LightTheme.fonts.bodySmall,
        fontFamily: 'Poppins-SemiBold',
      },
      headlineLarge: {
        ...MD3LightTheme.fonts.headlineLarge,
        fontFamily: 'Poppins-SemiBold',
      },
      headlineMedium: {
        ...MD3LightTheme.fonts.headlineMedium,
        fontFamily: 'Poppins-SemiBold',
      },
      headlineSmall: {
        ...MD3LightTheme.fonts.headlineSmall,
        fontFamily: 'Poppins-SemiBold',
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
