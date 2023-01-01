import { StyleSheet, View, TextInput, Pressable } from "react-native";

export function TextInputComponent(props) {

    const Set_Value_Text=(value)=>{
        props.setValueText(value)
    };
    const Set_Value=(value)=>{
        props.setValue(value)
    };
  return (
    <View>
      <TextInput
        secureTextEntry={props.bool}
        placeholder={props.placeholder}
        style={styles.textInput}
        onChangeText={(value)=>{Set_Value_Text(value)}}
        onChange={(value)=>{Set_Value(value)}}
        value={props.val}
        keyboardType={props.type}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    height: 50,
    margin: 12,
    borderWidth: 3,
    padding: 15,
    borderRadius: 10,
    borderColor: "maroon",
    backgroundColor: "white",
  },
});
