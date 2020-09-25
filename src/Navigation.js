import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PayButton from "./components/PayButton";

import HomeScreen from "./screens/Home";
import WalletScreen from "./screens/Wallet";
import PayScreen from "./screens/Pay";

import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";

import { colors } from './style/colors'

const Icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Wallet: {
    lib: Entypo,
    name: "wallet",
  },
  Settings: {
    lib: Ionicons,
    name: "md-settings",
  },
  Notifications: {
    lib: Ionicons,
    name: "ios-notifications",
  },
};

const Tab = createBottomTabNavigator();

const Navigation = () => (
  <Tab.Navigator
    screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        if (route.name === "Pay")
          return (
            <PayButton
              onPress={() => navigation.navigate("Pay")}
              focused={focused}
            />
          );
        const { lib: Icon, name } = Icons[route.name];
        return <Icon name={name} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      style: {
        backgroundColor: colors.dark,
        borderTopColor: colors.grey,
      },
      activeTintColor: colors.iconActive,
      inactiveTintColor: colors.iconInnactive,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Inicio",
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={WalletScreen}
      options={{
        title: "Carteira",
      }}
    />
    <Tab.Screen
      name="Pay"
      component={PayScreen}
      options={{
        title: "",
      }}
    />
    <Tab.Screen
      name="Settings"
      component={PayScreen}
      options={{
        title: "Configurações",
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={PayScreen}
      options={{
        title: "Notificações",
      }}
    />
  </Tab.Navigator>
);

export default Navigation;
