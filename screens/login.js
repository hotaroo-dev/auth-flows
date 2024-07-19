import { StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Container from "../components/common/container";
import Title from "../components/common/title";
import LoginTabView from "../components/login/tabView";

export default function Login({ navigation }) {
  return (
    <Container>
      <Title>Login</Title>
      <Icon.Button
        name="arrow-right"
        color="#000"
        backgroundColor="#7dd3fc"
        borderRadius={9999}
        style={styles.btn}
        onPress={() => navigation.navigate("profile")}
      >
        <Text style={styles.btnTitle}>Continue</Text>
      </Icon.Button>
    </Container>
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
