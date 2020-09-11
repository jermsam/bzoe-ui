import React from 'react'
import {Anchor,Box,Text}from 'grommet';
import Link from 'next/link'

import {FormNextLink} from 'grommet-icons'

export const MyAnchor= React.forwardRef(({children,...rest}, ref) => (
    <Anchor style={{
        textDecoration: 'none'
    }} 
    {...rest}
    ref={ref}
   
    >
      {children}
    </Anchor>
    
  ));



  export const MyLink= React.forwardRef(({children,href,...rest}, ref) => (
    <Link {...{href,ref,...rest}} >
       {children}
    </Link>
    
  ));


 

  export const GoBackLink=({text,action,dark,...rest})=>(
    <Box alignSelf='end'>
    <Anchor 
    
    {...rest}
    color={!dark?'accent-1':'yellow'}
  style={{textDecoration:'none',}}
  onClick={action}
  className={!dark?'seeMore':'seeMoreDark'}
  data-clog-click="" data-clog-ui-element="link_slack_demo" data-qa="slack_demo">
  <Box  direction='row' gap='small'>
  
  <Text>{text}</Text> 
  <FormNextLink color={!dark?'accent-1':'yellow'}/>
  </Box>
  </Anchor>
    </Box>
  )