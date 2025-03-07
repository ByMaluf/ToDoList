import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import Checkbox from 'expo-checkbox';

type Props = {
  textTask: string;
}

export default function Task({ textTask }: Props) {
  return (
    <View style={styles.taskCard}>
      <Checkbox
        style={styles.checkbox}
      // value={isChecked}
      // onValueChange={setChecked}
      // color={isChecked ? '#4630EB' : undefined}
      />
      <Text style={styles.text}>{textTask}</Text>
      <Image source={require('../../../assets/trash.png')} />
    </View>
  );
}