

import { Box, Paragraph,Image,Heading,ResponsiveContext,Anchor} from "grommet"
import {Paper} from '@material-ui/core'
import React from "react"

import {Grid,Icon,Button,} from 'semantic-ui-react'

export default ()=>{

 
  
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
     
      pad='large'
  
      height='100%'
      background={{color:'white',opacity:0.5}}
      
      >
  
       <Grid columns={2} centered stackable verticalAlign='middle'>
        <Grid.Column style={{margin:'0px'}}>
  <Box fill align='center' justify='center'>
  <Anchor color='brand' href='/' style={{textDecoration:'none'}}>
  <Heading  level='2'>Senior Personal Care</Heading>
  </Anchor>
  
  <Paragraph color='dark-3' margin={{bottom:"small"}} size='xlarge' textAlign='center'>
       When you hire us, your search for professional dependable and kind care givers ends. 
       We guarantee the best non medical personal assistance to our clients with uttermost dignity.
           </Paragraph>
     
  </Box>
        </Grid.Column>
        <Grid.Column>
  <Box align='center'>
 
           <Paragraph fill >
           Our personal care line of services helps your loved ones with more intimate, non-medical care needs. 
           Whether it is for normal aging challenges, 
           hospital recovery or sickness, we are here to make everyday life easier and more manageable. </Paragraph>
           <Paragraph fill>
           We understand that every person is unique and so are their non medical personal care needs. For that reason work with them and their family members 
           to get to know each personal care client individually so we can match them with one of our licensed professionals who are best suited to meet their care needs. 
           </Paragraph>
       <Paragraph fill>
       Our experienced caregivers are specifically trained to handle these tasks and our care managers will be closely involved to conduct periodic assessments to survey your loved one's care.
       </Paragraph>
         
  </Box>
        </Grid.Column>
       </Grid>
       
      </Box>
  </Paper>
    )
   }
  