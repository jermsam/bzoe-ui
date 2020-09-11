import React from "react"
import GetInTouchModal from 'components/modals/GetInTouchModal'
import {Anchor} from 'grommet'
import styled from "styled-components"
import Link from 'next/link'
import {
  Heading,
  HeadingLink,
  LinkList,
  DropdownSection,
  Icon
} from "./Components"

const CompanyDropdownEl = styled.div`
  width: 18.5rem;
`

const CompanyDropdown = () => {
  const [show, setShow] = React.useState(false);

  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ul>
          <HeadingLink>
          <Link href="/about">
          <a>
              <Icon /> About Us
            </a>
          </Link>
            
          </HeadingLink>
          <HeadingLink>
          <Link href="/customerstories">
            <a>
              <Icon />Customers
            </a>
            </Link>
          </HeadingLink>
          <HeadingLink>
          <Link href="/faq">
            <a href="/">
              <Icon />FAQ
            </a>
            </Link>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <Anchor style={{textDecoration: 'none'}} onClick={() => {setShow(true)}} >
              <Icon />Contact Us
            </Anchor>
          </HeadingLink>
        </ul>
      </DropdownSection>
      <DropdownSection>
        <div>
          <Heading>
            <Icon />From the Blog
          </Heading>
          <LinkList marginLeft="25px">
            Stay tuned. We're soon publishing exciting articles.
          </LinkList>
        </div>
      </DropdownSection>
      {show&&<GetInTouchModal  {...{setShow}}/>       }
    </CompanyDropdownEl>
  )
}

export default CompanyDropdown