
import Layout from "components/Layout"
import Link from "next/link"
import { Box, Paragraph,Heading,ResponsiveContext,Anchor} from "grommet"
import { Paper, Button as MuiButton,Avatar,makeStyles } from "@material-ui/core"
import WhyUsCard from "components/WhyUsCard"
import React from "react"
import GetInTouchModal from 'components/modals/GetInTouchModal'
import {Grid,Container,Divider} from 'semantic-ui-react'
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
  const [show, setShow] = React.useState(false);
  const classes =useStyles()
    return <Layout showShareThis>
    <NextSeo {...{
      title: "Companion Care around Snohomish or King County.",
      description:`Find your loved one the companion they’ve always missed.`,
      openGraph: {
          type,
          locale: 'en_IE',
          url:`${url}/about`,
          site_name: legalName,
          images: [
            {
              url:`${url}/imgs/ogimage-companioncare.png`,
              width: 900,
              height: 522,
              alt: 'Personal Care B\'Zoe Home Care Giving Services'
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
  Companion Care
     </Heading>
    
     <Paragraph  color='black'>
     In our senior years, our memories are our greatest toy.
     If not well managed, they can be very damaging, however, if well guided, they can be as gold. At B’Zoe companionship is our greatest strength. 
     Our clients always feel our caregivers have always been a part of their life as we not only bring them good memories of the past but 
     also make sure to bring back the fun of their old lives 
     through our numerous activities. We attend to each of our clients as an individual family member of our own. That is why we thrive.
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
<Box fill align='center' justify='center' pad='medium'>
  
  <Heading level='1' color='light-1'  size='large' textAlign='center'>
       Find your loved one the companion they’ve always missed.
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
       <Avatar src={require('public/imgs/oddo.jpeg?webp')} alt="Oddo's testimony about B'Zoe Home Care" className={classes.large}/>
       <Link href="/customerstories#wayne">
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
       </Link>
       </Box>
       <Box pad='none' margin='none' gap='medium' 
      // background={{ image: `url('imgs/respite-min.jpg')`, dark: true }}
       >
       <SectionOne/>
         
         </Box>
        
         <SampleSection/> 
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
Our friendly approach will surely add your loved one some happy moments on this globe. We've seen it work.
        </Paragraph>
   
</Box>
      </Grid.Column>
      <Grid.Column>
<Box style={{paddingRight:'5rem !important'}} align='center'>

         <Paragraph fill >
         Each of our clients has unique needs, so we work with them and their families to identify the services that are most important. 
         </Paragraph>
        <Paragraph fill>
        We take the time to get to know each personal care client, then match them with one of our licensed professionals who are best suited to meet their care needs. 
        </Paragraph>
     <Paragraph fill>
     Each of our team members have undergone extensive training and reflect our values of hard work, compassion, dignity and respect.
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
      <Heading  level='2'>Respite Care</Heading>
      </Anchor>
      <Paragraph color='dark-2' margin={{bottom:"small"}}  textAlign='center'>
     For any reason you would want to take a break from your responsibilities as the primary care giver of a loved one B'Zoe Home Care Giving Services will enable you.
    You do not have to worry about how your loved one's experience will be when you are away. We have a wide scope of well trained caregivers to attend to any 
    non medical in home care giving service you can think of. When you call us, we get to know you, your loved one, their needs and find a perfect match to look after your loved one just like you would.
      </Paragraph>
         
      </Box>
      </Grid.Column>
      <Grid.Column style={{margin:'0px'}}>
<Box fill align='center' justify='center'>
<Anchor color='brand' href='/' style={{textDecoration:'none'}}>
      <Heading  level='2'>Senior Personal Care</Heading>
      </Anchor>
<Paragraph color='dark-3' margin={{bottom:"small"}}  textAlign='center'>
When we grow, the personal things that we used to do with a lot of ease by our own selves become a challenge. 
For such tasks we need help from a person we can trust and feel safe around that we know will treat us with great care, patience, confidentiality and dignity.
This perfectly defines the type of care givers B'Zoe Home Care Giving Services sends. We train them to be able to serve your loved one with great compassion,
competence, tact and sensitivity.
</Paragraph>
   
</Box>
      </Grid.Column>
     </Grid>
    
    </Box>
</Paper>
  )
 }

 const SampleSection = () =>{

   
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