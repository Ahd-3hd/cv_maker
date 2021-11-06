import React from "react";
import { Text, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import Styles from "./index.style";

export default function HomeScreen() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Let's start building your resume</Text>
      <Text style={Styles.description}>
        after generating your resume's PDF
        {"\n"} make sure to download your resume, because they're not stored and
        they will be lost
      </Text>
      <PrimaryButton title="Start" />
    </View>
  );
}
