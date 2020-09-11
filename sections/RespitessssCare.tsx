import React from "react"
import { Button, Typography } from "@material-ui/core"
import {  Box, Heading, Paragraph, TextInput } from "grommet"
import {Container,Image,} from 'semantic-ui-react'
import Paper from "@material-ui/core/Paper/Paper"
import WhyUsCard from "components/WhyUsCard"

export default() =>{

   
      return(
    
  
    <Box background={{color:'light-1',opacity:0.8}}  alignSelf='center'  fill pad='none' align='center' >
  <Container>
  <Box gap='small' style={{opacity:1}} align='center' alignSelf='center' margin={{vertical:'large'}}>
  <Heading level='3' color='brand' textAlign='center' margin={{bottom:'none'}}>
Our Companion Care is unmatched.
  </Heading>
 <Paragraph size='large' textAlign='center' margin={{top:'none'}}>
We treat your loved one, like our own.
 </Paragraph>
 <Box gap='small' margin='small' direction='row-responsive' 
 align="center" justify="center" >
 <WhyUsCard 
 icon={require('public/imgs/dementia.png?webp')}
 title='Dementia Care' 

 body="We understand how uncomfortable your loved one  may be with memory loss, mood swings, poor comprehension, cognitive decline, and any other challenges associated challenge. For example, you do not have to worry about them missing out on major issues such as testing for blood sugar or missing out on appointments.Our trained Caregivers have you covered."
 /> 

 <WhyUsCard 
 icon={require('public/imgs/housekeeping.png?webp')}
 title='Household Management' 
 body="We know how important the environment at home is to the people living there. As such it is our care giver's priority to ensure that laundry is done, the dishes are washed,trash is taken out, the living area is clean, the bed is done and everything else that would make the home a healthy place to stay is taken good care of."
 /> 
 
 </Box>
 <Box gap='large' margin='small' direction='row-responsive' 
 align="center" justify="center" >
 <WhyUsCard 
 icon={require('public/imgs/exercise.png?webp')}
 title='Activity and Exercise Assistance' 
 body="Through our wide scope of programs, including but not limited to; assistance with ambulation (like walking, standing, using the wheel chair), encouraging posture and turning as well as assistance with making simple physical exercises that can help improve the physical fitness and stamina, we ensure that your loved one is in a healthy physical state."
 /> 

 <WhyUsCard 
 title='Regular Companionship' 
 icon={require('public/imgs/companionship.png?webp')}
 body={`During these late years. Most of our beloved ones have lost touch with their long time friends and family. We at B'Zoe home care giving services ensure that your beloved one never experience that loneliness. We become that friend and family that they should have missed by taking good care of them as our own. "Our clients are our best friends." This is what we emphasize among our care givers.`}
 /> 
 
 </Box>
  </Box>
  </Container>
  
    </Box>
  
      )
        
      
    }

    /**
     * 
     *  <img src={require(`public/imgs/bkgnd.png?trace`).trace} className='header-img'/>
    <img src={require(`public/imgs/bkgnd.png?webp`)} className='header-img'/>
    
     */