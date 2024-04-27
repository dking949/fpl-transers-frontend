import styled from "styled-components";

export const TitleContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const DifferentialListStyled = styled.ul`
  list-style: none;
  padding: 0px;

  li:not(:last-child) {
    margin-bottom: 2em;
  }
`;
