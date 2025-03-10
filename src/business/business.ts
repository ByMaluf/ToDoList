import { Alert } from "react-native";
import { Task } from "../screens/Home";

export function validateTask(text: string, listTask: Task[]): boolean {
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

function equalsTask(text: string, listTask: Task[]): boolean {
  const textLowerCase = text.toLowerCase();
  const listTaskLowerCase = listTask.some(
    (task) => task.text.toLowerCase() === textLowerCase
  );
  if (listTaskLowerCase) {
    Alert.alert("Tarefa Duplicada", "Essa tarefa já foi adicionada!");
    return false;
  }
  return true;
}
