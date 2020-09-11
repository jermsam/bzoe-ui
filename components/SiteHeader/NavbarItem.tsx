import { FunctionComponent } from "react";
import styled from "styled-components";


const NavbarItemTitle = styled.button`
  background: inherit;
  border: 0;
  font-weight: bold;
  font-size: 18px;
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
  color:#fff;
  font-family: inherit;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  &:hover,
  &:focus {
    opacity: 0.7;
    outline: none;
  }
`;

const NavbarItemEl = styled.li`
  position: relative;
  margin-left: 0.5rem;
  &::first-of-type {
    margin-left: 0;
  }
`;

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1000px;
`;

interface NavbarItemProps {
    index:number;
    title:string;
    onMouseEnter: (i: number) => void
}

const NavbarItem:FunctionComponent<NavbarItemProps>=({children,index,title,onMouseEnter})=>{

    const handleMouseEnter = () =>{
        onMouseEnter(index)
    }

    return(
        <NavbarItemEl onMouseEnter={handleMouseEnter} onFocus={handleMouseEnter}>
        <NavbarItemTitle>{title}</NavbarItemTitle>
        <DropdownSlot>{children}</DropdownSlot>
      </NavbarItemEl>
    )

}

export default NavbarItem