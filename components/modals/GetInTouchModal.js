/* eslint-disable camelcase */
import React from "react";
import { Box,Layer,Text,Heading,ResponsiveContext, Paragraph,} from "grommet";
import {CardContainer} from 'components/containers'
import {Container,Button, Image,} from 'semantic-ui-react'
import {Phone,MailOption,FormPreviousLink} from 'grommet-icons'
import {TextInput,PhoneInput,} from 'components/inputs'
import Recaptcha from 'react-google-invisible-recaptcha';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isEmail from 'validator/lib/isEmail';
import { AuthContext } from 'api/AuthContextWrapper';
import  { withRouter,} from 'next/router';
import ReactCodeInput from 'react-verification-code-input';
import {schema} from 'config'
import app from 'api'
import {GoBackLink} from 'components/navigation'
import ModalBody from  'components/modals/ModalBody'
import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()


export default withRouter(({setShow,router,})=> {
  const [use,setUse]=React.useState('')
  const [email,setEmail]=React.useState('')
  const [emailErr,setEmailErr]=React.useState('')
  const [name,setName]=React.useState('')
  const [nameErr,setNameErr]=React.useState('')
  const [phoneNumber,setPhone]=React.useState('')
  const [phoneNumberErr,setPhoneErr]=React.useState('')
  const recaptcha = React.useRef();
  const size = React.useContext(ResponsiveContext);
  const [isHuman,setIsHuman]=React.useState(false)
  const [code,setCode]=React.useState("")
  const [loading,setLoading]=React.useState(false)
  const {authUser, login ,logout,loginError, } = React.useContext(AuthContext);




  const usePhone =(e)=>{
      e.preventDefault()
  setUse('phone')
  setShow(true)
      }

    const useEmail =(e)=>{
      e.preventDefault()
      setUse('email')
      setShow(true)
          }
  
 
  const onClose =()=>{

    logout()
      setShow(false)
    }
  
 

  const changeEmail=(e)=>{
      setEmail(e.target.value.trim())
      setPhone('')
      setPhoneErr('')
    }

  const changePhoneNumber=(value)=>{
      setPhone(`+${value.replace('-','').replace('(','').replace(')','').replace(' ','').replace(' ','').trim()}`)
      setEmail('')
      setEmailErr('')
    };

    const authhandler=React.useCallback(
      async(info)=>{
        if(name){
          setLoading(true);
          
          await app.service('authentication').create({...info,name})
          setLoading(false);
          
           setUse('code sent')
           logout();
        }else{
          setNameErr('Your full name is required')
          setLoading(false);
        }
      },[logout,name]
    )

    const send =React.useCallback(
     async ()=>{
         let info;
        if(isEmail(email)){
          info={
            strategy: 'passwordless',
            email
          }
        
        }else{
          setEmailErr('a valid email address is required')
          setLoading(false);
        }
        
        if(isMobilePhone(phoneNumber)){
        
          info={
            strategy: 'passwordless',
            phone:phoneNumber
          }
            
           
        }else{
          setPhoneErr('a valid phone number is required')
          setLoading(false)
        }

        await authhandler(info);
       
      },[email,phoneNumber,authhandler]
    )

  React.useEffect(
    ()=>{
      
      if(isHuman){
       send()
       
       setIsHuman(false)
      }
    },[send,isHuman,phoneNumber,email]
  )

  

  const verify=React.useCallback(
    async()=>{
      if(schema.validate(code)){
        console.log('verifying ....');
     
        setLoading(true);
         await login(email,phoneNumber, code);
         setLoading(false);

      }
      
     },[code,email,phoneNumber,login]
  )

     React.useEffect(
      ()=>{
        verify()
      },[verify]
    
    )


    

     const close =()=>{
      router.push('/')
      setShow(false)
      localStorage.setItem('token',null)
      if (typeof window !== "undefined") {
      window.location.reload(false);
      }
     }

  return (<Layer
            position="right"
            full="vertical"
            onClickOutside={onClose}
            onEsc={onClose}
          >
            <Box
              as="form"
              fill="vertical"
              overflow="auto"
              style={{width:'100vw'}}
              pad="medium"
              onSubmit={onClose}
              background={{image:`url(${require('public/imgs/820.png?webp')})`,}}
            >
             
      <Box height='100vh' align='center' justify='center'>
          
   <Container style={{background:'transparent'}}>
    <Box fill align='center' background='transparent'>
    <CardContainer text maxWidth={size==='small'?'90vw':'50vw'}minWidth={size==='small'?'90vw':'50vw'}  >
     
    {(!use&&!authUser)? <ModalBody {...{user:authUser}}>             
   
   <Box gap='medium'>
   <Button onClick={usePhone}>
    <Box direction='row' >
     <Box justify='center' pad='small'>
     <Box pad='xsmall' align='center' direction='row' gap='small' width='medium' >
     <Phone />
 <Text size='medium'  color='accent-1' weight='bold'>Do you prefer using your phone?</Text> 

 </Box>

 <Text textAlign='start' size='small'>
 Send us your contact. We'll forward a ticket that you will use so we can reach out to you instantly.
 </Text>
     </Box>
 
     </Box>
    </Button>
   <Button basic onClick={useEmail}>
    <Box direction='row' >
     <Box justify='center' pad='medium'>
     <Box  align='center' direction='row' gap='small' width='medium' >
     <MailOption />
 <Text  color='#1264a3' weight='bold'> Use your email</Text> 
 
 </Box>
 <Text textAlign='start' size='small'>
   Send us your email address. We'll forward a ticket that you will use to notify us so that we can reply as soon as possible.
 </Text>
     </Box>

     </Box>
     
    </Button>
   </Box>
   <Box align='center'  margin={{vertical:'medium'}} gap='none'>
   <Text textAlign='center'>Call directly, here is our service line </Text>
   <Heading  textAlign='center' margin='none' color='brand' level='3'>
   <Button style={{background:'#C2185B',color:'#fff'}}  href="tel:+1888-545-4331">+1 (888) 545 4331</Button>
     </Heading>
   </Box>
 <GoBackLink text='Reach out later' action={()=>setShow(false)}/>
     </ModalBody>:
       <ModalBody {...{user:authUser}}>  
       {loading&&<Box justify='center'> ...sending ticket...</Box>}    
          {
            !authUser? <Box  gap='small' margin={{vertical:'small'}}  >
            {!loginError&&<Heading level='6' textAlign='start' size='xsmall'>
         {use==='code sent'?`We've sent your ticket to ${email||phoneNumber} It will expire shortly.`:
         "To get the ticket that will enable you to connect with us instantly."
         }
          </Heading>}
         <Box gap='small' width='fill' align='center' alignSelf={use==='phone'?'center':'stretch'}>
         {use==='email'&&<TextInput placeholder='Enter your active email address' value={email} onChange={changeEmail}/>}
             {use==='email'&&<Text color='red'>{emailErr}</Text>}
         {use==='phone'&&<PhoneInput country='us'  placeholder='Enter your active contact' value={phoneNumber} onChange={changePhoneNumber} />}
              {use==='phone'&&<Text color='red'>{phoneNumberErr}</Text>}
              <TextInput placeholder='Enter your full name' value={name} onChange={({target:{value}})=>setName(value)}/>
              <Text color='red'>{nameErr}</Text>
         </Box>
         {size!=='small'&&<Box margin={{vertical:'none'}} width='fill' align='center' justify='center'>
           {use==='email'&&<Image size='tiny' src='imgs/email.png' alt='email icon for contact form'/>}
           {use==='phone'&&<Image size='tiny' src='imgs/phone.png' alt='phone icon for contact form'/>}
         </Box>}
         {use==='code sent'?<Box gap='small' flex>
         
           <Box flex>
             {loginError&&<Button color='linkedin' onClick={email?useEmail:usePhone} basic>
              <Box direction='row' gap='small'>
              <FormPreviousLink color='accent-1' size='large'/>
              <Text color='red'>{loginError.replace(' (authManagement)','').replace(' for','')}</Text>
              </Box>
             
             </Button>}
             
             </Box>
         <ReactCodeInput 
         fields={4}
            fieldHeight={size!=='small'?80:45}
            fieldWidth={size!=='small'?80:45}
            onChange={value=>setCode(value)}
            />
            <Text margin ={{top:'none'}} size='small'>
            Enter your ticket code in the field above and we shall get back to you as soon as possible
            </Text>
         </Box>
         :<Button 
         margin={{top:'small'}}
         fluid
          size='big'
          className='themedButton' 
           loading={loading}
           onClick={(e)=>{
             e.preventDefault()
             recaptcha.current.execute()
            
             setShow(true)
           }}
           >
              SEND {use==='email'&&"EMAIL ADDRESS"}{use==='phone'&&"PHONE CONTACT"}
           </Button>}
         
           <GoBackLink text='Return to menu' action={()=>setUse('')}/>
              
         </Box>:<Box  gap='small' margin={{vertical:'small'}} flex >
          <Paragraph color='accent-1'>
         Greetings {authUser.name},
          </Paragraph>
            <Paragraph>
              We treasure every moment we spend with you. 
              We appreciate the time you have set aside to check us out. 
            </Paragraph>
            <Paragraph>
              If for some inevitable reason we fail to attend to you on time, 
              we want you to know that we have received your ticket and we promise to do everything possible to reach out. 
            </Paragraph>
            <GoBackLink text='Close' action={close}/>
            </Box>
          }
       
         </ModalBody>
         
        
     }
   
    </CardContainer>

    </Box>
    
  </Container>

 </Box>
 <Recaptcha
  ref={recaptcha }
  sitekey={publicRuntimeConfig.RECAPTURE_SITE_KEY}
  onResolved={()=>{
    
     
    setIsHuman(true)
    
  }} 
  />
    </Box>
           
          </Layer>
   
  );
})
