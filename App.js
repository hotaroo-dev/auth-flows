import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./stack-navigator";
import "./gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
