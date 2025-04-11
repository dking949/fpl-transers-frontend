import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: purple;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled.a`
  color: purple;
  text-decoration: none;
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  // TODO: IS this correct way to space when navbar is fixed?
  margin-top: 75px;

  max-width: 1200px;
  text-align: center;
  padding: 2rem;
  animation: fadeIn 1s ease-out;
  padding: 4rem 2rem;
  color: white;
`;

export const HeroTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const HeroDescription = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
`;
