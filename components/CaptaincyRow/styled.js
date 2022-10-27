import styled from 'styled-components';
import Image from 'next/image';
import Card from '@mui/joy/Card';

export const CardStyled = styled(Card)`
  display: grid;
  grid-template-columns: repeat(4, minmax(80px, 1fr));
  grid-column-gap: 20px;
  align-items: center;
  text-align: center;
  min-width: fit-content;
`;

export const UnorderedListStyled = styled.ul`
  text-align: left;
`;

export const PlayerImageStyled = styled(Image)`
  border-radius: 50%
`;
