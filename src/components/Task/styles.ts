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
    borderRadius: 12, // 🔥 Mantém a borda arredondada, mas não exagerada
    borderColor: "#4EA8DE", // 🔥 Cor da borda quando não marcado
    borderWidth: 2, // 🔥 Deixa a borda mais visível
    backgroundColor: "transparent", // 🔥 Evita que fique com fundo branco
    height: 22, // 🔥 Deixa um pouco maior
    width: 22,
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
});
