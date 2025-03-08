import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { useEffect, useState } from "react";
import Task from "../../components/Task";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {

  const [listTask, setListTask] = useState<string[]>([]);
  const [text, setText] = useState('');
  const [checkbox, setCheckBox] = useState(false);

  function handleAddTask() {
    console.log('texto antes de adicionar: ', text)
    if (!text) {
      console.log('texto errado: ', text)
      Alert.alert('ATENÇÃO', 'Valor no campo requirido inválido!');
      return;
    }
    setListTask(prevState => ([text.trim(), ...prevState]));
    setText('');
  }

  { console.log("Lista de tarefas renderizada:", listTask) }

  return (
    <LinearGradient
      colors={["#0D0D0D", "#1A1A1A"]}
      style={styles.gradient}
      dither={false}
    >
      <View style={styles.containerForm}>

        <Image source={require('../../../assets/Logo.png')} style={styles.logo} />

        <View style={styles.form}>
          <TextInput
            placeholder="Título da Task"
            placeholderTextColor="#6B6B6B"
            style={styles.input}
            value={text}
            onChangeText={setText}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Image source={require('../../../assets/plus.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.taskDetails}>
          <Text style={styles.create}>Criadas</Text>
          <Text style={styles.check}>Concluídas</Text>
        </View>

        <FlatList
          data={listTask}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => <Task textTask={item} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.containerEmpty}>
              <Image source={require("../../../assets/List.png")} />
              <Text style={[styles.text, styles.textBold]}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View >
    </LinearGradient>
  );
}