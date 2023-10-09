import styled from 'styled-components';
import Card from '@mui/joy/Card';

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`;

export const CardStyled = styled(Card)`
  align-items: center;
  height: fit-content;
`;
