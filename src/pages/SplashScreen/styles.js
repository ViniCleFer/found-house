import styled from 'styled-components/native';

export const SectionView = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundDark};
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const SectionImage = styled.Image`
  height: 150px;
  width: 150px;
`;
