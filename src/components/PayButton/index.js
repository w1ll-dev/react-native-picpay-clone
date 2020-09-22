import React from "react";

import { Button, Label } from "./style";

import { MaterialIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { colors } from "../../style/colors";

const { payButtonActiveGradient, payButtonInactiveGradient } = colors;

const PayButton = ({ onPress, focused }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Button
      colors={focused ? payButtonActiveGradient : payButtonInactiveGradient}
      start={[1, 0.2]}
    >
      <MaterialIcons
        name={"attach-money"}
        size={30}
        color={focused ? colors.white : colors.black}
      />
      <Label focused={focused}>Pagar</Label>
    </Button>
  </TouchableWithoutFeedback>
);

export default PayButton;
