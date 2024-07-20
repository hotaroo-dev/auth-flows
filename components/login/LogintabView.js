import { useState } from "react";
import { useWindowDimensions, Text, View } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import LoginWithEmail from "./LoginWithEmail";
import LoginWithPhone from "./LoginWithPhone";

const renderScene = SceneMap({
  email: LoginWithEmail,
  phone: LoginWithPhone,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    renderLabel={({ route }) => (
      <Text style={{ color: "#000", fontSize: 16 }}>{route.title}</Text>
    )}
    indicatorStyle={{ backgroundColor: "#7dd3fc" }}
    indicatorContainerStyle={{
      borderBottomWidth: 1,
      borderBottomColor: "#e5e7eb",
    }}
    style={{ backgroundColor: "transparent" }}
  />
);

export default function LoginTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "email", title: "Email" },
    { key: "phone", title: "Phone" },
  ]);

  return (
    <TabView
      style={{ marginTop: 32 }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
