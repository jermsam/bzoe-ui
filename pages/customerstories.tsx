
import Layout from "components/Layout"
import { Box, Paragraph,Heading,ResponsiveContext,Anchor} from "grommet"
import { Paper, Button as MuiButton,Avatar,makeStyles } from "@material-ui/core"
import GetInTouchModal from 'components/modals/GetInTouchModal'
import React from "react"
import Link from 'next/link'
import {Grid,Container} from 'semantic-ui-react'
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
      title: "What in home care customers around Snohomish or King County.",
      description:`Our customer's happiness is our satisfaction..`,
      openGraph: {
          type,
          locale: 'en_IE',
          url:`${url}/about`,
          site_name: legalName,
          images: [
            {
              url:`${url}/imgs/ogimage-customer.png`,
              width: 900,
              height: 638,
              alt: 'Customer Stories and Reviews B\'Zoe Home Care Giving Services'
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
 
  <Box 
  background={{color:'light-3',opacity:0.0}} 
  gap='large'  margin='none' align="center"  direction='row-responsive' alignSelf='center'>
  
 {size!=='small'&& <Box background='transparent' width='50vw' alignSelf='center' >
    <Paper elevation={0} style={{background:'transparent'}}>
    <Box alignSelf='center' align='center' justify='center'>
    <Paper elevation={0} style={{background:'transparent'}}>
    <Box background={{color:'transparent'}}>

    <Box pad='medium' margin={{horizontal:'large',vertical:'xlarge'}} gap='medium' >


    <Box gap='small'>
    <Box 
    
         width='fill' 
        
         gap='small'
         align='center'
         justify='center'
         pad='large'
         >
        
         
         <Avatar src={require('public/imgs/wayne.jpg?webp')} alt="Dr. Wayne recommend B'Zoe for in home care" className={classes.large}/>
         <Link href="/customerstories#wayne">
         <Anchor 
         reverse
         style={{textDecoration:'none',fontStyle:"italic",fontWeight:'bold'}}
         color='dark-1' href='/' 
         >
         <Paragraph textAlign='center' size='medium'>
        "I strongly recommend B'Zoe Home Care Services. They have taken care of my 98 year old mother for the last year following a fall and later stroke, requiring 24 hour care. We tried other services, but have found B'Zoe home care to provide superior professional care we have depended upon during these stressful and difficult times. "
        <p style={{fontSize:'1rem'}}> ~ Dr. Wayne Tilson</p>
        <p style={{fontSize:'1rem'}}>(MD Emergency Medicine Spokane Valley, WA)</p> 
        </Paragraph>
        
         </Anchor>
         </Link>
         <Box direction='row' gap='small' margin={{vertical:'small'}}>
         <MuiButton color='secondary' variant="contained" size='large' onClick={()=>setShow(true)}>
         Get In Touch
         </MuiButton>
        
         </Box>
         </Box>
  
    </Box>
   

    </Box>

    </Box>
   
   
    </Paper>
    </Box>
    </Paper>
    </Box>}
    
   <Box background='transparent' width='large' height={size!=='small'?'large':'59vh'}>
   
{/*<Image   fit="contain" src={require('public/imgs/hero.png?webp')} />*/}
<Box fill align='center' justify='center'>
  
  <Heading level='1' color='light-1'  size='large' textAlign='center'>
  Our customer's happiness is our satisfaction.
           </Heading>
           {size==='small' &&<Box direction='row' gap='small' margin={{vertical:'small'}}>
           <MuiButton color='secondary' variant="contained" size='large' onClick={()=>setShow(true)}>
           Get In Touch
           </MuiButton>
          
           </Box> }
  </Box> 
  
    </Box>
  </Box>
  
  </Box>
  <Box 
  background={{color:'light-1',opacity:0.7}} 
  width='fill' 
      id='oddo'       
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
        <div id='cady'>{" "}</div>
         <SampleSection/> 
         
         <DrSection/>
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
<Box fill pad={{horizontal:'large'}} margin={{horizontal:'large'}}>
Several years ago my Father suffered a severe stroke. 
It was very similar to a stroke that my mother had endured ten years earlier. 
He lost the ability to swallow and speak. He also lost cognitive functions, became aphasiac and incontinent. 
By that point, my family had become pretty familiar with requisite capabilities and limitations of numerous caregivers.
 We had gone through over 30 caregivers with my mother and brother. (My brother is a limited paraplegic and was confined to a wheelchair for 
    part of his life also.) B'Zoe began to care for my father after his discharge from the rehab facility. 
    They did a fantastic job caring for him and he quickly rehabilitated. After nine months or so, we no longer needed B'Zoe to help my father. 
    Unfortunately, several months later he developed serious pneumonia and almost died. This pneumonia caused him to lose all of the progress 
    he had made during rehabilitation and essentially was back to where he was just after his stroke. From that point on B'Zoe cared for 
    my father 24 hours a day, seven days a week. He had very unique and specific requirements. Since he could not swallow, 
    his chin had to be tucked and his head had to be elevated at all times or he would suffocate on his own saliva. 
    He also had cognitive deficits and difficulty following direction. At times he was a bit disoriented and wondered why everybody was fussing with him. 
    Needless to say, his care was very difficult to manage. 
   
</Box>
      </Grid.Column>
      <Grid.Column>
<Box fill pad={{horizontal:'large'}} margin={{horizontal:'large'}}>

         <Paragraph fill >
         The doctors had given my Dad about a month. B'Zoe not only allowed 
    my father to live 59 months longer than the doctors predicted, but they also dramatically improved his quality-of-life. 
    They were truly angels at a time when our family was overwhelmed with my Father’s needs. 
         Being intimately familiar with what is expected of caregivers, 
         I can honestly say that they were several orders of magnitude better than any care my family had ever witnessed or been exposed to. 
         This opinion was bolstered by the constant complements that the hospital nurses and doctors gave to me on his numerous visits to the hospital. 
         These doctors and nurses were shocked at the quality of his skin etc. and how long he lived. B'Zoe worked long hours. 
         They treated him as if he was a member of their own family – even when he was confused and fussy. 
         Subsequent to my father’s passing, B'Zoe took care of many of my friend’s folks and father’s neighbors – with similar performance and accolades. 
         I would highly recommend them to anybody who is lucky enough to secure their services. 
         I cannot say enough nice things about them. In every category from dedication to technical competence they excelled way beyond my expectations.
          You're lucky to have found them!
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

     <Grid columns={3} centered stackable verticalAlign='middle'>
      
      <Grid.Column>
      <Box fill align='center' justify='center'>
      <Anchor color='brand' href='/' style={{textDecoration:'none'}}>
      <Heading  level='2'>Respite Care</Heading>
      </Anchor>
      <Paragraph color='dark-2' margin={{bottom:"small"}}  textAlign='center'>
     For any reason you would want to take a break from your responsibilities as the primary care giver of a loved one B'Zoe Home Care Giving Services will enable you.
    You do not have to worry about how your loved one's experience will be when you are away. We have a wide scope of well trained caregivers to attend to any 
    non medical in home care giving service you can think of. When you call us, we get to know you, your loved one, their needs and find a perfect match to look after your loved one just like you would.
      </Paragraph>
         
      </Box>
      </Grid.Column>
      <Grid.Column>
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

 const DrSection = () =>{

    
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
    
         <Grid columns={3} centered stackable verticalAlign='middle'>
          
          
          <Grid.Column>
          <Box fill align='center' justify='center'>
  
    <Paragraph color='dark-3' margin={{bottom:"small"}}  textAlign='center'>
    I want to strongly recommend B'Zoe Home Care Services. They have taken care of my 98 year old mother for the last year following a 
    fall and later stroke, requiring 24 hour care. We tried other services, but have found B'Zoe homecare to provide superior professional care. We have depended upon during these stressful and difficult times. Their caregivers are compassionate and friendly. My mother has developed positive relationships with each of them. They know her likes and dislikes, her routines and have a personal interest in her safety and care.
    
             </Paragraph>
             
          </Box>
          </Grid.Column>
          <Grid.Column style={{margin:'0px'}}>
          <Box 
    
          width='fill' 
         
          gap='small'
          align='center'
          justify='center'
          pad='large'
          >
         
          
          <Avatar src={require('public/imgs/wayne.jpg?webp')} alt="Dr. Wayne recommend B'Zoe for in home care" />
          <Link href="/customerstories#wayne">
          <Anchor 
          reverse
          style={{textDecoration:'none',fontStyle:"italic",fontWeight:'bold'}}
          color='dark-1' 
          >
          <Paragraph textAlign='center' size='small'>
         "I strongly recommend B'Zoe Home Care Services. They have taken care of my 98 year old mother for the last year following a fall and later stroke, requiring 24 hour care. We tried other services, but have found B'Zoe home care to provide superior professional care we have depended upon during these stressful and difficult times. "
         <p style={{fontSize:'1rem'}}> ~ Dr. Wayne Tilson</p>
         <p style={{fontSize:'1rem'}}>(MD Emergency Medicine Spokane Valley, WA)</p> 
         </Paragraph>
         
          </Anchor>
          </Link>
          </Box>
          </Grid.Column>
          <Grid.Column>
          <Paragraph fill>
          They have helped us with a variety of needs including cooking her favorite meals, washing dishes, house cleaning, shopping, and laundry. 
          They have transported her to outside activities such as swimming, Physical and Occupational therapy and helped with her exercise. 
          B'Zoe has put together a small, excellent team of caregivers with very low turnover and we have come to regard them as part of our family. 
          Caregivers are oriented, scheduling of services has been easy, 
          they are punctual and pay salary and taxes. My mother has improved and we are very grateful for our continued partnership.
         
          </Paragraph>
          <div id='cady'>{" "}</div> 
          </Grid.Column>
         </Grid>
         
        </Box>
    </Paper>
      )
    
  
}

 const SampleSection = () =>{

    const classes =useStyles();
  return(


<Box background={{color:'light-1',opacity:0.8}}  alignSelf='center'  fill pad='none' align='center' >
<Container>
<Box gap='small' style={{opacity:1}} align='center' alignSelf='center' margin={{vertical:'large'}}>  <Box 

     width='fill' 
    
     gap='small'
     align='center'
     justify='center'
     pad={{horizontal:'large'}}
     >
    
     
     <Avatar src={require('public/imgs/cady.jpeg?webp')} alt="Cady's  Family appreciates  B'Zoe Home Care" className={classes.large}/>
    <Link href="/customerstories#cady">
     <Anchor 
     reverse
     style={{textDecoration:'none',fontStyle:"italic",fontWeight:'bold'}}
     color='dark-1' 
     >
     <Paragraph textAlign='center' size='medium'>
    "Kathie went home to be with the Lord on Wednesday, April 3, 2019 at the age of 77. The family would like to thank B'Zoe Home Care Giving Services for their gentle care during her final days. "
    
    <p style={{fontSize:'1rem'}}> ~ Kathleen Ann Cady's family</p>
    
    </Paragraph>
    
     </Anchor>
     </Link>
     </Box>
<Box gap='small'  direction='row-responsive' 
align="center" justify="center" >
<Paragraph fill>
"Kathie went home to be with the Lord on Wednesday, April 3, 2019 at age 77. The family would like to thank Evergreen Hospital, 
and Evergreen Hospice, and B'Zoe Homecare for their gentle care during her final days." Such are the words of gratitude expressed by the late Cady's Family. 
She was a woman of strong faith, believing in the power and strength of Jesus Christ's love and peace that would await her in heaven. She was a very caring 
and compassionate person. She had a true appreciation for the beauty of God's creation,
 counting every raindrop, singing at the sight of the moon, and talking to every flower.
</Paragraph>
<div id='wayne'>{" "}</div>
</Box>
</Box>
</Container>

</Box>

  )
    
  
}