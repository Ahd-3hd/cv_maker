import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import Styles from "./index.style";

interface IInputProps extends TextInputProps {}

export default function Input(props: IInputProps) {
  return (
    <View style={Styles.container}>
      <TextInput style={Styles.input} {...props} />
    </View>
  );
}
