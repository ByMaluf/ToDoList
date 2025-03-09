import { Alert } from "react-native";

export function validateTask(text: string, listTask: string[]): boolean {
  const modifiedText = text.trim();
  if (!emptyText(modifiedText)) return false;
  if (!equalsTask(modifiedText, listTask)) return false;
  return true;
}

export function onRemoveRegister(
  title: string,
  message: string,
  buttons: object[]
) {
  Alert.alert(`${title}`, `${message}`, buttons);
}

function emptyText(text: string): boolean {
  if (text === "") {
    Alert.alert("Erro ao adicionar", "O campo não pode estar vazio!");
    return false;
  }
  return true;
}

function equalsTask(text: string, listTask: string[]): boolean {
  const textLowerCase = text.toLowerCase();
  const listTaskLowerCase = listTask.some(
    (task) => task.toLowerCase() === textLowerCase
  );
  if (listTaskLowerCase) {
    Alert.alert("Tarefa Duplicada", "Essa tarefa já foi adicionada!");
    return false;
  }
  return true;
}
