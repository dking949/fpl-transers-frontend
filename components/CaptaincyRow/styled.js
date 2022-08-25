import styled from 'styled-components';
import Image from 'next/image';
import Card from '@mui/joy/Card';

export const CardStyled = styled(Card)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  align-items: center;
  text-align: center;
`;

export const PlayerImageStyled = styled(Image)`
  border-radius: 50%
`;
