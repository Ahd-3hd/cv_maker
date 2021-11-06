import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  animatedContainer: {
    justifyContent: "center",
  },
  cardContent: {
    margin: 10,
    padding: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderColor: "#00000000",
    borderWidth: 0,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 14,
    color: "#424242",
    fontFamily: "Poppins_600SemiBold",
  },
});
