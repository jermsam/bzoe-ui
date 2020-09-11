

import { Box, Paragraph,Image,Heading,ResponsiveContext,Anchor} from "grommet"
import {Paper} from '@material-ui/core'
import React from "react"
import {Grid,Icon,Button,} from 'semantic-ui-react'

export default ()=>{


  
    return(
      <Paper elevation={0} style={{
        backgroundImage: `url(${require('public/imgs/817.png?webp')})`,
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
        
        <Grid.Column>
        <Box fill align='center' justify='center'>
        <Anchor color='dark-1' href='/' style={{textDecoration:'none'}}>
        <Heading  level='2'>Respite Care</Heading>
        </Anchor>
        <Paragraph color='dark-2' margin={{bottom:"small"}}  textAlign='center'>
       B'Zoe's Respite Care Services enable your senior loved one to comfortably remain in their own home, while providing you with a much-needed interval of rest or relief. 
       As the primary caregiver for your loved one, it is important to recognize that it is ok to take a break from your caregiving responsibilities. 
       </Paragraph>
           
        </Box>
        </Grid.Column>
        <Grid.Column style={{margin:'0px'}}>
  <Box fill align='center' justify='center'>
  <Anchor color='brand' href='/' style={{textDecoration:'none'}}>
        <Heading  level='2'>Companion Care</Heading>
        </Anchor>
  <Paragraph color='dark-3' margin={{bottom:"small"}}  textAlign='center'>
  Our companion care line of senior home health care services offers daily companionship and assistance with daily living activities. 
  If your loved one is living alone and your visits are limited, social interaction becomes very important to their happiness and helps prevent feelings of isolation and depression. 
  Whether they need a little fun or maybe just help keeping house and running errands, we have you covered with home care activities. 
           </Paragraph>
     
  </Box>
        </Grid.Column>
       </Grid>
      
      </Box>
  </Paper>
    )
   }
  