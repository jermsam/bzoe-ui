

import { Box, Paragraph,Image,Heading,ResponsiveContext,Anchor} from "grommet"
import {Paper} from '@material-ui/core'
import React from "react"

import {Grid,Icon,Button,} from 'semantic-ui-react'

export default ()=>{

    const [show,setShow]=React.useState(false)
  
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

     <Box fill align='center' justify='center'> <Heading color='brand' level='2'>Our Process</Heading></Box>
  
       <Grid columns={2} centered stackable verticalAlign='middle'>
        
        <Grid.Column style={{margin:'0px'}}>
        <Box fill  justify='center' pad='large' margin={{horizontal:'large'}}>
        <Heading color='dark-2' level='4'>Step 1:	Getting to know you.</Heading>
        <Paragraph fill color='dark-2' margin={{bottom:"small"}}  >
        We believe that every person and family is different, so the first step in our relationship is getting to know you. 
        It’s common for a family member of the person we will be caring for to reach out first, and we’re happy to meet with and talk 
        to you to learn more about your loved one. We also welcome having a one-on-one meeting with both our client and his or her family so
         we can answer questions, share information, and determine whether we’re a good fit for one another. 
        That meeting can occur in the client’s home or at a coffee shop or similar location—wherever you and they will feel most comfortable. 
        </Paragraph>
           
        </Box>
        </Grid.Column>
        <Grid.Column style={{margin:'0px'}}>
  <Box fill  justify='center' pad='large' margin={{horizontal:'large'}}>
  <Heading color='dark-2' level='4'>Step 2:	Needs assessment and caregiver selection.</Heading>
  <Paragraph fill color='dark-3' margin={{bottom:"small"}}  >
  Once we understand more about your needs and we each determine if we’ll be able to work well together, we do two things. First, we complete a
 
  thorough assessment of needs to create a custom care plan specific to our client. Second, we begin the process of selecting a caregiver 
  we feel will be best suited to deliver in-home care based on that assessment. As some of our clients remain fairly active, 
  we want to ensure that the caregiver paired with them is able to easily accompany them on walks or hikes. Others prefer 
  to remain close to home and instead need additional light housekeeping or meal preparation or need more intensive personal help. 
  Again, we opt for a caregiver who can best meet those needs.
   
           </Paragraph>
     
  </Box>
        </Grid.Column>
        <Grid.Column style={{margin:'0px'}}>
        <Box fill  justify='center' pad='large' margin={{horizontal:'large'}}>
        <Heading color='dark-2' level='4'>Step 3: Service delivery and ongoing communication.</Heading>
        <Paragraph fill color='dark-3' margin={{bottom:"small"}} >
        As we begin to work together, we do frequent check-ins with caregivers to ensure that everything is going well. 
        We also meet with our clients to ask questions about their level of satisfaction and how we can improve our service delivery. 
        If changes are needed, we make them as quickly as possible. We also communicate immediately with designated family members about any concerns we 
        have or items that need clarification so that you know how things are progressing. We want to put your mind at ease that your parent or 
        loved one is in capable, 
        compassionate hands and that you have made the best choice for home caregiving services.
                 </Paragraph>
           
        </Box>
              </Grid.Column>
       </Grid>
      
      </Box>
  </Paper>
    )
   }
  