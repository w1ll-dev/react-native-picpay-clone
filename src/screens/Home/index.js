import React from "react";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { colors } from "../../style/colors";

import {
  Balance,
  BalanceContainer,
  BalanceTitle,
  Header,
  Wrapper,
  ScrollContainer,
} from "./style";
import { Row } from "../../components/standard";
import { Sugestions } from "../../components/Sugestions";
import { Activities } from "../../components/Activities";
import { Tips } from "../../components/Tips";
import { Banner } from "../../components/Banner";
import ReturnCustomStausBar from "../../hooks/ReturnCustomStausBar";

const Home = () => (
    <Wrapper>
      <ReturnCustomStausBar
        barStyle={"light-content"}
        backgroundColor={colors.black}
      />
      <ScrollContainer>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color={colors.green}
          />
          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>0,00</Balance>
          </BalanceContainer>

          <Row>
            <Feather name="gift" size={30} color={colors.green} />
            <MaterialCommunityIcons
              name="ticket-percent"
              size={30}
              color={colors.green}
            />
          </Row>
        </Header>
        <Sugestions />
        <Activities />
        <Tips />
        <Banner />
      </ScrollContainer>
    </Wrapper>
);

export default Home;
