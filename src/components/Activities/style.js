import styled from "styled-components/native";
import { colors } from "../../style/colors";
import { Row } from '../standard';

export const Container = styled.View``;

export const Header = styled.View`
  margin-top: 16px;
  padding-left: 16px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;

export const Card = styled.View`
  margin: 15px;
  padding: 15px;
  border-radius: 8px;
  background: ${colors.lightGrey};
`;

export const CardHeader = styled(Row)`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
  font-size: 15px;
  margin-left: 15px;
  color: ${colors.white};
`;

export const Bold = styled.Text`
  font-weight: bold;
  color: ${colors.white};
`;

export const CardBody = styled.View``;

export const Username = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  color: ${colors.white};
`;

export const CardFooter = styled(Row)`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: ${colors.danger};
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 2px;
  height: 15px;
  margin: 0 15px;
  background: rgba(255, 255, 255, 0.2);
`;

export const Date = styled.Text`
  margin-left: 15px;
  color: ${colors.white};
`;

export const Actions = styled(Row)`
  flex-direction: row;
  align-items: center;
`;
export const Option = styled(Row)`
  flex-direction: row;
  align-items: center;
`;

export const OptionLabel = styled.Text`
  color: ${colors.white};
  margin: 0 15px 0 5px;
`;
