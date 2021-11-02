import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProjectDocumentation from "./src/ProjectDocumentation";


const RootNavigation = () => {
  const Documentation = createStackNavigator();
  const DocumentationStack = () => (
    <Documentation.Navigator>
      <Documentation.Screen
        name="Documentation"
        component={ProjectDocumentation}
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
