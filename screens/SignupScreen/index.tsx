import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import Input from "../../components/InputField";
import Styles from "./index.style";
import SecondaryButton from "../../components/SecondaryButton";
import signupApi from "../../api/signupApi";

export default function SignupScreen({ navigation }: { navigation: any }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [signupError, setSignupError] = useState("");

  const handleSignup = async () => {
    if (credentials.password !== credentials.repeatPassword) {
      return setSignupError("Passwords do not match");
    }
    if (credentials.email && credentials.password) {
      const data = await signupApi(credentials);
      if (data) {
        return navigation.navigate("Login");
      } else {
        setSignupError("double check your credentials");
      }
    }
  };

  const handleInputChange = (value: string, target: string) => {
    setCredentials((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  useEffect(() => {
    // reset input on navigation
    const unsubscribe = navigation.addListener("focus", () => {
      setCredentials({
        email: "",
        password: "",
        repeatPassword: "",
      });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <View style={Styles.form}>
        <Text style={Styles.title}>Create Account</Text>
        <Input
          data-set="email"
          placeholder="example@email.com"
          autoCompleteType="email"
          onChangeText={(val) => handleInputChange(val, "email")}
          value={credentials.email}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          autoCompleteType="password"
          onChangeText={(val) => handleInputChange(val, "password")}
          value={credentials.password}
        />
        <Input
          placeholder="Repeat Password"
          secureTextEntry
          autoCompleteType="password"
          onChangeText={(val) => handleInputChange(val, "repeatPassword")}
          value={credentials.repeatPassword}
        />
        <Text style={Styles.error}>{signupError && signupError}</Text>
        <PrimaryButton
          title="SIGNUP"
          onPress={handleSignup}
          disabled={!credentials.email && !credentials.password}
        />
        <SecondaryButton
          title="already have an account"
          onPress={navigateToLogin}
        />
      </View>
    </View>
  );
}
