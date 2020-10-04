import React, { useState } from "react";
import creditCardImage from "../../../assets/images/credit-card.png";
import ReturnCustomStausBar from "../../hooks/ReturnCustomStausBar";
import { colors } from "../../style/colors";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import {
  Header,
  Wrapper,
  Info,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Actions,
  Action,
  Label,
  UseBalance,
  UseBalanceText,
  CustomSwitch,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  DetailsTitle,
  DetailsContent,
  DetailsFooter,
  CardImage,
  CardImageContainer,
  IconContainer,
  DetailsFooterLabel,
  UseTicket,
  UseTicketLabel,
} from "./style";

const Wallet = () => {
  const [balance, setBalance] = useState(false);
  const [showBalance, setShowBalance] = useState(true);
  return (
    <Wrapper>
      <ReturnCustomStausBar
        barStyle={"light-content"}
        backgroundColor={
          balance ? colors.walletStatusColor : colors.noBalanceStatusColor
        }
      />
      <Header balance={balance}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>{showBalance ? "0,00" : "----"}</Bold>
            </Value>
            <EyeButton onPress={() => setShowBalance(!showBalance)}>
              <Feather
                name={showBalance ? "eye" : "eye-off"}
                size={24}
                color={colors.white}
              />
            </EyeButton>
          </BalanceContainer>
          <Info>O seu saldo está rendendo 100% do cdi</Info>
          <Actions>
            <Action>
              <MaterialCommunityIcons
                name="cash"
                size={26}
                color={colors.white}
              />
              <Label>Adicionar</Label>
            </Action>
            <Action>
              <FontAwesome name="bank" size={18} color={colors.white} />
              <Label>Retirar</Label>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
      <UseBalance>
        <UseBalanceText>Usar saldo ao pagar.</UseBalanceText>
        <CustomSwitch value={balance} onValueChange={setBalance} />
      </UseBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>FORMAS DE PAGAMENTO.</PaymentMethodsTitle>
        <Card>
          <CardDetails>
            <DetailsTitle>{`Cadastre seu cartão ${"\n"}de crédito`}</DetailsTitle>
            <DetailsContent>
              {`Cadastre seu cartão de crédito para poder ${"\n"}fazer pagamentos mesmo quando não${"\n"}tiver saldo no seu PicPay.`}
            </DetailsContent>
            <DetailsFooter>
              <IconContainer>
                <AntDesign name="plus" size={25} color={colors.green} />
              </IconContainer>
              <DetailsFooterLabel>
                Adicionar cartão de crédito
              </DetailsFooterLabel>
            </DetailsFooter>
          </CardDetails>
          <CardImageContainer>
            <CardImage source={creditCardImage} />
          </CardImageContainer>
        </Card>
        <UseTicket>
          <MaterialCommunityIcons
            name="ticket-outline"
            size={20}
            color={colors.green}
          />
          <UseTicketLabel>Usar código promocional.</UseTicketLabel>
        </UseTicket>
      </PaymentMethods>
    </Wrapper>
  );
};

export default Wallet;
