import styled from 'styled-components/native';
import { colors } from '../../style/colors';

export const ScrollContainer = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    alignItems: "center",
  },
}))`
  margin-top: 16px;
  margin-left: 15px;
`;

export const Option = styled.TouchableOpacity`
  background: ${({bckg}) => bckg};
  width: 100px;
  height: 150px;
  margin-right: 15px;
  padding: 5px;
  border-radius: 8px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${colors.white};
`;

export const Img = styled.Image`
  align-self: center;
`;