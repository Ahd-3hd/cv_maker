import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import Styles from "./index.style";
import { Bar } from "react-native-progress";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setProgress } from "../../redux/slices/cvSlice";
import WizardCarousel from "../../components/WizardCarousel";

export default function WizardScreen() {
  const dispatch = useDispatch();
  const { progress, questions } = useSelector((state: RootState) => state.cv);

  const handleProgress = () => {
    dispatch(setProgress(progress + 1));
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.title}>Wizard Screen</Text>
      <Bar
        progress={Math.round((progress / questions.length - 1) * 100) / 100}
        style={Styles.progressBar}
      />
      <WizardCarousel />
      <PrimaryButton title="Next" onPress={handleProgress} />
    </SafeAreaView>
  );
}
