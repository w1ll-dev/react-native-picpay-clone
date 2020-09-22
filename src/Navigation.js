import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PayButton from "./components/PayButton";

import HomeScreen from "./screens/Home";
import WalletScreen from "./screens/Wallet";
import PayScreen from "./screens/Pay";

import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";

const colors = {
  iconActive: "#fff",
  iconInnactive: "#92929c",
};
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
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        if (route.name === "Pay") return <PayButton />;
        const { lib: Icon, name } = Icons[route.name];
        return <Icon name={name} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      style: {
        backgroundColor: "#202020",
        borderTopColor: "#323232",
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
