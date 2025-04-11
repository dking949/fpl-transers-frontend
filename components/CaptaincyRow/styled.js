import styled from "styled-components";
import Image from "next/image";
import Card from "@mui/joy/Card";

export const CardStyled = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: fit-content;
  width: 100%;

  @media only screen and (max-width: 900px) {
    display: flex;
  }
`;

export const UnorderedListStyled = styled.ul`
  text-align: left;
`;

export const PlayerImageStyled = styled(Image)`
  border-radius: 50%;
`;
