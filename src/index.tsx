import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity, Linking, useColorScheme} from 'react-native';
import tw from 'twrnc';

type Props = {};

const RootNavigation = (props: Props) => {
  const isDarkMode = useColorScheme();

  return (
    <View
      style={tw`p-2 flex-1 ${
        isDarkMode === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}>
      <Text style={tw`text-[24px] font-bold`}>
        Hey There!, Welcome to Bare React Native Boilerplate .
      </Text>
      <View style={tw`mt-4`}>
        <Text style={tw`text-[18px] font-semibold`}>Things Covered :-</Text>
        <View style={tw`p-2`}>
          <Text style={tw`font-semibold`}>1. Styling</Text>
          <View style={tw`p-2`}>
            <Text style={tw`font-semibold`}>
              - Used Tailwindcss classnames to simply styling process. Read more
              through official docs:{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://github.com/jaredh159/tailwind-react-native-classnames',
                );
              }}>
              <Text style={tw`text-blue-500`}>React Native TWRNC</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`p-2`}>
          <Text style={tw`font-semibold`}>12. Cache Management</Text>
          <View style={tw`p-2`}>
            <Text style={tw`font-semibold`}>
              - Used Redux Toolkit for Cache Management, no need to write custom
              logic for caching and accessing the stored data. With the help of
              Redux Toolkit you can easily cache and access the rquired data.
              Read more through official docs:{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://redux-toolkit.js.org/introduction/getting-started',
                );
              }}>
              <Text style={tw`text-blue-500`}>Reduxjs Toolkit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`p-2`}>
          <Text style={tw`font-semibold`}>3. API Calling</Text>
          <View style={tw`p-2`}>
            <Text style={tw`font-semibold`}>
              - Used Reduxjs Toolkits official RTK Query to make API Calls,
              provides a lot of features and helps avoid writing custom logic to
              identify API Fetching time and Caching. Once you make an API call
              it stores the Response Data in your Redux Store Automatically
              through which you can access and use it without writing a Complex
              Reducer and Dispatcher. Read more through official docs:
            </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://redux-toolkit.js.org/rtk-query/overview',
                );
              }}>
              <Text style={tw`text-blue-500`}>RTK Query ( API Calling )</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RootNavigation;
