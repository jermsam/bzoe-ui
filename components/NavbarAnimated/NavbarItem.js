import React from "react"
import styled from "styled-components"

const NavbarItemTitle = styled.button`
  background: transparent;
  border: 0;
  font-weight: bolder;
  font-family: inherit;
  font-size: 30px;
  padding: 2rem 1.5rem 1.2rem 1.5rem;
 
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  &:hover, &:focus {
    opacity: 0.7;
    outline:none;
  }
`

const NavbarItemEl = styled.li`
  position: relative;
`

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
`

 
export default ({index, title, children,onMouseEnter,fixed })=>{

  

const handleOnMouseEnter = () => {
  onMouseEnter(index)
}

return (
  <NavbarItemEl onMouseEnter={handleOnMouseEnter} onFocus={handleOnMouseEnter}>
        <NavbarItemTitle style={{color:!fixed?'white':'#C2185B'}}>{title}</NavbarItemTitle>
        <DropdownSlot>{children}</DropdownSlot>
      </NavbarItemEl>
)
}