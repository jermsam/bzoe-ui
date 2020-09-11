

import { Box, Paragraph,Image,Heading,ResponsiveContext,Anchor} from "grommet"
import {Paper} from '@material-ui/core'
import React from "react"
import VideoModel from 'components/video/VideoModal'
import ReactPlayer from "react-player";
import {Grid,Icon,Button,} from 'semantic-ui-react'

export default ()=>{

    const [show,setShow]=React.useState(false)
  
    return(
      <Paper elevation={0} style={{
        backgroundImage: `url(${require('public/imgs/819.png?webp')})`,
        backgroundPosition:"center",
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
        opacity:0.96,
        border:0,
     
      }} >
      <Box 
      width='100vw'
      pad='large'
  
      height='100%'
      background={{color:'white',opacity:0.5}}
      
      >
  
       <Grid columns={2} centered stackable verticalAlign='middle'>
        <Grid.Column style={{margin:'0px'}}>
  <Box fill>
  <Box className='player-wrapper' margin='large'>
  <ReactPlayer
                light={!show&&require('public/imgs/companion.jpeg?webp')}
                url='https://youtu.be/-muVwWtgVac'
                onEnded={() => setShow(false)}
                playing={false}
                // show={show}
                width="100%"
                height="100%"
                controls
                className="react-player"
                playIcon={
                  <Button size="massive" icon onClick={() => setShow(true)}
                  className='themedButton' 
                  >
                    <Icon name="play" />
                  </Button>
                }
                
              />
        </Box>
  </Box>
        </Grid.Column>
        <Grid.Column>
  <Box  align='center'>
  <Heading level='3' color='brand' margin={{bottom:"small"}} >
           Discover our exceptional Respite Program.
           </Heading>
           <Paragraph fill >
  Although caregivers are superheroes, it is important to remember that they have needs and limitations and therefore need time to rest and attend to their own needs.
  
       </Paragraph>
       <Paragraph fill>
  Our respite care program is formulated to alleviate the pressure and anxiety felt by most primary caregivers. 
  Over the last 10 years, B'zoe Home Care Giving Services has been tirelessly working to ensure that we satisfy our client's respite care needs. 
         We can proudly testify that we have helped many of our clients fill in the gaps whenever they need someone to stand in for their primary care giver.
       </Paragraph>
           <Button 
  margin={{bottom:'small'}}
  style={{maxWidth:'15rem'}}
  size='large'
  className='secondaryButton' 
  type='submit'
  onClick={()=>setShow(true)}
  >
  PLAY VIDEO <Icon name='play'/>
  </Button>
  </Box>
        </Grid.Column>
       </Grid>
       <VideoModel url='https://youtu.be/-muVwWtgVac' {...{show,setShow}}/>
      </Box>
  </Paper>
    )
   }
  