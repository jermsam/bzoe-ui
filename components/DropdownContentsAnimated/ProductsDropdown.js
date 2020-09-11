import React from "react"
import styled from "styled-components"
import { Icon, DropdownSection, Heading } from "./Components"
import {Anchor,Paragraph,Text} from 'grommet'
import {Divider} from 'semantic-ui-react'
import Link from 'next/link'

const ProductsDropdownEl = styled.div`
  width: 30rem;
`

const Logo = styled.div`
  width: 38px;
  height: 38px;
  margin-right: 16px;
  border-radius: 100%;
  opacity: 0.6;
  background-color: ${({ color }) => `var(--${color})`};
`

const SubProductsList = styled.ul`
  li {
    display: flex;
    margin-bottom: 1rem;
  }
  h3 {
    margin-right: 1rem;
    width: 3.2rem;
    display: block;
  }
  a {
    color: var(--dark-grey);
  }
`

const ProductsSection = styled.ul`
  li {
    display: flex;
  }
`

const WorksWithStripe = styled.div`
 border-top: 2px solid #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacer);
  padding-top: var(--spacer);
}
h3 {
  margin-bottom: 0;
}
`

const ProductsDropdown = () => {
  return (
    <ProductsDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
        <Link href='/services/respitecare'>
        <Anchor  style={{textDecoration: 'none'}}>
        <li>
        <div>
          <Logo color="blue" />
        </div>
        <div>
          <Heading color="blue">Respite Care</Heading>
          <Paragraph  size='small'   color='dark-3'>
          Find out how we can relieve you of the potential stress from relentless care giving. 
          We have a well packaged program to make sure that both your loved one and their caregivers are in a good state of mind and are healthy.

          </Paragraph>
       <Divider/>
          </div>
      </li>
        </Anchor>
        </Link>
        <Link href='/services/seniorpersonalcare'>
        <Anchor  href='/' style={{textDecoration: 'none'}}>
          <li>
            <div>
              <Logo color="green" />
            </div>
            <div>
              <Heading color="green">Senior Personal Care</Heading>
              <Paragraph  size='small'  color='dark-3'>
At some point in our loved one's life, whether as a result of an injury, medical condition, or simply part of the aging process it 
becomes difficult to take care of oneself.
With great confidentiality and respect for your loved one’s dignity, our care givers make sure to extend a helping hand to enable them remain independent for as long as possible.
          </Paragraph>
          <Divider/>
            </div>
          </li>
          </Anchor>
        </Link>
        <Link href='/services/companioncare'>
          <Anchor  href='/' style={{textDecoration: 'none'}}>
          <li>
          <div>
            <Logo color="teal" />
          </div>
          <div>
            <Heading color="teal">Companion Care</Heading>
            <Paragraph  size='small'  color='dark-3'>
            If your loved one is living alone and your visits are limited, social interaction becomes very 
            important to their happiness and helps prevent feelings of isolation and depression. Whether they need a little fun or 
            maybe just help keeping house and running errands, we have you covered with home care activities.
</Paragraph>
        <Divider/>
          </div>
        </li>
          </Anchor>
       </Link>  
        </ProductsSection>
      </DropdownSection>
      <DropdownSection>
        
       
          <Heading noMarginBottom>
          <Link href='/services'>
          <a>
              <Icon /> Dig Deeper into our Services
            </a>
          </Link>
            
          </Heading>
       
      </DropdownSection>
    </ProductsDropdownEl>
  )
}

export default ProductsDropdown