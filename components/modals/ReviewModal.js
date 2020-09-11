/* eslint-disable camelcase */
import React from "react";
import { Box,Layer,ResponsiveContext} from "grommet";
import {CardContainer} from 'components/containers'
import {Container,Divider,} from 'semantic-ui-react'
import ModalBody from  'components/modals/ModalBody'
import  { withRouter,} from 'next/router';
import Linkify from 'react-linkify';
import {GoBackLink} from 'components/navigation'




export default withRouter(({setShow,avatar,title,credentials,text,href})=> {
 
  const size=React.useContext(ResponsiveContext)
 
  const onClose =()=>{
      setShow(false)
    }
  

  

  return (<Layer
            position="right"
            full="vertical"
            open={false}
            onClickOutside={onClose}
            onEsc={onClose}
          >
            <Box
              as="form"
              fill="vertical"
              overflow="auto"
              style={{width:'100vw'}}
              pad="medium"
              onSubmit={onClose}
              background='brand'
            >
             <Box>
      <Box>
     <Divider section hidden/>       
   <Container style={{background:'transparent'}}>
    <Box fill align='center' background='transparent'>
    <CardContainer padding='small' text maxWidth={size==='small'?'100vw':'50vw'} >
     
 <ModalBody {...{avatar,title,subTitle:credentials}}>             
   
   <Box fill gap='medium'>
   <div className="fb-post" 
   data-href={href} 
   data-width="800" 
   data-show-text="true">
     <blockquote cite={href}
     className="fb-xfbml-parse-ignore">
<Linkify>
<p>
{text}
       </p>
</Linkify>
     
      </blockquote></div>
   </Box>
  
 <GoBackLink text='Close' action={onClose}/>
     </ModalBody>

   
    </CardContainer>

    </Box>
    
  </Container>

 </Box>
 
    </Box>
            </Box>
          </Layer>
   
  );
})



