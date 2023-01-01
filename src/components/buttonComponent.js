import { StyleSheet, View, Text, Pressable } from "react-native";

export function ButtonComponent(props) {

  return (
    <View>
      <Pressable
        style={styles.buttonView}
        onPress={props.func}
      >
        <Text style={styles.buttonText}>{props.text}</Text>
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
        width: 300,
        marginTop: 50,
        backgroundColor: "maroon",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
        alignSelf: "center",
        padding: 5,
      },
});
