import styled from 'styled-components';

const ContainerStyled = styled.div`
  display: flex;
  gap: 5em;

  @media only screen and (max-width: 800px) {
    margin: 2em 0;
    flex-direction: column;
  }
`;

export default ContainerStyled;
