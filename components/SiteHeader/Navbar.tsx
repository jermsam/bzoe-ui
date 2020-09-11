import { FunctionComponent } from "react";
import styled from "styled-components";


const NavbarEl = styled.nav`
  margin: 0 auto;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`;

interface NavbarProps {
    onMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Navbar:FunctionComponent<NavbarProps>=({children,onMouseLeave})=>{

    return(
        <NavbarEl onMouseLeave={onMouseLeave}>
        <NavbarList>{children}</NavbarList>
      </NavbarEl>
    )

}

export default Navbar