import React from 'react'
import {Box} from 'grommet'

export  const CardContainer=({children,maxWidth='400px',padding,...rest})=><Box 
margin='none'
style={{position:"relative", maxWidth,boxShadow:'0 0 2rem rgba(0,0,0,.1)'}} 
background='white' 
flex
padding={padding||'medium'}
{...rest}
>
  {children}
  </Box>

  export const TwoColumnContainer =({leftPannel,rightPannel,...rest})=>{
 
   return<Box direction='row' style={{display:"block",border:"none"}} {...rest}>
         <Box flex style={{paddingLeft:'5rem !important',minWidth:'31rem', }} align='center'>
 {leftPannel}
 </Box>
  
  <Box flex style={{paddingRight:'0rem !important',  }} align='center' >
 {rightPannel}
 </Box>
   </Box>
  }