import { Alert } from "react-native";

function validationText(text: string): boolean {
  if (text === "") {
    Alert.alert("ATENÇÃO", "");
    return false;
  }
  return true;
}
