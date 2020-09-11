
import Layout from "components/Layout"
import { Box} from "grommet"
import { Paper, makeStyles,  } from "@material-ui/core"
import WhyUsCard from "components/WhyUsCard"
import React from "react"
import {Container,Divider} from 'semantic-ui-react'
import { NextSeo } from 'next-seo';
import {url,type,legalName} from 'config'

const useStyles = makeStyles((theme)=>({

 
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  
}))

export default ()=>{
  
    return <Layout showShareThis>
    <NextSeo {...{
      title: "Learn more about non medical in home care around Snohomish or King County.",
      description:`We have been in service for more than 10 years.`,
      openGraph: {
          type,
          locale: 'en_IE',
          url:`${url}/about`,
          site_name: legalName,
          images: [
            {
              url:`${url}/imgs/ogimage-faq.png`,
              width: 900,
              height: 524,
              alt: 'FAQ B\'Zoe Home Care Giving Services'
            }
          ],
        },
  }} />
    <Paper elevation={0} style={{
        backgroundImage: `url(${require('public/imgs/820.png?webp')})`,
        backgroundPosition:"center",
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
        opacity:0.96,
        border:0
      }} >
        
         <SampleSection/> 
 </Paper>

    </Layout>
   
}



 const SampleSection = () =>{

   
  return(


<Box background={{color:'light-1',opacity:0.3}}  alignSelf='center'  fill pad='none' align='center' justify='center'>
<Container>
<Divider section hidden/>
<Box gap='small' style={{opacity:1}} align='center' justify='center' alignSelf='center' margin={{vertical:'large'}}>
<Divider section hidden/>
<Box gap='small' margin='small' direction='row-responsive' 
align="center" justify="center" >
<WhyUsCard 
icon={require('public/imgs/faq.png?webp')}
title='Where are you located, and how far away do you travel to deliver in-home care services?' 

body="We’re located in Bellevue, Washington, just 10 miles outside of Seattle. We currently work with patients primarily here on the Eastside of King County, which includes not only Bellevue, but also Kirkland, Mercer Island and Issaquah.
Please feel free to talk to us if your parent or loved one needing assistance lives outside of our current primary service area.
"
/> 

<WhyUsCard 
icon={require('public/imgs/faq.png?webp')}
title='Do you only work with seniors or the elderly?' 
body="No. We work with any adult who needs caregiving assistance to make their daily life better. This includes those who may need a caregiver due to a medical diagnosis as well as those who are developmentally delayed or otherwise need help with grooming and other basic tasks."
/> 

</Box>
<Box gap='large' margin='small' direction='row-responsive' 
align="center" justify="center" >
<WhyUsCard 
icon={require('public/imgs/faq.png?webp')}
title='What are you able to provide in terms of in-home care?' 
body="We deliver services that are non-medical in nature. These include helping people with daily tasks like bathing, grooming, taking care of personal hygiene needs, and getting dressed for the day or undressing to go to bed. We also provide companion care, which includes social activities, entertainment, exercise, light housekeeping or more extensive household management. Because we are able to offer a variety of services, we take the time to create a customized plan for every client to make sure we’re delivering care at the level they need most."
/> 

<WhyUsCard 
title='Can you give my parent prescription medication?' 
icon={require('public/imgs/faq.png?webp')}
body={`All of our caregivers are Certified Nurses Assistants and operate just as they would in a hospital or other facility. This means we can hand our clients their medicine as prescribed; however, we cannot force them to take it. If they need to take certain prescriptions, but are refusing to do so, we reach out to their family members to let them know the situation and allow them to engage with their parent or loved one.`}
/> 
</Box>
<Box gap='large' margin='small' direction='row-responsive' 
align="center" justify="center" >
<WhyUsCard 
title='Do you work with people with dementia?' 
icon={require('public/imgs/faq.png?webp')}
body={`We do work with clients who are living with dementia-related challenges. These clients often require special care as they navigate the memory loss, mood swings and cognitive decline that this condition brings.`}
/> 
<WhyUsCard 
title='Can you deliver care in an assisted care facility?' 
icon={require('public/imgs/faq.png?webp')}
body={`Yes, on a limited basis. Some of our clients who have surgery are required by their physician to recover in an assisted care facility, and we continue to work with them while they are in that environment. We also provide to care to clients who live in senior living communities.`}
/> 
</Box>
<Box gap='large' margin='small' direction='row-responsive' 
align="center" justify="center" >
<WhyUsCard 
title='I’m interested in becoming a caregiver for B’Zoe. What qualifications do I need?' 
icon={require('public/imgs/faq.png?webp')}
body={`We require that all B’Zoe caregivers are Certified Nursing Assistants and prefer that they have additional experience and/or certifications related to caregiving. You must be at least 18 years of age, have a valid drivers license, and can pass a thorough background check. We also expect you to have the heart of a servant, be one who demonstrates compassion, is a go-getter, and is committed to doing what’s right. If this sounds like you, please use our contact portal to learn more about how to apply.`}
/> 

</Box>

</Box>
</Container>

</Box>

  )
    
  
}