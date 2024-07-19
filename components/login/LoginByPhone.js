import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import ContinueButton from "../common/continueButton";

export default function LoginByPhone() {
  const [hidePassword, setHidePassword] = useState(true);
  const toggleShowPassword = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={{ gap: 16 }}>
        <View style={styles.inputArea}>
          <Text>🇰🇭 +855</Text>
          <TextInput
            style={{
              ...styles.inputStyle,
              borderLeftWidth: 1,
              borderColor: "#e5e5e5",
              marginLeft: 10,
            }}
            placeholder="XXX XXX XXX XXX"
          />
        </View>
        <View style={styles.inputArea}>
          <Icon name="lock" size={16} />
          <TextInput
            style={styles.inputStyle}
            secureTextEntry={hidePassword}
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
      <ContinueButton />
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
