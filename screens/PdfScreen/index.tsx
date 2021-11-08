import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import * as WebBrowser from "expo-web-browser";
import ENV from "../../config/constants";
import Style from "./index.style";
import PrimaryButton from "../../components/PrimaryButton";

export default function PdfScreen({ navigation }: { navigation: any }) {
  const cv = useSelector((state: RootState) => state.cv);
  const hanleViewPdf = async () => {
    await WebBrowser.openBrowserAsync(
      `http://${ENV.DOMAIN}:5000/pdfs/${cv.pdfUrl}`
    );
  };
  return (
    <View style={Style.container}>
      <Text style={Style.paragraph}>
        Congrats, Your file is generated and you're ready to apply for jobs
      </Text>
      <PrimaryButton title="View PDF" onPress={hanleViewPdf} />
    </View>
  );
}
