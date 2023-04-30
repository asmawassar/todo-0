import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const Home = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const handleAddTask = () => {
    // Ajouter votre logique pour ajouter une tâche à votre liste
    console.log('New task: ', taskName);
    console.log('Date : ', taskDate);
    console.log('Time : ', taskDate.toLocaleTimeString());
    // Réinitialiser les champs du formulaire
    setTaskName('');
    setTaskDate(new Date());
  };

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date !== undefined) {
        setTaskDate(date);
    }
  };

  const handleTimeChange = (event, time) => {
    setShowTimePicker(false);
    if (time !== undefined) {
      setTaskDate(new Date(time.getHours(), time.getMinutes()));
    }
  };
  

  return (
    <View style={{flex:1}}>
        <Text style={styles.text}>Add Task</Text>
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Task title"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Task Description"
        value={taskDescription}
        onChangeText={(text) => setTaskDescription(text)}
      />
      <View >
        <Button title='Add date and time' onPress={() =>{ setShowDatePicker(true) , setShowTimePicker(true)}} />
        {showDatePicker && (
          <DateTimePicker
          style={{marginBottom: 20,  marginRight:30}}
          value={taskDate}
          mode="date"
          display="default"
          onChange={(event, date) => handleDateChange(event, date)}
        />
        
        
        )}
        {showTimePicker && (
          <DateTimePicker
          style={{marginBottom: 20,  marginRight:35}}
            value={taskDate}
            mode="time"
            display="default"
            onChange={(event, time) => handleTimeChange(event, time)}
          />
        )}
        
      </View>
      <TouchableOpacity style={{width: 250,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        backgroundColor:'#A0C3D2'}}
        onPress={handleAddTask} >
        <Text style={{fontSize:20, color:'white',fontWeight:'600'}}>
            ADD
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   marginTop:150,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    marginTop:20,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center',
    color:'#472183'
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  datePicker: {
    
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
  },
});

export default Home;
