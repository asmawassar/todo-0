import { StatusBar } from "expo-status-bar";
import Task from "./src/components/Task";
import { StyleSheet, Text, View } from "react-native";
import Appbar from "./src/components/AppBar";
import TaskForm from "./src/components/TaskForm";
export default function App() {
  return (
    <View>
      <Appbar />
      <TaskForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
