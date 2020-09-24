import styled from 'styled-components/native';
import { colors } from '../../style/colors';

export const ScrollContainer = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 16
  },
}))`
  background: ${colors.lightGrey};
  height: 130px;
`;

export const Option = styled.TouchableOpacity`
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image`
`;

export const Label = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  margin-top: 8px;
  font-weight: bold;
`;
