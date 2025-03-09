import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Checkbox from 'expo-checkbox';

type Props = {
  textTask: string;
  isChecked: boolean;
  onRemove: () => void;
  setIsChecked: (value: boolean) => void;
}

export default function Task({ textTask, onRemove, isChecked, setIsChecked }: Props) {
  return (
    <View style={styles.taskCard}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? '#5E60CE' : undefined}
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