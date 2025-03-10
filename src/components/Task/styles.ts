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
    borderWidth: 2,
    backgroundColor: "transparent",
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#F2F2F2",
    fontSize: 17,
    fontFamily: "InterRegular",
    lineHeight: 20,
    flex: 1,
    flexShrink: 1,
  },
  taskCompleted: {
    color: "#808080",
    textDecorationLine: "line-through",
  },
});
