import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
const SignUp = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const onSignInPressed = () => {
    const data = {
      username: username,
      email: Email,
      password: password,
    };
    if (password == repeatPassword) {
      fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else console.log("passworderror");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={Email}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Repeat Password"
          secureTextEntry={true}
          onChangeText={setRepeatPassword}
          value={repeatPassword}
        />
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={onSignInPressed}>
        <Text style={{ fontSize: 18, color: "white", fontWeight: "600" }}>
          Register
        </Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        By registering, you confirm that you accept our{" "}
        <Text style={styles.link}>Terms of Use</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#F9FBFC",
          alignItems: "center",
          justifyContent: "center",
          margin: 20,
        }}
      >
        <Text style={{ color: "gray", fontWeight: "bold" }}>
          Already have an account? Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F9FBFC",
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#37306B",
  },
  container: {
    backgroundColor: "white",
    width: "100%",
    height: 45,
    borderColor: "#e8e8e8",
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
    backgroundColor: "#E06469",
    width: 250,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  text: {
    color: "gray",
    textAlign: "center",
  },
  link: {
    color: "#FBD075",
  },
});
export default SignUp;
