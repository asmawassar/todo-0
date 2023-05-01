import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Today = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <View>
      {tasks.map((task) => (
        <View>
          <Text key={task.id}>{task.title}</Text>
          <Text style={styles.description} key={task.id}>
            {task.description}
          </Text>
          <Text style={styles.date} key={task.id}>
            {task.due_date}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
});

export default Today;
