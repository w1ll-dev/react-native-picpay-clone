import React from "react";
import avatarImg from "../../../assets/images/avatar.png";
import { Feather, AntDesign, EvilIcons } from "@expo/vector-icons";
import {
  Container,
  Title,
  Header,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  Username,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from "./style";
import { colors } from "../../style/colors";

export const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatarImg} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@will</Bold>
          </Description>
          <Bold />
        </CardHeader>
        <CardBody>
          <Username>Will Marcio</Username>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 150,52</Value>
            <Divider />
            <Feather name="lock" color={colors.white} />
            <Date>Há 1 ano</Date>
          </Details>

          <Actions>
            <Option>
              <EvilIcons name="comment" size={20} color={colors.white} />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={14} color={colors.white} />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};
