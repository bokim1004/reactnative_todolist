import {StatusBar} from "expo-status-bar";

import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";

export default function ThingsTodo() {
  //   const todos = useSelector((state: RootState) => state.todos);
  //   const dispatch = useDispatch();

  //   const onToggle = (id: number) => {
  //     dispatch(toggleTodo(id));
  //   };

  //   const onRemove = (id: number) => {
  //     dispatch(removeTodo(id));
  //   };

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: true},
    ]);
  };

  // 각 아이템의 고유 id를 받아와서 해당 아이디를 가진 아이템 객체만 제외하고 새로운 배열을 만드는 함수
  const onRemove = (id) => (e) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //onToggle 함수는 아이템의 id를 받아와서 해당하는 아이템의 checked 속성값을 반대로 변경해준다
  const onToggle = (id) => (e) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello ToDoList</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D198F9",
  },
  appTitle: {
    color: "#fff",
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: "300",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
