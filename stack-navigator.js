import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/login";
import Profile from "./screens/profile";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="login" component={Login}></Stack.Screen>
      <Stack.Screen name="profile" component={Profile}></Stack.Screen>
    </Stack.Navigator>
  );
}
