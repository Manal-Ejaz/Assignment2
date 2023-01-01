import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../pages/Register/register";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function Route() {
  const [UserLoginIn, setUserLoginIn] = useState("");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    checkIfAlreadyLogin();
  }, []);

  const checkIfAlreadyLogin = async () => {
    try {
      let check = await AsyncStorage.getItem("isLoggedIn");
      setUserLoginIn(check);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setUserLoginIn("");
    }
  };

  return Loading ? (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size={100} color="red" />
    </View>
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={UserLoginIn === "true" ? "Home" : "Login"}
      >
        <Stack.Screen
          options={{
            headerBackVisible: false,
            title: "Home",
            headerStyle: {
              backgroundColor: "maroon",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            title: "Login",
            headerStyle: {
              backgroundColor: "maroon",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            title: "Register",
            headerStyle: {
              backgroundColor: "maroon",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});