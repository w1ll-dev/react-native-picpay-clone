import styled from "styled-components/native";
import { colors } from "../../style/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Row } from "../../components/standard";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: ${colors.black};
`;

export const Info = styled.Text`
  color: ${colors.white};
  font-size: 14px;
`;

export const Header = styled(LinearGradient).attrs(({balance}) => ({
  colors: balance ? colors.payContainerGradient : colors.noUseBalanceGradient,
}))`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 100;
`;

export const Label = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 100;
  margin-left: 5px;
`;

export const Value = styled.Text`
  color: ${colors.white};
  font-size: 38px;
  font-family: "sans-serif-thin";
  font-weight: 200;
`;

export const Bold = styled.Text`
  color: ${colors.white};
  /* font-family: 'sans-serif-bold'; */
  font-weight: bold;
`;

export const BalanceContainer = styled(Row)`
  align-items: center;
`;

export const EyeButton = styled.TouchableOpacity`
  padding-left: 10px;
`;

export const Actions = styled(Row)``;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid ${colors.white};
  background: transparent;
  margin: 50px 10px 0px 10px;
`;

export const UseBalance = styled(Row)`
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  background: ${colors.dark};
  height: 45px;
`;

export const UseBalanceText = styled.Text`
  color: ${colors.white};
`;

export const CustomSwitch = styled.Switch.attrs(({ value, onValueChange }) => ({
  value: value,
  onValueChange: onValueChange,
  trackColor: { false: colors.black, true: colors.green },
  thumbColor: colors.white,
}))``;

export const PaymentMethods = styled.View`
  margin: 15px 10px;
`;
export const PaymentMethodsTitle = styled.Text`
  color: ${colors.grey};
  font-size: 12px;
`;
export const Card = styled.View`
  flex-direction: row;
  background: ${colors.dark};
  padding: 10px 15px;
  margin-top: 5px;
  border-radius: 5px;
`;
export const CardDetails = styled.View`
  flex: 4;
`;
export const DetailsTitle = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;
export const DetailsContent = styled.Text`
  margin-top: 12px;
  color: ${colors.white};
  font-size: 14px;
`;
export const DetailsFooterLabel = styled.Text`
  color: ${colors.green};
  font-size: 17px;
  margin-left: 10px;
`;
export const DetailsFooter = styled.TouchableOpacity`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  border: 1px solid ${colors.white};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.Image`
  margin-top: 20px;
  width: 60px;
  height: 40px;
`;
export const CardImageContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const UseTicket = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const UseTicketLabel = styled.Text`
  font-size: 15px;
  color: ${colors.green};
  margin-left: 5px;
  text-decoration-line: underline;
`;