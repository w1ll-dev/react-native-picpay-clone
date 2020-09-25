import styled from 'styled-components/native';
import { colors } from '../../style/colors';

export const Container = styled.View`
  margin: 15px;
  background: ${colors.bannerColor};
  border-radius: 15px;
  flex-direction: row;
  padding: 15px;
  align-items: center;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-top: 15px;
`;