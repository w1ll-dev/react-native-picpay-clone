import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from "./screens/Pay";

const Tab = createBottomTabNavigator();

const Navigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Wallet" component={WalletScreen}/>
    <Tab.Screen name="Pay" component={PayScreen}/>
  </Tab.Navigator>
);

export default Navigation;
