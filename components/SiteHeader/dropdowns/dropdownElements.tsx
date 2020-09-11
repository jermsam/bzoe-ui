import styled from "styled-components";
import { FunctionComponent } from "react";

export const Icon = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 13px;
  background-color: var(--blue);
  opacity: 0.8;
  display: inline-block;
`;


interface HeadingProps{
    noMarginBottom?:boolean;
}

export const Heading = styled.h3`
text-transform: uppercase;
font-weight: bold;
font-size: 1.1rem;
margin-top: 0;
margin-bottom: ${(props: HeadingProps) => (props.noMarginBottom ? 0 : "1rem")};
color: ${({ color }) => (color ? `var(--${color})` : "var(--blue)")};
`;


export const HeadingLink:FunctionComponent<HeadingProps> = Heading.withComponent("li");

interface LinkListProps{
    marginLeft?:string;
}

export const LinkList:FunctionComponent<LinkListProps> = styled.ul`
  li {
    margin-bottom: 1rem;
  }

  li:last-of-type {
    margin-bottom: 0;
  }

  margin-left: ${(props:LinkListProps) => (props.marginLeft ? props.marginLeft : 0)};
`;