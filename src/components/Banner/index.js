import React from "react";
import { Container, Details, Image, Title, Description } from "./style";
import Img13 from "../../../assets/images/13.png";

export const Banner = () => (
  <Container>
    <Details>
      <Title>Cobre um amigo</Title>
      <Description>
        Mantenha suas parcerias em dia e use o picpay para fazer cobranças.
      </Description>
    </Details>
    <Image source={Img13} />
  </Container>
);
