
/* eslint-disable camelcase */
import React from "react";
import { Box,Heading,ResponsiveContext,Text} from "grommet";

import { AuthContext } from 'api/AuthContextWrapper';

 const ModalHeader=({text,})=>{
    const size=React.useContext(ResponsiveContext)
    
     return (
       <Box  gap='small' direction='row' width='fill'>
       
          <Heading margin='none' alignSelf='start' level={size!=='small'?'2':'3'} weight='bold'>{text}</Heading>
         
         </Box>
     )
    
   }
   
   export default({ avatar, title,subTitle,children,...rest})=>{
    const {authUser, } = React.useContext(AuthContext);
const size=React.useContext(ResponsiveContext)
const txt=title||"Let's talk"

    return (
      <Box fill  justify='center' pad='large' {...rest}>
        <ModalHeader avatar={size!=='small'?avatar:''}  text={!authUser?txt:"Happy to connect"} />
        <Text size='medium' margin={{left:size!=='small'?'large':'none'}}>{subTitle}</Text>
             
       
           {children}
           
             </Box>
    )
   }