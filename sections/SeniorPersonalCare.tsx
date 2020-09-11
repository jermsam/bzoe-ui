import React from "react"
import { Button, Typography, Paper,} from "@material-ui/core"
import { Text, Box, ResponsiveContext, Paragraph, Image,Heading} from "grommet"



import {Grid,List, Divider, Container} from 'semantic-ui-react'




export default() =>{

   // const [activeIndex,setActiveIndex]=React.useState(null)
    const size =React.useContext(ResponsiveContext)
  /*
    const   handleClick = (_e:any, titleProps:any) => {
      const { index } = titleProps
     
      const newIndex = activeIndex === index ? -1 : index
  
      setActiveIndex(newIndex)
    }
  */
    
      return(
    
    <Paper elevation={0} style={{
      backgroundImage: `url(${require('public/imgs/818.png?webp')})`,
      backgroundPosition:"top",
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
      opacity:0.96,
      border:0,
      height:'100%'
    }} 
   
    >

 
  <Box  background={{color:'white',opacity:0.5}}  fill pad={size!=='small'?'large':'none'} 
  align='center' justify='center'>
 
  <Box 
  direction = 'row-responsive' 
 
 
  >

  <Box width={size!=='small'?'70vw':'100vw'}>
  <Paper elevation={0} style={{background:'transparent'}}>
  <Box alignSelf='center' pad={{left:'large',right:'small'}} margin={{horizontal:'large'}}>
  
  
 <Box  gap='small' margin={{vertical:'small'}}>
 <Heading level='3' color='brand' textAlign={size==='small'?'center':'start'}>
 Enjoy better Senior Personal Care.
 </Heading>
 <Paragraph fill  margin={{vertical:'small'}}>
 By choosing B'Zoe for a loved one, you’re not just getting exceptional care for any of their needs, but also gaining a genuine, in-home connection designed to give them the absolute best quality of life.
 No matter the type of care your loved one requires, We provide the perfect services for any of their needs, all done from home. Our devotion is in giving better peace of mind for you and your loved one as we help out with services such as:

 </Paragraph>
<ExpandPanel/>

 </Box>
  </Box>
  </Paper>
  </Box>
 
 { size!=='small' &&<Box align="center" justify='center' >
  
  <Box width='large' height='large' align="center" justify='center' >
  <Image src={require('public/imgs/personalcarebkgnd.png?webp')} fit="cover" alt='Senior Personal Care Image'/>
  </Box>
  
  </Box>
 }
  </Box>
  </Box>
    </Paper>
      )
        
      
    }

    const ExpandPanel =()=>{

   

      return(
       <Box>
       <List bulleted  style={{color:'black'}}>
       <List.Item as='a'>
    
    <List.Content>
      <List.Header><Text color='brand'>Toileting/Perineal/Continence Care</Text></List.Header>
      <List.Description >
      Attending to daily toileting needs or providing continence care is critical. 
      Toileting needs may range from supervision to helping seniors during the entire toileting process.
      Our care givers understand how personal of an issue this can be and are trained to approach these situations with tact and sensitivity.
      </List.Description>
    </List.Content>
  </List.Item>
       <List.Item as='a'>
    
 <List.Content>
   <List.Header><Text color='brand'>Grooming</Text></List.Header>
   <List.Description >
   Other people’s opinions aside, just knowing that you are well groomed and clean is an excellent way to promote happiness and satisfaction within yourself. 
   Our care givers are very diligent at ensuring that your seniors appearance is at its best by offering services like; Nail Care, Skin Care, Hair Care, Assistance with Shaving, and much more 
   </List.Description>
 </List.Content>
</List.Item>
<List.Item as='a'>
    
 <List.Content>
   <List.Header><Text color='brand'>Bathing & Hygiene</Text></List.Header>
   <List.Description >
   Maintaining a good level of personal hygiene is important for the health and wellbeing of seniors.
   For that reason our professional care givers offer services  like Oral Hygiene, Denture Care, Foot Care and Assistance with Bathing to ensure that our seniors are comfortable and in good health.
   </List.Description>
 </List.Content>
</List.Item>

<List.Item as='a'>
    
    <List.Content>
      <List.Header><Text color='brand'>Dressing</Text></List.Header>
      <List.Description >
      Dressing is a basic part of daily life, but dressing and undressing can present significant difficulties and safety hazards for some seniors. Assisting seniors with getting dressed and ready for the day and changing into night clothes before bed is a valuable component of our in-home care services. </List.Description>
    </List.Content>
  </List.Item>
       </List>
       </Box>
      )
    }

