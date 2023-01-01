import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { handleCheckEmail } from "../../components/emailValidation";
import { TextInputComponent } from "../../components/textComponent";
import { ButtonComponent } from "../../components/buttonComponent";

export default function Login() {
  const [EmailField, setEmailField] = useState("");
  const [Password, setPassword] = useState("");

  const navigation = useNavigation();

  const saveDataInAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "true");
      let Email = await AsyncStorage.getItem("Email");

      if (Email !== null) {
        if (Password !== "") {
          if (Password.length < 5)
            alert("Password must be at least 5 characters");
          else {
            navigation.navigate("Home");

            setPassword("");
            setEmailField("");
          }
        } else alert("Please enter your Password!");
      } else {
        alert("Please enter your Correct Email!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>

      <TextInputComponent
        placeholder="Email"
        setValueText={(text) => handleCheckEmail(text)}
        setValue={(text) => setEmailField(text)}
        val={EmailField}
      />

      <TextInputComponent
        bool={true}
        placeholder="Password"
        setValueText={(text) => setPassword(text)}
        setValue={(text) => setPassword(text)}
        val={Password}
      />

      <ButtonComponent func={() => saveDataInAsyncStorage()} text={"Login"} />

      <View style={styles.endLine}>
        <Text style={styles.endLineText}>Don't Have Account? </Text>

        <Pressable
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={{ color: "maroon" }}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    paddingBottom: 30,
    fontWeight: "bold",
  },
  endLine:{
    flexDirection: "row", 
    marginTop: 40
  },
  endLineText:{
    color: "white",
  }
});
