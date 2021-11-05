import { Platform } from "react-native";
const { OS } = Platform;

const ENV = {
  DOMAIN: OS === "web" ? "localhost" : "10.0.2.2",
};

export default ENV;
