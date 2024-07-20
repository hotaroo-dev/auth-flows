import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

export default function ContinueButton({ login }) {
  const navigation = useNavigation();
  return (
    <Icon.Button
      name="arrow-right"
      color="#000"
      backgroundColor="#7dd3fc"
      borderRadius={9999}
      style={styles.btn}
      onPress={async () => {
        const { message } = await login();
        if (message === "Success") {
          navigation.navigate("profile");
        }
      }}
    >
      <Text style={styles.btnTitle}>Continue</Text>
    </Icon.Button>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  btnTitle: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
  },
});
