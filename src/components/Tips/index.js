import React from "react";
import { ScrollContainer, Option, Title, Img } from "./style.js";
import { colors } from "../../style/colors";

import Img8 from "../../../assets/images/08.png";
import Img9 from "../../../assets/images/09.png";
import Img10 from "../../../assets/images/10.png";
import Img11 from "../../../assets/images/11.png";
import Img12 from "../../../assets/images/12.png";
import Img13 from "../../../assets/images/13.png";

const items = [
  {
    key: String(Math.random()),
    img: Img8,
    title: "Pague suas contas sem sair de casa.",
  },
  {
    key: String(Math.random()),
    img: Img9,
    title: "Pague suas contas sem sair de casa.",
  },
  {
    key: String(Math.random()),
    img: Img10,
    title: "Pague suas contas sem sair de casa.",
  },
  {
    key: String(Math.random()),
    img: Img11,
    title: "Pague suas contas sem sair de casa.",
  },
  {
    key: String(Math.random()),
    img: Img12,
    title: "Pague suas contas sem sair de casa.",
  },
  {
    key: String(Math.random()),
    img: Img13,
    title: "Pague suas contas sem sair de casa.",
  },
];
export const Tips = () => (
  <ScrollContainer>
    {items.map((item, index) => (
      <Option key={item.key} bckg={colors.listCardsColor[index]}>
        <Title>{item.title}</Title>
        <Img source={item.img} />
      </Option>
    ))}
  </ScrollContainer>
);
