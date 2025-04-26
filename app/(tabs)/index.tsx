import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [screen, setScreen] = useState<"login" | "Home" | "Page1">("login");
  const [username, setUsername] = useState("Lulu Amalia");
  const [password, setPassword] = useState("022120");

  const data = [
    { name: "Lulu Cantik", age: 20, country: "Jepang" },
    { name: "Somad", age: 16, country: "Korea" },
    { name: "Naufal", age: 13, country: "China" },
    { name: "Ramadhan", age: 5, country: "Jepang" },
    { name: "Andre Ardiawan", age: 18, country: "Singapura" },
  ];

  const handleLogin = () => {
    setScreen("Home");
  };

  if (screen === "Home") {
    return (
      <View style={styles.homeContainer}>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" }}
          style={styles.logo}
        />
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.age}>{item.age}</Text>
              <Text style={styles.country}>{item.country}</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
        <TouchableOpacity onPress={() => setScreen("Page1")} style={styles.button}>
          <Text style={styles.buttonText}>Go to Page 1</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (screen === "Page1") {
    return (
      <View style={styles.page1Container}>
        <Text style={styles.page1Text}>Welcome to Page 1!</Text>
        <TouchableOpacity onPress={() => setScreen("Home")} style={styles.button}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#ADD8E6", "#87CEEB"]}
      style={styles.gradientContainer}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerButton: {
    marginTop: 20,
  },
  registerText: {
    color: "#007bff",
    fontSize: 16,
  },
  homeContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2c3e50",
    paddingTop: 50,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f4b393",
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    width: 250,
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    marginBottom: 5,
  },
  age: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
  },
  country: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  page1Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#87CEEB",
  },
  page1Text: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
});
