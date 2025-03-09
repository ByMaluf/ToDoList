import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Checkbox from 'expo-checkbox';

type Props = {
  textTask: string;
  onRemove: () => void;
}

export default function Task({ textTask, onRemove }: Props) {
  return (
    <View style={styles.taskCard}>
      <Checkbox
        style={styles.checkbox}
      // value={isChecked}
      // onValueChange={setChecked}
      // color={isChecked ? '#4630EB' : undefined}
      />
      <Text
        style={styles.text}
        numberOfLines={2}
      >
        {textTask}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Image source={require('../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  );
}