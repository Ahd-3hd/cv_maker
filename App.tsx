import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import MainNavigator from "./navigators/MainNavigator";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <MainNavigator />
    </Provider>
  );
}
