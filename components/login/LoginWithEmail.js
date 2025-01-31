import { useRef, useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import ContinueButton from "../common/continueButton";
import { login } from "../../api";

export default function LoginByPhone() {
  const [hidePassword, setHidePassword] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const toggleShowPassword = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={{ gap: 16 }}>
        <View style={styles.inputArea}>
          <Icon name="mail" size={16} />
          <TextInput
            ref={emailRef}
            style={styles.inputStyle}
            onChangeText={(text) => {
              emailRef.current.value = text;
            }}
            placeholder="Email"
          />
        </View>
        <View style={styles.inputArea}>
          <Icon name="lock" size={16} />
          <TextInput
            ref={passwordRef}
            style={styles.inputStyle}
            secureTextEntry={hidePassword}
            onChangeText={(text) => {
              passwordRef.current.value = text;
            }}
            placeholder="Password"
          />
          {hidePassword ? (
            <Icon name="eye" size={16} onPress={toggleShowPassword} />
          ) : (
            <Icon name="eye-closed" size={16} onPress={toggleShowPassword} />
          )}
        </View>
      </View>
      <View style={{ marginVertical: 16 }}>
        <Button title="Forget password" color="#7dd3fc" />
      </View>
      <ContinueButton
        login={() =>
          login({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    backgroundColor: "#f1f5f9",
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 16,
    paddingLeft: 10,
  },
});
