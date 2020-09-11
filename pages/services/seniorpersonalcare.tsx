
import Layout from "components/Layout"
import { Box, Paragraph,Heading,ResponsiveContext,Anchor} from "grommet"
import { Paper, Button as MuiButton,makeStyles } from "@material-ui/core"
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

    return <Layout showShareThis>
    <NextSeo {...{
      title: "Stop your search for Senior Personal Care around Snohomish or King County.",
      description:`You can trust us to stand in for you regardless.`,
      openGraph: {
          type,
          locale: 'en_IE',
          url:`${url}/about`,
          site_name: legalName,
          images: [
            {
              url:`${url}/imgs/ogimage-personalcare.png`,
              width: 900,
              height: 638,
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
  Senior Personal Care
     </Heading>
    
     <Paragraph  color='black'>
    As age kicks in, our strength and ability to do the essential personal tasks fades. 
    Unfortunately the responsibilities of our closest friends and family that would help us out at this time 
    have also increased so much that they can no  longer attend to us as we would want them to. 
    B'Zoe understands this and is fully committed to making sure your loved one gets that exceptional personal assistance 
    they need and still make them feel independent, 
    comfortable and able to help themselves as much as possible in the home they truly love.
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
        We are that extra hand your loved one needs.
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
We get to know your loved one as an individual and thus give then the personal help they really need.
        </Paragraph>
   
</Box>
      </Grid.Column>
      <Grid.Column>
<Box  align='center'>

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

 const SampleSection = () =>{

   
  return(


<Box background={{color:'light-1',opacity:0.8}}  alignSelf='center'  fill pad='none' align='center' >
<Container>
<Box gap='small' style={{opacity:1}} align='center' alignSelf='center' margin={{vertical:'large'}}>
<Heading level='3' color='brand' textAlign='center' margin={{bottom:'none'}}>
We love to help in these and much more
</Heading>
<Paragraph size='large' textAlign='center' margin={{top:'none'}}>
Making fun what would otherwise be task.
</Paragraph>
<Box gap='small' margin='small' direction='row-responsive' 
align="center" justify="center" >
<WhyUsCard 
icon={require('public/imgs/toilet.png?webp')}
title='Toileting/Perineal/Continence Care' 

body="Attending to daily toileting needs or providing continence care is critical. 
Toileting needs may range from supervision to helping seniors during the entire toileting process.
 Our care givers understand how personal of an issue this can be and are trained to approach these situations with tact and sensitivity."
/> 

<WhyUsCard 
icon={require('public/imgs/grooming.png?webp')}
title='Grooming' 
body="Other people’s opinions aside, just knowing that you are well groomed and clean is an excellent way 
to promote happiness and satisfaction within yourself. Our care givers are very diligent at ensuring that your seniors appearance 
is at its best by offering services like; 
Nail Care, Skin Care, Hair Care, Assistance with Shaving, and much more"
/> 

</Box>
<Box gap='large' margin='small' direction='row-responsive' 
align="center" justify="center" >
<WhyUsCard 
icon={require('public/imgs/bathing.png?webp')}
title='Bathing & Hygiene' 
body="Maintaining a good level of personal hygiene is important for the health and wellbeing of seniors. For that reason our professional care givers offer services like Oral Hygiene, Denture Care, Foot Care and Assistance with Bathing to ensure that our seniors are comfortable and in good health."
/> 

<WhyUsCard 
title='Dressing' 
icon={require('public/imgs/dressing.png?webp')}
body={`Dressing is a basic part of daily life, but dressing and undressing can present significant difficulties and safety hazards for some seniors. Assisting seniors with getting dressed and ready for the day and changing into night 
clothes before bed is a valuable component of our in-home care services.`}
/> 

</Box>
</Box>
</Container>

</Box>

  )
    
  
}
