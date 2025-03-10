import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  containerForm: {
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: "center",
    width: "100%",
  },
  logo: {
    marginTop: 70,
    marginBottom: 40,
  },
  input: {
    backgroundColor: "#262626",
    color: "#F2F2F2",
    padding: 16,
    height: 54,
    fontSize: 16,
    flex: 1,
    borderRadius: 6,
    borderWidth: 1,
    borderBottomColor: "#0D0D0D",
  },
  button: {
    backgroundColor: "#1E6F9F",
    padding: 18,
    borderRadius: 6,
    height: 52,
    width: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  containerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 32,
    borderColor: "#333333",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  containerNumber: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  createText: {
    color: "#4EA8DE",
    fontFamily: "InterRegular",
    fontWeight: "bold",
    fontSize: 14,
  },
  number: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#333333",
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  check: {
    color: "#8284FA",
    fontFamily: "InterRegular",
    fontWeight: "bold",
    fontSize: 14,
  },
  containerClearAll: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: "#341933",
    borderColor: "#333333",
    borderWidth: 0.8,
    borderRadius: 6,
  },
  clearAll: {
    color: "#FFF",
  },
  containerEmpty: {
    alignItems: "center",
    marginTop: 58,
  },
  text: {
    fontSize: 14,
    color: "#808080",
  },
  textBold: {
    marginTop: 16,
    fontWeight: "bold",
  },
});
