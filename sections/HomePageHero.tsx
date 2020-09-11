import React from "react"
import { Button, Typography } from "@material-ui/core"
import {  Box, Heading, Paragraph, Image,} from "grommet"

import Paper from "@material-ui/core/Paper/Paper"

export default() =>{

    const [email,setEmail]=React.useState('')
    
    React.useEffect(
      ()=>{
        if(localStorage){
          setEmail(localStorage.getItem('email')||'')
        }
      },[]
    )
    
      return(
    
        <Box gap="xlarge" background={{
          color:'accent-1',
          dark:true,
          position:"bottom",
          repeat:'no-repeat',
          size:'cover',
          image: `url(${require('public/imgs/818.png?webp')})`,
          opacity:0.9,
          
        }} 
       className='blurBackground'
        >
        
        <Box 
        background={{color:'black',opacity:0.7}} 
        gap='large'  margin='none' align="center" pad='large' direction='row-responsive' alignSelf='center'>
        
        <Box background='transparent' width='50vw' alignSelf='center' >
          <Paper elevation={0} style={{background:'transparent'}}>
          <Box alignSelf='center' align='center' justify='center'>
          <Paper elevation={0} style={{background:'transparent'}}>
          <Box background={{color:'transparent'}}>
      
          <Box pad='medium' margin={{horizontal:'large',vertical:'xlarge'}} gap='medium' >
      
      
          <Box gap='small'>
          <Box>
          <Heading  level='1' color='white'>
          Making Tech Simple
          </Heading>
          <Paragraph color='white' size='xlarge'>
          Whether you are looking for a custom software solution for your business,
          or in need of respite assistance on your client's software project(s).
          Jitpomi is here for you.
          </Paragraph>
          </Box>
         <Box direction='row' gap='small' margin={{vertical:'small'}}>
         <Button color='primary' variant="contained" size='large'>
         Get In Touch
         </Button>
        
         </Box>
          </Box>
         
      
          </Box>
      
          </Box>
         
         
          </Paper>
          </Box>
          </Paper>
          </Box>
          
         <Box background='transparent' width='large' height='large'>
         
          <Image   fit="contain" src={require('public/imgs/hero.png?webp')} />
          
          </Box>
        </Box>
        
        </Box>
      )
        
      
    }

    /**
     * 
     *  <img src={require(`public/imgs/bkgnd.png?trace`).trace} className='header-img'/>
    <img src={require(`public/imgs/bkgnd.png?webp`)} className='header-img'/>
    
     */