import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  form: {
    flex: 1,
    padding: 50,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    color: "#424242",
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
  },
  error: {
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
    color: "#b3394b",
    marginTop: 10,
  },
});
