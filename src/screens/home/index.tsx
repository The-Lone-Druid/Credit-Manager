import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import Svg, {G, Rect, Path, Defs, Text as SVGText} from 'react-native-svg';
import tw from 'twrnc';
import {Appbar, Text} from 'react-native-paper';

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
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
