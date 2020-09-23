import styled from 'styled-components/native';
import { colors } from '../../style/colors';

export const ScrollContainer = styled.ScrollView.attrs(() => ({
  horizontal: true,
}))`
  background: ${colors.lightGrey};
  height: 130px;
`;