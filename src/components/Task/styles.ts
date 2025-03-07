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
  },
  checkbox: {
    borderRadius: 12,
    borderColor: "#4EA8DE",
    borderWidth: 1,
    height: 24,
    width: 24,
  },
  text: {
    flex: 3,
  },
});
