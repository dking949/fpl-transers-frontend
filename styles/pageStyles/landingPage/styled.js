import Link from "next/link";
import styled from "styled-components";
import { Button, Input } from "@mui/joy";

export const InputContainerStyled = styled.div`
  display: flex;
`;

export const FormStyled = styled.form`
  display: inline-flex;
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const ContentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const HyperlinkStyled = styled(Link)`
  text-decoration: underline;
  color: white;
`;

export const LeagueInputStyled = styled(Input)`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border: 1px solid #0b6bcb;
`;

export const LeagueInputSearchButtonStyled = styled(Button)`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

export const CircularProgressContainerStyled = styled.div`
  height: 50px;
`;
