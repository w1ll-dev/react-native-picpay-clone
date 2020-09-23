import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";
import { StatusBar } from "react-native";
import { colors } from "./style/colors";

const App = () => (
  <>
    <StatusBar barStyle={"light-content"} backgroundColor={colors.black} />
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  </>
);

export default App;
