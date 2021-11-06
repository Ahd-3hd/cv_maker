import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
    paddingVertical: 50,
  },
  title: {
    fontSize: 25,
    color: "#424242",
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
  },
  description: {
    fontSize: 12,
    color: "#424242",
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    marginVertical: 20,
  },
  progressBar: {
    alignSelf: "center",
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
});
