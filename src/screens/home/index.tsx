import {StyleSheet, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Appbar, Button, Text} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Credit Manager" />
        <Appbar.Action icon={'menu'} onPress={() => {}} />
      </Appbar.Header>
      <View style={tw`p-3`}>
        {/* Analytics */}
        <View style={tw`flex-row items-center`}>
          <View style={tw`shadow bg-white rounded-2 flex-1 p-3`}>
            <Text variant="titleMedium">Sales</Text>
            <Text variant="bodyMedium">2,455</Text>
          </View>
          <View style={tw`p-2`}></View>
          <View style={tw`shadow bg-white rounded-2 flex-1 p-3`}>
            <Text variant="titleMedium">Pending</Text>
            <Text variant="bodyMedium">2,455</Text>
          </View>
        </View>
        {/* Logout */}
        <Button
          mode="contained"
          icon="logout"
          style={tw`mt-4`}
          onPress={() => {
            auth().signOut();
            GoogleSignin.signOut();
          }}>
          Logout
        </Button>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
