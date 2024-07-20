import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/login";
import Profile from "./screens/profile";
import { useNavigation } from "@react-navigation/core";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function StackNavigator() {
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        navigation.navigate("profile");
      } else {
        navigation.navigate("login");
      }
    })();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerTitle: "" }}>
      <Stack.Screen name="login" component={Login}></Stack.Screen>
      <Stack.Screen name="profile" component={Profile}></Stack.Screen>
    </Stack.Navigator>
  );
}
