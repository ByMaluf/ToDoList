import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskCard: {
    flexDirection: "row",
    backgroundColor: "#262626",
    borderColor: "#333333",
    borderRadius: 8,
    height: 64,
    borderWidth: 1,
    padding: 12,
    alignItems: "center",
    marginTop: 20,
    gap: 8,
    width: "100%",
    textAlign: "center",
    justifyContent: "space-between",
  },
  checkbox: {
    borderRadius: 12,
    borderColor: "#4EA8DE",
    borderWidth: 1,
    height: 17,
    width: 17,
  },
  text: {
    color: "#F2F2F2",
    fontSize: 14,
    fontFamily: "InterRegular",
    lineHeight: 20,
    flex: 1,
    flexShrink: 1,
  },
});
