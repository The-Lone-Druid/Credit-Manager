import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import Svg, {G, Rect, Path, Defs, Text as SVGText} from 'react-native-svg';
import tw from 'twrnc';
import {Text} from 'react-native-paper';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View style={tw`p-2`}>
      <View style={tw`absolute left-[50px] top-[30px] right-[30px]`}>
        <Text>
          Hello World Hello World Hello World Hello World Hello World Hello
          World Hello World Hello World
        </Text>
      </View>
      <Svg
        width={Dimensions.get('window').width}
        style={tw`relative`}
        height={242}
        viewBox={`0 0 ${Dimensions.get('window').width + 70} ${
          Dimensions.get('window').height - Dimensions.get('window').width - 130
        }`}
        fill="none">
        <G filter="url(#filter0_d_4_174027)">
          <Rect
            x={30}
            y={1}
            width={371}
            height={232}
            rx={32}
            stroke="#0C0A16"
          />
          <Path
            d="M30.5 120.897V75.465c0 30.692-19.333 43.076-29 45.432 7.6 6.462 22.5 2.692 29 0z"
            fill="#FCFCF8"
          />
          <Path
            d="M30 76.465c0 30.4-19.333 42.667-29 45 7.6 6.4 22.5 2.667 29 0"
            stroke="#0C0A16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
        <Defs></Defs>
      </Svg>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
