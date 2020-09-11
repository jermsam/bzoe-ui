
import Layout from "components/Layout"
import Link from "next/link"
import { Box, Paragraph,Heading,ResponsiveContext,Anchor} from "grommet"
import { Paper, Button as MuiButton,Avatar,makeStyles } from "@material-ui/core"
import RespiteCompanion from "sections/RespiteCompanion"
import Personal from "sections/Personal"
import React from "react"
import {Divider} from 'semantic-ui-react'
import GetInTouchModal from 'components/modals/GetInTouchModal'
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
      title: "Looking for non medical in home care around Snohomish or King County?",
      description:`We serve each client - your loved one - like they are all we have.`,
      openGraph: {
          type,
          locale: 'en_IE',
          url:`${url}/about`,
          site_name: legalName,
          images: [
            {
              url:`${url}/imgs/ogimage-services.png`,
              width: 900,
              height: 638,
              alt: 'Services  B\'Zoe Home Care Giving Services'
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
  What we do.
     </Heading>
    
     <Paragraph  color='black'>
     Knowing your loved one is happy, safe and cared for is your priority … and ours too. 
     B'Zoe Home Care Giving Services provides the peace of mind you need when making the decision to honor your family member’s wish to remain in their home. 
     Our wide range of customized services ensures your loved one receives the care they both want and need.
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
   

<Box fill align='center' justify='center'>
  
  <Heading level='1' color='light-1'  size='large' textAlign='center'>
         We serve each client - your loved one - like they are all we have.
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
             
              
              <Avatar src={require('public/imgs/oddo.jpeg?webp')} alt="Cady's  Family appreciates  B'Zoe Home Care" className={classes.large}/>
              <Link href="/customerstories#oddo">
              <Anchor 
              reverse
              style={{textDecoration:'none',fontStyle:"italic",fontWeight:'bold'}}
              color='dark-1' href='/' 
              >
              <Paragraph textAlign='center' size='medium'>
             "B'Zoe worked long hours.  They treated him as if he was a member of their own family – even when he was confused and fussy. 
             Subsequent to my father’s passing, B'Zoe took care of many of my friend’s folks and father’s neighbors 
             – with similar performance and accolades. I would highly recommend them to anybody who is lucky enough to secure their services.  "
             
             <p style={{fontSize:'1rem'}}> ~ Oddo</p>
             
             </Paragraph>
             
              </Anchor>
              </Link>
              </Box>
       <Box pad='none' margin='none' gap='medium' 
      // background={{ image: `url('imgs/respite-min.jpg')`, dark: true }}
       >
       <Personal/>
         
         </Box>
        
        
  <RespiteCompanion/>
{show&&<GetInTouchModal  {...{setShow}}/>       }
    </Layout>
   
}

