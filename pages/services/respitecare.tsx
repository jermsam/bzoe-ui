
import Layout from "components/Layout"
import HomePageHero from "sections/HomePageHero"
import { Box, Paragraph,Heading,ResponsiveContext,Anchor,Text} from "grommet"
import { Paper, Typography, Button as MuiButton,Avatar,makeStyles } from "@material-ui/core"
import RespiteCompanion from "sections/RespiteCompanion"
import Personal from "sections/Personal"
import React from "react"
import GetInTouchModal from 'components/modals/GetInTouchModal'
import {Grid,Image,Button,Container,Divider} from 'semantic-ui-react'
import { NextSeo } from 'next-seo';
import {url,type,legalName} from 'config'

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

    <NextSeo {...{
      title: "Find The Best Respite Home Care around Snohomish or King County.",
      description:`You can trust us to stand in for you regardless.`,
      openGraph: {
          type,
          locale: 'en_IE',
          url:`${url}/about`,
          site_name: legalName,
          images: [
            {
              url:`${url}/imgs/ogimage-respitecare.png`,
              width: 900,
              height: 638,
              alt: 'Respite Care B\'Zoe Home Care Giving Services'
            }
          ],
        },
  }} />
 
  <Box gap="xlarge" background={{
    //color:'brand',
    dark:true,
    position:"bottom",
    repeat:'no-repeat',
    size:'cover',
  image: `url(${require('public/imgs/821.png?webp')})`,
  opacity:0.96,
    
  }} 
  pad='none'
  margin='none'
  style={{height:'100%'}}
  >
  {size==='small' &&<Divider hidden/>}
  <Box 
  background={{color:'light-3',opacity:0.0}} 
  gap='large'  margin='none' align="center"  direction='row-responsive' alignSelf='center'>
  
<Box background='transparent' width={size!=='small'?'50vw':'100vw'} alignSelf='center' >
    <Paper elevation={0} style={{background:'transparent'}}>
    <Box alignSelf='center' align='center' justify='center'>
    <Paper elevation={0} style={{background:'transparent'}}>
    <Box background={{color:'transparent'}}>

    <Box pad='medium' margin={{horizontal:'large',vertical:'xlarge'}} gap='medium' >


    <Box gap='small'>
    <Box>
    <Heading level="2" color='brand' textAlign={size==='small'?'center':'start'}>
  Our Respite Program.
     </Heading>
    
     <Paragraph  color='black'>
    Knowing how important your health and peace of mind as the primary care giver for your loved one is to your effectiveness
     in taking care of your loved one, we go an extra mile to ensure that you get the break you need as we stand in for you.
    Our respite care program is designed in such a way that we select the perfect match not only to replace you but to also meet the special needs of your 
    loved one so that they can always feel like you are around even when you break off to take your intervals of rest or relief.
     </Paragraph>
    </Box>
   <Box direction='row' gap='small' margin={{vertical:'small'}} align={size==='small'?'center':'start'} justify={size==='small'?'center':'start'}>
   <MuiButton color='secondary' variant="contained" size='large' onClick={()=>setShow(true)}>
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
<Box fill align='center' justify='center'>
  
  <Heading level='1' color='light-1'  size='large' textAlign='center'>
         You can trust us to stand in for you regardless.
           </Heading>
     
  </Box>  
    </Box>}
  </Box>
  
  </Box>
  <Box 
         background={{color:'light-1',opacity:0.7}} 
              width='fill' 
             
              gap='small'
              align='center'
              justify='center'
              pad='large'
              >
             
              
      
              <Anchor 
              reverse
              style={{textDecoration:'none',fontStyle:"italic",fontWeight:'bold'}}
              color='dark-1' href='https://www.care.com/b/l/b-zoe-home-care-giving-services/bellevue-wa-12400-se-38th-st-50462' 
              >
              <Paragraph textAlign='center' size='medium'>
             "It gives me great pleasure to recommend this Agency. They gave us incredible caregivers who were very professional. 
             They would always make sure that my parents were safe, well fed and clean in a clean environment. 
             There were no complaints whatsoever about their care from my parents and/or any of all my family members. 
             I do not know what I would have done without them. Thank you Bzoe Care Givers. "
             
             <p style={{fontSize:'1rem'}}> ~ Jonah P</p>
             
             </Paragraph>
             
              </Anchor>
              
              </Box>
       <Box pad='none' margin='none' gap='medium' 
      // background={{ image: `url('imgs/respite-min.jpg')`, dark: true }}
       >
       <SectionOne/>
         
         </Box>
        
        
  <SectionTwo/>
  {show&&<GetInTouchModal  {...{setShow}}/>       }
    </Layout>
   
}

const SectionOne =()=>{

 
  
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
<Heading  level='2'>How we do it.</Heading>
</Anchor>

<Paragraph color='dark-3' margin={{bottom:"small"}} size='xlarge' textAlign='center'>
We listen to make sure that we take care of your loved one exactly how you want us to.
        </Paragraph>
   
</Box>
      </Grid.Column>
      <Grid.Column>
<Box  align='center'>

         <Paragraph fill >
         We understand the trust you're placing in us by allowing us to care for your loved one in your absence. This is why we pay attention to the detail of how you would want us to 
         take care of your loved one and also address all the concerns you may have.</Paragraph>
         <Paragraph fill>
         We make this process easy by giving you the ability to reach us online in real time via our virtual assistant, call us or set up an appointment so we can get your exact requirements to the detail.
         </Paragraph>
     <Paragraph fill>
     We then compare your preferences to our caregivers’ qualifications, ensuring a compatible match. Our caregivers offer companionship at home, or in your loved one’s senior community.
     </Paragraph>
       
</Box>
      </Grid.Column>
     </Grid>
     
    </Box>
</Paper>
  )
 }


const SectionTwo = ()=>{


  
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
      <Heading  level='2'>Senior Personal Care</Heading>
      </Anchor>
      <Paragraph color='dark-2' margin={{bottom:"small"}}  textAlign='center'>
      We make aging in place possible for for your loved one in the comfort of their own home.
      We believe that it is better to spend their old age in an environment where they have a strong 
      feeling of attachment and great memories than in a random facility with so many doctors.
    That is why we commit to giving them as much personal assistance as would still make them feel independent, comfortable and
    able to help themselves as much as possible in the home they truly love. 
    Our devotion is in giving you and your loved one a better peace of mind as we empower them and give them a hand in their personal day 
    to day activities while respecting their privacy and dignity.
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
