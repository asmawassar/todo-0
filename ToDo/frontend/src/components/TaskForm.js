import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import TaskService from "./TaskService";

class TaskForm extends Component {
  state = {
    title: "",
    description: "",
  };

  handleTitleChange = (value) => {
    this.setState({ title: value });
  };

  handleDescriptionChange = (value) => {
    this.setState({ description: value });
  };

  handleSubmit = () => {
    const task = {
      title: this.state.title,
      description: this.state.description,
    };

    TaskService.addTask(task)
      .then((task) => console.log(`Task "${task.title}" added successfully.`))
      .catch((error) => console.error(error));

    this.setState({ title: "", description: "" });
  };

  render() {
    const { title, description, date } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Task title"
          onChangeText={this.handleTitleChange}
          value={title}
        />
        <TextInput
          style={styles.input}
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          placeholder="Task description"
          onChangeText={this.handleDescriptionChange}
          value={description}
        />

        <Button title="Add task" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default TaskForm;
