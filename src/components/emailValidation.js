import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleCheckEmail = async (text) => {
  let re = /\S+@\S+\.\S+/;
  let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  if (re.test(text) || regex.test(text)) {
    try {
      await AsyncStorage.setItem("Email", text);
    } catch (error) {
      console.log("email Validation", error);
    }
  }
};