import { useState, useMemo, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Container from "../components/common/container";
import Title from "../components/common/title";
import { getMyInfo } from "../api";
import RadioButton from "../components/common/radioButton";

export default function Profile() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });

  useEffect(() => {
    (async () => {
      const {
        data: { firstName, lastName, email, gender },
      } = await getMyInfo();
      setUser({ firstName, lastName, email, gender });
    })();
  }, []);

  return (
    <Container>
      <Title>Profile</Title>
      <View style={{ gap: 16, marginTop: 24 }}>
        <View style={{ flexDirection: "row", gap: 6 }}>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.inputStyle}
              defaultValue={user.firstName}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.inputStyle}
              defaultValue={user.lastName}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
        </View>
        <View style={styles.inputArea}>
          <Icon name="mail" size={16} />
          <TextInput
            style={styles.inputStyle}
            defaultValue={user.email}
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16 }}>Gender</Text>
          <View style={{ flexDirection: "row", gap: 16 }}>
            <View style={styles.radioContainer}>
              <RadioButton selected={user.gender === "Male"} />
              <Text style={styles.radioLabel}>Male</Text>
            </View>
            <View style={styles.radioContainer}>
              <RadioButton selected={user.gender === "Female"} />
              <Text style={styles.radioLabel}>Female</Text>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    flexGrow: 1,
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
  radioContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  radioLabel: {
    fontSize: 16,
  },
});
