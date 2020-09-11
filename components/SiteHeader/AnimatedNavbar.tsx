import React from "react";
import Navbar from "./Navbar";
import NavbarItem from "./NavbarItem";
import DropdownContainer from "./DropdownContainer";
import ProductsDropdown from "./dropdowns/ProductsDropdown";
import CompanyDropdown from "./dropdowns/CompanyDropdown";
import DevelopersDropdown from "./dropdowns/DevelopersDropdown";
import { Flipper, Flipped } from 'react-flip-toolkit'

// map navbar title to corresponding Dropdown menu
const navbarConfig = [
    { title: "Products", dropdown: <ProductsDropdown/> },
    { title: "Developers", dropdown: <DevelopersDropdown/> },
    { title: "Company", dropdown: <CompanyDropdown />}
  ];

  interface CurrentDropdownProps{
    currentIndex:number
}

const CurrentDropdown =({currentIndex}:CurrentDropdownProps)=>{

    return navbarConfig[currentIndex].dropdown;
}
  

export default  function AnimatedNavbar (){
    // [] as any[] coz never is only used when sure that [] will never occur
    const [activeIndices,setActiveIndices]=React.useState([] as any[])

    const onMouseEnter = (i:any) => {
        if (activeIndices[activeIndices.length - 1] === i)
          { console.log('move in')
            return 
          }
          setActiveIndices(activeIndices.concat(i))
      };

      const onMouseLeave = () =>setActiveIndices([])

   

      const currentIndex = activeIndices[
        activeIndices.length - 1
      ];

   

    return(
      // currentIndex is the index of the hovered dropdown
<Flipper flipKey={currentIndex}>
<Navbar onMouseLeave={onMouseLeave}>
        {navbarConfig.map(({title}, index) => {
          return (
            <NavbarItem
            key={title}
              title={title}
              index={index}
              onMouseEnter={onMouseEnter}
            >
              {currentIndex === index && (
                <DropdownContainer>
                 <CurrentDropdown {...{currentIndex}}/>
                </DropdownContainer>
              )}
            </NavbarItem>
          );
        })}
      </Navbar>
</Flipper>
        
    )
};

