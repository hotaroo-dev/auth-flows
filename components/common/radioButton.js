import { View } from "react-native";

export default function RadioButton(props) {
  return (
    <View
      style={[
        {
          height: 20,
          width: 20,
          borderRadius: 10,
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
        },
        props.style,
        props.selected
          ? { borderColor: "#7dd3fc" }
          : { borderColor: "#e5e5e5" },
      ]}
    >
      {props.selected ? (
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 6,
            backgroundColor: "#7dd3fc",
          }}
        />
      ) : null}
    </View>
  );
}
