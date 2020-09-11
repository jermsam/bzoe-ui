/* eslint-disable camelcase */
import React from 'react';
import { Button,} from 'semantic-ui-react';
import {Image, Box,Text,ResponsiveContext} from 'grommet';
import {
  LinkedinOption,
  FacebookOption,
  Twitter,
  // Pinterest,
  Instagram,
Phone,
} from 'grommet-icons'

// import Chatbot from 'components/chatbot'
import GetInTouchModal from 'components/modals/GetInTouchModal'
import queryString from 'query-string'
import {MyAnchor} from 'components/navigation'
import {socialLinks} from 'config'

export default(
  {showMuggy}
)=>{
    const [show, setShow] = React.useState(false);
    const size = React.useContext(ResponsiveContext);

    React.useEffect(
        ()=>{
          const {id_token} = queryString.parse(window.location.hash)
         
      // console.log('see if we can get jwt: ',id_token)
       if(id_token){
        window.localStorage.setItem('token',id_token);
        setShow(true)
       }
        },[]
      )
    

    return(
        <Box direction="row" gap='medium'  >
            
           
            {show&&<GetInTouchModal  {...{setShow}}/>       }
           
            { 
            // (showMuggy&&!show)&&<Chatbot/>
            
            } 
        { size!=='small'?<Box >
        <Box flex>

<Button 
margin={{top:'small'}}

size='big'
className='themedButton' 
type='submit'
onClick={
()=>setShow(true)
}
>
GET IN TOUCH
</Button>

</Box>
         <Text 
       
          textAlign='center'>
           Reach out on the following networks
            </Text>
    
         <Box direction='row' gap='medium' alignContent='center' alignSelf='center'>
         <MyAnchor  target="_blank" style={{pad:'0px', margin:'0px'}} href={socialLinks.care}>
<Box style={{height:30,width:30}}>
<Image  fit="cover" src={require('public/imgs/care.png?webp')} alt='care.com symbol'/>
</Box>
</MyAnchor>
<MyAnchor  target="_blank" href={socialLinks.facebook}>
<FacebookOption color='plain' />
</MyAnchor>
<MyAnchor  target="_blank" href={socialLinks.twitter}>
<Twitter color='plain'/>
</MyAnchor>
<MyAnchor  target="_blank" href={socialLinks.linkedin}>
<LinkedinOption color='plain'/>
</MyAnchor>
<MyAnchor target="_blank" href={socialLinks.instagram}>
<Instagram color='plain'/>
</MyAnchor>

         </Box>
         </Box>:<Box direction='row'>
         <Button
className='themedButton'
onClick={
    ()=>setShow(true)
    }
    icon={<Phone color='white'/>}
  />
 
    

             </Box>}
        
 </Box>
    )
}