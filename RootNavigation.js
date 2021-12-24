import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProjectDocumentation from "./src/ProjectDocumentation";
import TextBoxPage from "./src/TextBoxPage";
import TextBoxPageNew from "./src/TextBoxPageNew";
import { StepsProvider } from "./src/StepsContext";

const RootNavigation = () => {
  const Documentation = createStackNavigator();
  const DocumentationStack = () => (
    <Documentation.Navigator>
      <Documentation.Screen
        name="Documentation"
        component={ProjectDocumentation}
        options={{ title: "Vanderbilt TOM App by Change++" }}
      />
      <Documentation.Screen
        name="TextBoxPageNew"
        component={TextBoxPageNew}
        options={{ headerLeft: null, title: "Vanderbilt TOM App by Change++", gestureEnabled: false }}
      />
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
