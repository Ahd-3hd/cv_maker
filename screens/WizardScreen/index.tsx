import React from "react";
import { Text, SafeAreaView } from "react-native";
import Styles from "./index.style";
import { Bar } from "react-native-progress";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import WizardCarousel from "../../components/WizardCarousel";

export default function WizardScreen({ navigation }: { navigation: any }) {
  const { progress, questions } = useSelector((state: RootState) => state.cv);

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.title}>Wizard Screen</Text>
      <Bar progress={progress / questions.length} style={Styles.progressBar} />
      <WizardCarousel navigation={navigation} />
    </SafeAreaView>
  );
}
