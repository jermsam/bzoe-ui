import DropdownSection from "../DropdownSection";

import { HeadingLink, LinkList,Icon, Heading } from "./dropdownElements";

import { FunctionComponent } from "react";
import styled from "styled-components";

const CompanyDropdownEl = styled.div`
  width: 23rem;
`;

const CompanyDropdown = () =>{

    return(
        <CompanyDropdownEl>
        <DropdownSection>
          <ul>
            <HeadingLink>
              <a href="/">
                <Icon /> About Stripe
              </a>
            </HeadingLink>
            <HeadingLink>
              <a href="/">
                <Icon />Customers
              </a>
            </HeadingLink>
            <HeadingLink>
              <a href="/">
                <Icon />Jobs
              </a>
            </HeadingLink>
            <HeadingLink noMarginBottom>
              <a href="/">
                <Icon />Environment
              </a>
            </HeadingLink>
          </ul>
        </DropdownSection>
        <DropdownSection>
          <div>
            <Heading>
              <Icon />From the Blog
            </Heading>
            <LinkList marginLeft="25px">
              <li>
                <a href="/">Stripe Atlas &rsaquo;</a>
              </li>
              <li>
                <a href="/">Stripe Home &rsaquo;</a>
              </li>
              <li>
                <a href="/">Improved Fraud Detection &rsaquo;</a>
              </li>
            </LinkList>
          </div>
        </DropdownSection>
      </CompanyDropdownEl>
    )
}

export default CompanyDropdown

