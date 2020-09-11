
import Layout from "components/Layout"
import {Divider} from "semantic-ui-react"
import { Box, Paragraph,Image,Heading,ResponsiveContext,Anchor,Text} from "grommet"
import { Paper, Button as MuiButton,Avatar,makeStyles } from "@material-ui/core"
import WhyUsSection from "sections/RespitessssCare"
import SeniorPersonalCare from "sections/SeniorPersonalCare"
import RespiteCare from "sections/RespiteCare"
import React from "react"
import GetInTouchModal from 'components/modals/GetInTouchModal'

const useStyles = makeStyles((theme)=>({

 
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  
}))

export default ()=>{
  const size= React.useContext(ResponsiveContext)
  const classes =useStyles()

  const [show, setShow] = React.useState(false);

    return <Layout showShareThis>
 
  <Box 
  
  background={{
   
    "dark": true,
    "opacity": 0.9,
    "position": "bottom",
    "repeat": "no-repeat",
    "size": "cover",
    "image": `url(${require('public/imgs/herobgd.png?webp')})`,
  }}
  pad='none'
  margin='none'
  style={{height:'100%'}}
  
  >
 <Divider section hidden/>
  <Box 
  background={{color:'light-1',opacity:size!=='small'?0.0:0.8}} 
  gap='large'  margin='none' align="center" pad='large' direction='row-responsive' alignSelf='center'>
  
  <Box background='transparent' width={size!=='small'?'50vw':'100vw'} alignSelf='center' >
    <Paper elevation={0} style={{background:'transparent'}}>
    <Box alignSelf='center' align='center' justify='center'>
    <Paper elevation={0} style={{background:'transparent'}}>
    <Box background={{color:'transparent'}}>

    <Box pad='medium' margin={{horizontal:'large',vertical:'xlarge'}} >


    <Box gap='small'>
    <Box>
    <Heading level="2" color='brand' textAlign={size==='small'?'center':'start'}>
    Passionate Home Care
     </Heading>
    
     <Paragraph  color='black' fill>
     Home care services for the elderly is our priority.
     Our in-home care services are well packaged to make your loved one feel at home. 
    With our compassionate caregivers, we take care of their personal hygiene,
     physical & emotional health and all home related care with great diligence in the comfort of their own home. 
      If you are looking for quality in-home care, look no further than B'Zoe Home Care Agency.
    </Paragraph>
    </Box>
   <Box direction='row' gap='small' margin={{vertical:'small'}} align={size==='small'?'center':'start'} justify={size==='small'?'center':'start'}>
   <MuiButton color='secondary' variant="contained" size='large' onClick={() => setShow(true)}>
   Get In Touch
   </MuiButton>
  
   </Box>
    </Box>
   

    </Box>

    </Box>
   
   
    </Paper>
    </Box>
    </Paper>
    </Box>
    
   {size!=='small' &&<Box background='transparent' width='large' height='large'>
   
{/*<Image   fit="contain" src={require('public/imgs/hero.png?webp')} />*/}
    
    </Box>}
  </Box>
  
  </Box>
  <Box 
  background={{color:'brand',opacity:0.1}} 
       width='fill' 
       height='100%'
       direction='row'
       align='center'
       justify='center'
       margin='none'
       >
       <Anchor 
       style={{textDecoration:'none'}}
       color='dark-2' href='/' 
       icon={<Avatar className={classes.large}  src={require('public/imgs/bbb.png?webp')} alt='accredited by BBB'/>} 
       label="We are accredited by the Better Business Bureau."/>
       
       </Box>
       <Box gap='medium' 
      // background={{ image: `url('imgs/respite-min.jpg')`, dark: true }}
       >
       <RespiteCare/>
         
         </Box>
         <Box 
         background={{color:'light-1',opacity:0.7}} 
              width='fill' 
             
              gap='small'
              align='center'
              justify='center'
              pad='large'
              >
             
              
              <Avatar src={require('public/imgs/wayne.jpg?webp')} alt="Dr. Wayne recommend B'Zoe for in home care" className={classes.large}/>
             
              <Anchor 
              reverse
              style={{textDecoration:'none',fontStyle:"italic",fontWeight:'bold'}}
              color='dark-1' href='/' 
              >
              <Paragraph textAlign='center' size='medium'>
             "I strongly recommend B'Zoe Home Care Services. They have taken care of my 98 year old mother for the last year following a fall and later stroke, requiring 24 hour care. We tried other services, but have found B'Zoe homecare to provide superior professional care. We have depended upon during these stressful and difficult times. "
             <p style={{fontSize:'1rem'}}> ~ Dr. Wayne Tilson</p>
             <p style={{fontSize:'1rem'}}>(MD Emergency Medicine Spokane Valley, WA)</p> 
             </Paragraph>
             
              </Anchor>
              
              </Box>
         <Box  gap='medium' 
          background={{color:'light-1',opacity:0.4}}
          >
          <SeniorPersonalCare/>
          </Box>
          <Box 
  background={{color:'light-1',opacity:0.7}} 
  width='fill' 
             
  gap='small'
  align='center'
  justify='center'
  pad='large'
       >
       <Avatar src={require('public/imgs/oddo.jpeg?webp')} alt="Oddo's testimony about B'Zoe Home Care" className={classes.large}/>
       <Anchor 
       reverse
       style={{textDecoration:'none',fontStyle:"italic",fontWeight:'bold'}}
       color='dark-1' href='/' 
       >
       <Paragraph textAlign='center' size='medium'>
      " B'Zoe not only allowed my father to live 59 months longer than the doctors predicted, but they also dramatically improved his quality-of-life. "
      <p style={{fontSize:'1rem'}}> ~ Dominick Oddo</p>
      </Paragraph>
      
       </Anchor>
       
       </Box>
  <WhyUsSection/>
  {show&&<GetInTouchModal  {...{setShow}}/>       }
    </Layout>
   
}





/**
 * 
 * 
 */

