import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();
  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  const onSignInPressed = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.root}>
      <Image
        source={require("../../assets/ToDo3.png")}
        style={{
          justifyContent: "center",
          width: 200,
          height: 200,
          marginTop: 10,
        }}
        reseizeMode="contain"
      />
      <Text
        style={{
          fontSize: 30,
          marginBottom: 50,
          fontWeight: "bold",
          color: "#37306B",
        }}
      >
        ToDo app
      </Text>

      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Username" />
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={onSignInPressed}>
        <Text style={{ fontSize: 18, color: "white", fontWeight: "600" }}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#F9FBFC",
          alignItems: "center",
          justifyContent: "center",
          margin: 20,
        }}
        onPress={onSignUpPressed}
      >
        <Text style={{ color: "gray", fontWeight: "bold" }}>
          Don't have an account? Register now
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
export default SignIn;
