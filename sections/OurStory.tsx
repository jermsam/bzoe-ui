

import { Box, Paragraph,Heading} from "grommet"
import {Paper} from '@material-ui/core'
import React from "react"
import VideoModel from 'components/video/VideoModal'
import {Grid,} from 'semantic-ui-react'

export default ()=>{

    const [show,setShow]=React.useState(false)
  
    return(
      <Paper elevation={0} style={{
        backgroundImage: `url(${require('public/imgs/819.png?webp')})`,
        backgroundPosition:"center",
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
        opacity:0.96,
        border:0
      }} >
      <Box 
      width='100vw'
      pad='large'
  
      height='100%'
      background={{color:'white',opacity:0.5}}
      
      >
  
       <Grid columns={2} centered stackable verticalAlign='middle'>
        <Grid.Column style={{margin:'0px'}}>
  <Box fill align='center' justify='center'>
  <Heading color='brand' level='2'>Our Story</Heading>
  <Paragraph color='dark-3' margin={{bottom:"small"}} size='xlarge' textAlign='center'>
         Setting the record straight, we are the Senior In-Home Care Giants of the community since 2010.
           </Paragraph>
     
  </Box>
        </Grid.Column>
        <Grid.Column>
  <Box  align='center' >
 
           <Paragraph fill >
While working part time in one of the nursing homes around this community, Prossie Lockett, a former accountant and now founder of B'Zoe Home Care Giving Services 
was touched by the quality of life senior citizens were conditioned to have at the climax of their days. When asked why she quit on her career to start giving care to senior citizens, Prossie said: 
       </Paragraph>
       <Paragraph color='dark-1' textAlign='center'   style={{fontStyle:"italic",}}>
       "I thought and still think it is unfair to work so hard all the days of your life only to end up in some unfamiliar institution in your later days and I think that together with my team, we can make a difference."
       </Paragraph>
       <Paragraph fill>
  It is with such passion that all of Our team of highly-qualified caregivers and staff serves our clients. We focus on making the later days of your beloved (who in fact is our beloved) colorful. 
  That's our ultimate satisfaction, our story and the reason we live.
       </Paragraph>
         
  </Box>
        </Grid.Column>
       </Grid>
       <VideoModel url='https://youtu.be/EYqxQGmQkVw' {...{show,setShow}}/>
      </Box>
  </Paper>
    )
   }
  