import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { handleCheckEmail } from "../../components/emailValidation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInputComponent } from "../../components/textComponent";
import { ButtonComponent } from "../../components/buttonComponent";

export default function Register() {
  const [EmailField, setEmailField] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");

  const navigation = useNavigation();

  const ValidateData = async () => {
    try {
      let Email = await AsyncStorage.getItem("Email");

      if (Name !== "") {
        if (Email !== null) {
          if (Phone !== "") {
            if (Phone.length === 11) {
              if (Password !== "") {
                if (Password.length < 5)
                  alert("Password must be at least 5 characters");
                else {
                  navigation.navigate("Login");

                  setEmailField("");
                  setPassword("");
                  setName("");
                  setPhone("");
                }
              } else alert("Please enter your Password!");
            } else alert("Password must be at 11 characters");
          } else alert("Please enter your Phone!");
        } else {
          alert("Please enter your Correct Email!");
        }
      } else {
        alert("Please enter your Name!");
      }
    } catch (error) {
      console.log("ValidateData", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>

      <TextInputComponent
        placeholder="Name"
        setValueText={(text) => setName(text)}
        setValue={(text) => setName(text)}
        val={Name}
      />

      <TextInputComponent
        placeholder="Email"
        setValueText={(text) => handleCheckEmail(text)}
        setValue={(text) => setEmailField(text)}
        val={EmailField}
      />

      <TextInputComponent
        placeholder="Phone"
        setValueText={(text) => setPhone(text)}
        setValue={(text) => setPhone(text)}
        val={Phone}
        type="phone-pad"
      />

      <TextInputComponent
        bool={true}
        placeholder="Password"
        setValueText={(text) => setPassword(text)}
        setValue={(text) => setPassword(text)}
        val={Password}
      />

      <ButtonComponent func={() => ValidateData()} text={"Register"} />

      <View style={styles.endLine}>
        <Text style={styles.endLineText}>Move back to </Text>

        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "maroon" }}>Login</Text>
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
