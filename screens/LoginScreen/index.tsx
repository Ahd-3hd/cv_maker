import React from "react";
import { Text, View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlice/actions";
import Styles from "./index.style";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(
      login({
        email: "a@a.com",
        password: "123123",
      })
    );
  };
  return (
    <View style={Styles.container}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
