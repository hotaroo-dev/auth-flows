import { useState, useMemo } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import Icon from "react-native-vector-icons/Octicons";
import Container from "../components/common/container";
import Title from "../components/common/title";

export default function Profile() {
  const [selectedId, setSelectedId] = useState();
  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Male",
        vale: "male",
        color: "#7dd3fc",
        borderColor: "#e5e5e5",
      },
      {
        id: "2",
        label: "Female",
        value: "famale",
        color: "#7dd3fc",
        borderColor: "#e5e5e5",
      },
    ],
    [],
  );

  return (
    <Container>
      <Title>Profile</Title>
      <View style={{ gap: 16, marginTop: 24 }}>
        <View style={{ flexDirection: "row", gap: 6 }}>
          <View style={styles.inputArea}>
            <TextInput style={styles.inputStyle} />
          </View>
          <View style={styles.inputArea}>
            <TextInput style={styles.inputStyle} />
          </View>
        </View>
        <View style={styles.inputArea}>
          <Icon name="mail" size={16} />
          <TextInput style={styles.inputStyle} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16 }}>Gender</Text>
          <RadioGroup
            layout="row"
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
          />
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
});
