import React from 'react';
import { View, Text, StyleSheet,TextInput, Button,Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Profile = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
  
  
  
    return (
      <View style={styles.root}>
        <Image
        style={styles.avatar}
        source={{
          uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png',
        }}
      />
      <Text style={styles.caption}>@username</Text>
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Username"
                    onChangeText={setUsername}
                    value={username}
                />   
        </View>
        <View style={styles.container}>
            <TextInput style={styles.input}  placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}/> 
        </View>
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Repeat Password"
                    secureTextEntry={true}
                    onChangeText={setRepeatPassword}
                    value={repeatPassword}/> 
        </View>
        <TouchableOpacity style={ styles.continueButton } >
        <Text style={{fontSize:18, color:'white',fontWeight:'600'}}>Update Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ { 
          width: 250,
          height: 50,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center', }} >
        <Text style={{fontSize:18, color:'red',fontWeight:'600'}}>Log out</Text>
        </TouchableOpacity>
      </View>

  );
};


const styles = StyleSheet.create({
    root:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        backgroundColor: '#F9FBFC'
      },
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 45,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        marginVertical: 8,
      },
      input: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 1,
      },
      continueButton: {
          backgroundColor: '#A0C3D2',
          width: 250,
          height: 50,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 20,
        },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 5,
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
       
        marginBottom:20
      },
  });
export default Profile ;