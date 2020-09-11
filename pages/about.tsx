
import Layout from "components/Layout"
import {url,type,legalName} from 'config'
import { Box, Paragraph,Heading,ResponsiveContext,Anchor,Text} from "grommet"
import { Paper, Button as MuiButton,Avatar,makeStyles } from "@material-ui/core"
import OurProcess from "sections/OurProcess"
import { NextSeo } from 'next-seo';
import OurStory from "sections/OurStory"
import React from "react"
import {
  LinkedinOption,
  FacebookOption,
} from 'grommet-icons'
import {Image,Button,Container,Divider} from 'semantic-ui-react'
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
    <NextSeo {...{
      title: "Learn about us as a Non medical home care agency.",
      description:`For the best non medical in home care services around King County (Bellevue,Kirkland, Mercer Island and Issaquah), call +1 (888) 545 4331`,
      openGraph: {
          type,
          locale: 'en_IE',
          url:`${url}/about`,
          site_name: legalName,
          images: [
            {
              url:`${url}/imgs/ogimage-about.png`,
              width: 900,
              height: 638,
              alt: 'About B\'Zoe Home Care Giving Services'
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
    image: `url(${require('public/imgs/820.png?webp')})`,
   // opacity:0.9,
    
  }} 
  pad='none'
  margin='none'
  style={{height:'100%'}}
  >
  {size==='small' &&<Divider hidden/>}
  <Box 
  background={{color:'white',opacity:0.0}} 
  gap='large'  margin='none' align="center" justify='center' pad='large' direction='row-responsive' alignSelf='center'>
  
  <Box background='transparent' width={size!=='small'?'50vw':'100vw'}  alignSelf='center' >
    <Paper elevation={0} style={{background:'transparent'}}>
    <Box alignSelf='center' align='center' justify='center'>
    <Paper elevation={0} style={{background:'transparent'}}>
    <Box background={{color:'transparent'}}>

    <Box pad='medium' margin={{horizontal:'large',vertical:'xlarge'}} gap='medium' >


    <Box gap='small'>
    <Box>
    <Heading level="2" color='brand' textAlign={size==='small'?'center':'start'}>
  Who we are.
     </Heading>
    
     <Paragraph  color='black' fill>
     More than 90% of seniors want to age in their own home with dignity but getting the right type of care can seem daunting.
     As B'Zoe Home care we are committed to delivering the best possible in-home care to senior citizens with in the Snohomish and King County community.
     It is our mandate to make sure that you are confident that even in your absence, your loved one is getting the care they need, when they need it in the exact way you would give it.
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
   
    <OurTeam/>
    </Box>}
  </Box>
  
  </Box>
  {size!=='small' &&<Box 
  background={{color:'brand',opacity:0.1}} 
       width='fill' 
       height='xsmall'
       direction='row'
       align='center'
       justify='center'
       pad='xlarge'
       >
     
       <Anchor 
       reverse
       style={{textDecoration:'none',fontStyle:"italic",fontWeight:'bold'}}
       color='dark-2' href='/' 
       >
       <Paragraph textAlign='center' size='medium'>
   "I hired B'Zoe to provide in-home hospice for my husband.  B'Zoe lifted a heavy burden from my shoulders when they first came into our home.﻿!"
      <p style={{fontSize:'1rem'}}> ~ Whitford</p>
      </Paragraph>
      
       </Anchor>
       
       </Box>
       }
      
       <Box gap='medium' 
      // background={{ image: `url('imgs/respite-min.jpg')`, dark: true }}
       >
       <OurStory/>
         
         </Box>
         <Box 
         background={{color:'light-1',opacity:0.7}} 
              width='fill' 
             
              gap='small'
              align='center'
              justify='center'
              pad='large'
              >
             
              
              <Avatar src={require('public/imgs/cady.jpeg?webp')} alt="Cady's  Family appreciates  B'Zoe Home Care" className={classes.large}/>
             
              <Anchor 
              reverse
              style={{textDecoration:'none',fontStyle:"italic",fontWeight:'bold'}}
              color='dark-1' href='/' 
              >
              <Paragraph textAlign='center' size='medium'>
             "Kathie went home to be with the Lord on Wednesday, April 3, 2019 at the age of 77. The family would like to thank B'Zoe Home Care Giving Services for their gentle care during her final days. "
             
             <p style={{fontSize:'1rem'}}> ~ Kathleen Ann Cady's family</p>
             
             </Paragraph>
             
              </Anchor>
              
              </Box>
        
  <OurProcess/>
  {size==='small' &&<OurTeam/>}
  {show&&<GetInTouchModal  {...{setShow}}/>       }
    </Layout>
   
}

const OurTeam =()=>{
const size = React.useContext(ResponsiveContext)
  return (
    <Box height={size!=='small'?"large":"xlarge"}  background={{ 
        //  image: "url('imgs/respite-min.jpg')", 
          // "color": "neutral-1",
          "dark": true,
          "opacity": true,
          "position": "bottom",
       }}
           align="center"
           justify="center"
        >
         {/** We add a Box to fill all the available space so that we have a flexbox Container to rely on */}
   
         <Box fill justify='center' align='center'  >
        
          <Heading  level='1' color='dark-3'>Meet our leaders</Heading>
          <Divider section  hidden/>
        <Container>
          <Container>
          <Box  direction='row-responsive' gap='large' align='center' justify='center'>
             <Box align='center' justify='center'>
             <Image
             size='small'
             avatar
  fit="cover"
  src='imgs/prossy.png'
  alt='prossie'
  />
  {
  // 
  }
        <Box margin={{top:'small'}}>
        <Heading margin={{bottom:'none'}} level='4' textAlign='center'>
            <Anchor color='dark-3' href="https://www.care.com/p/prossiel/sc" style={{textDecoration:'none'}}>
            Prossie T. Lockett
            </Anchor></Heading>
         <Text size='medium' textAlign='center' margin={{top:'none'}}>Director Client Care</Text>
        </Box>
  <Box margin={{top:'small'}} direction='row' gap='small' align='center' justify='center'>
  
  <Button circular color='facebook' icon={<FacebookOption  />} href="https://www.facebook.com/jonah.lockett.10"/>
  
  
  <Button circular color='linkedin' icon={<LinkedinOption />} href='https://www.linkedin.com/in/prossie-lockett-0340611a4/'/>
  
  </Box>
             </Box>
             <Box align='center' justify='center'>
             <Image
             size='small'
             avatar
  fit="cover"
  src='imgs/peruth.png'
  alt='peruth'
  />
        <Box margin={{top:'small'}}>
        <Heading margin={{bottom:'none'}} level='4' textAlign='center'>
        <Anchor color='dark-3'href="https://www.care.com/p/peruthn/sc" style={{textDecoration:'none'}}>
            Peruth N. Smith
            </Anchor>
            </Heading>
         <Text size='medium' margin={{top:'none'}} textAlign='center'>Supervisor Client Care</Text>
        </Box>
  <Box margin={{top:'small'}} direction ='row' gap='small' align='center' justify='center'>
  
     <Button circular color='facebook' icon={<FacebookOption  />} href="https://www.facebook.com/peruth.natukunda.58"/>
  
  
  <Button circular color='linkedin' icon={<LinkedinOption />} href='https://www.linkedin.com/in/peruth-natukunda-03271b15a/'/>
  
  </Box>
             </Box>
  
             <Box align='center' justify='center'>
             <Image
             size='small'
             avatar
  fit="cover"
  src='imgs/maureen.png'
  alt='maureen'
  />
        <Box margin={{top:'small'}}>
        <Heading margin={{bottom:'none'}} level='4' textAlign='center'>
        <Anchor color='dark-3' href="https://commercewa.com/person/lockett-prossie/40f3e7a6401f" style={{textDecoration:'none'}}>
        Maureen Y. Bikangaga
            </Anchor>
            </Heading>
         <Text size='medium' margin={{top:'none'}} textAlign='center'>Administrator Client Care</Text>
        </Box>
  <Box margin={{top:'small'}} direction ='row' gap='small' align='center' justify='center'>
  
     <Button circular color='facebook' icon={<FacebookOption  />} href="https://www.facebook.com/peruth.natukunda.58"/>
  
  
  <Button circular color='linkedin' icon={<LinkedinOption />} href='https://www.linkedin.com/in/prossie-lockett-0340611a4/'/>
  
  </Box>
             </Box>
          </Box>
          </Container>
        </Container>
   </Box>
       </Box>
  )
}



/**
 * 
 * 
 */

