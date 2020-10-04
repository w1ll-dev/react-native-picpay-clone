import styled from "styled-components/native";
import { colors } from "../../style/colors";

export const Wrapper = styled.SafeAreaView`
  background: ${colors.black};
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View`
  align-items: center;
`;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);

`;

export const Balance = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  font-weight: bold;
`;

export const ScrollContainer = styled.ScrollView``;