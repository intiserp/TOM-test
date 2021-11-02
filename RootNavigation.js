import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProjectDocumentation from "./src/ProjectDocumentation";
import TextBoxPage from "./src/TextBoxPage";
import { StepsProvider } from "./src/StepsContext";

const RootNavigation = () => {
  const Documentation = createStackNavigator();
  const DocumentationStack = () => (
    <Documentation.Navigator>
      <Documentation.Screen
        name="Documentation"
        component={ProjectDocumentation}
      />
      <Documentation.Screen name="TextBoxPage" component={TextBoxPage} />
    </Documentation.Navigator>
  );

  return (
    <NavigationContainer>
      <StepsProvider>
        <DocumentationStack />
      </StepsProvider>
    </NavigationContainer>
  );
};

export default RootNavigation;
