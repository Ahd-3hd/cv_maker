import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import HomeScreen from "../../screens/HomeScreen";
import SignupScreen from "../../screens/SignupScreen";
import WizardScreen from "../../screens/WizardScreen";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const { loggedIn } = useSelector((state: RootState) => state.user);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {true || loggedIn ? (
          <>
            <Stack.Screen name="Wizard" component={WizardScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
