import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddIngredient from "./addIngredient";
import styles from "../styles/login.style";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    // Implementează logica de autentificare aici
    console.log("Autentificare: ", email, password);
    // Navighează către ecranul "FirstPage" după autentificare
    navigation.navigate("AddIngredient");
  };
  return (

      <View style={styles.view}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.text}>E-mail</Text>
        <TextInput
          placeholder="Your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.textInput}
        />

        <Button title="Forgot password?"></Button>
    	<Button title="Login"
           onPress={handleLogin}
           style={{    alignItems: 'center',
           justifyContent: 'center',
           paddingVertical: 12,
           paddingHorizontal: 32,
           borderRadius: 4,
           elevation: 3,
           backgroundColor: 'black',}} />
        <View style={styles.container}>
            <Text>Don't have an account?</Text>
            <Button title="SignUp"></Button>
        </View>
        
      </View>
      
  )

};

export default LoginScreen;

