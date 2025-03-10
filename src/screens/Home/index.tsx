import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { useEffect, useState } from "react";
import Task from "../../components/Task";
import { LinearGradient } from "expo-linear-gradient";
import { onRemoveRegister, validateTask } from "../../business/business";

export type Task = {
  text: string;
  isChecked: boolean;
};
export default function Home() {

  const [listTask, setListTask] = useState<Task[]>([]);
  const [text, setText] = useState('');
  const [InfoTasks, setInfoTasks] = useState({ create: 0, completed: 0 });

  function HandleAddTask() {
    if (validateTask(text, listTask)) {
      setListTask(prevState => ([{ text, isChecked: false }, ...prevState]));
      setText('');
    }
    setText('');
  }

  function HandleRemoveTask(text: string) {
    const buttons = [{
      text: 'Sim',
      onPress: () => {
        setListTask(prevState => prevState.filter(item => item.text !== text));
      }
    },
    {
      text: 'Não',
      style: 'cancel'
    }];
    onRemoveRegister('REMOVER TAREFA', 'Deseja realmente apagar essa tarefa?', buttons);
  }

  function handleTaskChecked(taskText: string) {
    setListTask(prevTasks =>
      prevTasks.map(task =>
        task.text === taskText ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }

  function handleClearTasks() {
    Alert.alert('LIMPAR TUDO', 'Tem certeza que deseja apagar suas tarefas?', [{
      text: 'Sim',
      onPress: () => {
        setListTask([]);
        setText('');
      }
    },
    {
      text: 'Não',
      style: 'cancel'
    }
    ])
  }

  useEffect(() => {
    const isChecked = listTask.filter((item) => item.isChecked)
    setInfoTasks({ create: listTask.length, completed: isChecked.length })
  }, [listTask]);

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

          <TouchableOpacity style={styles.button} onPress={HandleAddTask}>
            <Image source={require('../../../assets/plus.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerDetails}>
          <View style={styles.containerNumber}>
            <Text style={styles.createText}> Criadas</Text>
            <Text style={styles.number}>{InfoTasks.create}</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.containerClearAll} onPress={handleClearTasks}>
              <Text style={styles.clearAll}>Limpar Tudo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerNumber}>
            <Text style={styles.check}>Concluídas</Text>
            <Text style={styles.number}>{InfoTasks.completed}</Text>
          </View>
        </View>

        <FlatList
          data={listTask}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => <Task textTask={item.text} isChecked={item.isChecked} setIsChecked={() => handleTaskChecked(item.text)} onRemove={() => HandleRemoveTask(item.text)} />}
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
    </LinearGradient >
  );
}