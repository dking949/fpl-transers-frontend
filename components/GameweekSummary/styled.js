import styled from 'styled-components';

const ContainerStyled = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  gap: 5em;

  @media only screen and (max-width: 600px) {
    margin: 2em 0;
  }
`;

export default ContainerStyled;
