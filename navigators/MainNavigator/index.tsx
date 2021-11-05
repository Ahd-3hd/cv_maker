import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import HomeScreen from "../../screens/HomeScreen";

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
        {loggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
