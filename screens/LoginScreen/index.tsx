import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../../components/PrimaryButton";
import Input from "../../components/InputField";
import { login } from "../../redux/slices/userSlice/actions";
import Styles from "./index.style";
import { RootState } from "../../redux/store";
import SecondaryButton from "../../components/SecondaryButton";

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { loading, loginError, loggedIn } = useSelector(
    (state: RootState) => state.user
  );

  const handleLogin = () => {
    if (credentials.email && credentials.password) {
      dispatch(login(credentials));
    }
  };

  const handleInputChange = (value: string, target: string) => {
    setCredentials((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  const navigateToSignup = () => {
    return navigation.navigate("Signup");
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.form}>
        <Text style={Styles.title}>Login</Text>
        <Input
          data-set="email"
          placeholder="example@email.com"
          autoCompleteType="email"
          onChangeText={(val) => handleInputChange(val, "email")}
        />
        <Input
          placeholder="password"
          secureTextEntry
          autoCompleteType="password"
          onChangeText={(val) => handleInputChange(val, "password")}
        />
        <Text style={Styles.error}>
          {loginError && "Double check your credentials"}
        </Text>
        <PrimaryButton
          title="Login"
          onPress={handleLogin}
          disabled={!credentials.email && !credentials.password}
        />
        <SecondaryButton
          title="Create a new account"
          onPress={navigateToSignup}
        />
      </View>
    </View>
  );
}
