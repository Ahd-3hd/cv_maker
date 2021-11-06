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
    flex: 0.5,
    margin: 10,
    padding: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 14,
    color: "#424242",
    fontFamily: "Poppins_600SemiBold",
  },
});
