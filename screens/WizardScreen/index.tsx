import React from "react";
import { Text, SafeAreaView } from "react-native";
import Styles from "./index.style";
import { Bar } from "react-native-progress";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setProgress } from "../../redux/slices/cvSlice";
import WizardCarousel from "../../components/WizardCarousel";

export default function WizardScreen() {
  const { progress, questions } = useSelector((state: RootState) => state.cv);

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.title}>Wizard Screen</Text>
      <Bar progress={progress / questions.length} style={Styles.progressBar} />
      <WizardCarousel />
    </SafeAreaView>
  );
}
