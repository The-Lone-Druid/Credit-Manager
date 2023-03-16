import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {ActivityIndicator, MD3Colors} from 'react-native-paper';

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  loadingMessage: string;
};

const BasicLoader = (props: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        props.setVisible(!props.visible);
      }}>
      <View
        style={tw`flex-1 bg-black bg-opacity-50 items-center justify-center`}>
        <ActivityIndicator color={MD3Colors.neutral100} size={60} />
        <Text
          style={[tw`text-xl font-bold mt-3`, {color: MD3Colors.neutral100}]}>
          {props.loadingMessage}
        </Text>
      </View>
    </Modal>
  );
};

export default BasicLoader;

const styles = StyleSheet.create({});
