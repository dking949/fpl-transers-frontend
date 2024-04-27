import Link from "next/link";
import styled from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
`;

export const FormStyled = styled.form`
  display: inline-flex;
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
  color: #963cff;
`;
