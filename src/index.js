import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
