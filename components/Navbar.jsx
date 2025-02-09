import { NavbarStyled, Logo, NavLinks, NavLink } from "./styled";

function Navbar() {
  return (
    <NavbarStyled>
      <Logo>FPL Transfers</Logo>
      <NavLinks>
        <NavLink href="#about">About</NavLink>
      </NavLinks>
    </NavbarStyled>
  );
}

export default Navbar;
