import React, { useState } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/InputField";
import { login } from "../../redux/slices/userSlice/actions";
import Styles from "./index.style";
import { RootState } from "../../redux/store";

export default function LoginScreen() {
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
        <CustomButton
          title="Login"
          onPress={handleLogin}
          disabled={!credentials.email && !credentials.password}
        />
      </View>
    </View>
  );
}
