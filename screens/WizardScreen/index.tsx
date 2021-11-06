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
  const { progress, questions, userInputs } = useSelector(
    (state: RootState) => state.cv
  );

  const handleProgress = () => {
    console.log(progress / questions.length);
    if (progress < questions.length - 1) {
      dispatch(setProgress(progress + 1));
    } else {
      console.log(userInputs);
      // TODO: send to back end
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.title}>Wizard Screen</Text>
      <Bar progress={progress / questions.length} style={Styles.progressBar} />
      <WizardCarousel />

      <View style={Styles.buttonContainer}>
        <PrimaryButton
          title={progress === questions.length - 1 ? "SUBMIT" : "NEXT"}
          onPress={handleProgress}
        />
      </View>
    </SafeAreaView>
  );
}
