import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Page1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Page 1</Text>
      <Button
        title="Back to Home"
        onPress={() => router.back()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
});
