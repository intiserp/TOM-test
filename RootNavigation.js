import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const RootNavigation = () => {
  const Documentation = createStackNavigator();
  const DocumentationStack = () => (
    <Documentation.Navigator>
      <Documentation.Screen
        name="Documentation"
        component={DocumentationScreen}
      />
    </Documentation.Navigator>
  );

  return (
    <NavigationContainer>
      <DocumentationStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
