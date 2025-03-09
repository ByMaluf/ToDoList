import { Alert } from "react-native";

export default function validateTask(
  text: string,
  listTask: string[]
): boolean {
  const modifiedText = text.trim();
  if (!emptyText(modifiedText)) return false;
  if (!equalsTask(modifiedText, listTask)) return false;
  return true;
}

function emptyText(text: string): boolean {
  if (text === "") {
    Alert.alert("Erro ao adicionar", "O campo não pode estar vazio!");
    return false;
  }
  return true;
}

function equalsTask(text: string, listTask: string[]): boolean {
  if (listTask.includes(text)) {
    Alert.alert("Tarefa Duplicada", "Essa tarefa já foi adicionada!");
    return false;
  }
  return true;
}
