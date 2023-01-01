import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from 'react';

export default function Home() {

  const [Loading, setLoading] = useState(true);

  const [Username,setUsername]=useState("");

  const navigation = useNavigation();

  useEffect(() => {
    getUsername();
  }, []);

  const getUsername = async () => {
    try {
      let check = await AsyncStorage.getItem("Email");
      setUsername(check)
      console.log("home check",check);
      console.log(Username);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setUsername("");
    }
  };

  const removeDataInAsyncStorage = async () => {
    try {
      await AsyncStorage.removeItem("Email");
      await AsyncStorage.removeItem("isLoggedIn");
      navigation.navigate("Login");
    } catch (error) {
      console.log("error",error);
    }
  };


  return Loading ? (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size={100} color="red" />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {Username}</Text>
      <Pressable
        style={styles.buttonView}
        onPress={() => removeDataInAsyncStorage()}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonView: {
    width: "70%",
    marginTop: 50,
    backgroundColor: "maroon",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    padding: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 30,
    paddingBottom: 30,
    fontWeight: "bold",
  },
});