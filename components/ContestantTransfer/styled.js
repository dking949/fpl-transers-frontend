import styled from 'styled-components';

const ContainerStyled = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default ContainerStyled;
