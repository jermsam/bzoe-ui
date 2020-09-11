import { AppBar, makeStyles, Avatar} from "@material-ui/core";
import {
    Menu,
    Visibility  } from 'semantic-ui-react';
import Link from 'next/link'
import React from "react";
import AnimatedMenu from "components/AnimatedMenu";
import { Box, Heading, ResponsiveContext ,Text,Anchor,DropButton} from "grommet";
import GetInTouchWidget from 'components/getInTouchWidget'
import {Close,Menu as GrometMenu } from 'grommet-icons'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import {Button} from 'grommet'

const useStyles = makeStyles((theme)=>({

    titleStyle:{
        flex: 1,
   
  fontWeight:'bold',
    },
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
}))

type HeaderProps={
  hideMenu:boolean,
  showMuggy:boolean,
  showMobileMenu:boolean,
  toggleShowMobileMenu:() => void
}

export default function Header({ showMuggy,hideMenu,showMobileMenu,toggleShowMobileMenu}:HeaderProps){
    const [fixed, setFixed] = React.useState (true);
    const [duration]=React.useState(300)
    const size=React.useContext(ResponsiveContext )
    const classes =useStyles()
    

  
    const desktopColor =fixed?'default':'transparent'

    return(
       <Visibility
   once={false}
   onBottomPassed={() => setFixed (true)}
   onBottomPassedReverse={() => setFixed (false&&!hideMenu)}
 >
   

    
    <AppBar color={size!=='small' ? desktopColor:'default'}  elevation={0} style={{zIndex:1}} >
       
  
    
    
  <Box  background={{color:'#C2185B',opacity:0.05}} style={{color:'black'}} >
  
  <Box direction ='row' width='full' align='center' justify='around' pad={{vertical:'medium',horizontal:'none'}} margin={{horizontal:'none'}}>
 <Link href='/'>
 <Anchor style={{textDecoration:'none'}}>
 <Box margin='none' direction="row" gap='medium'  >
            
 <Box margin={{horizontal:'none'}} align='center' justify='center'>
 <Avatar 
alt="Homecare services logo symbol for B'zoe"
src={require('public/imgs/xx.png?webp')}
className={classes.large} 
/>
 </Box>
     { size!=='small'&& <Box align='center'>
       <Text  margin='none' size='xxlarge' color='brand'><span style={{fontFamily:'Pinyon Script',fontSize:'60px'}}>B</span> 'Zoe</Text>
       <Heading margin='none' level={size!=='small'?'3':'4'} color='brand'>Home Care</Heading>
     
       </Box>}
      
      
</Box>
 </Anchor>
 </Link>
  
  {size!=='small'&&<AnimatedMenu duration={duration} fixed={fixed}/>}
  <GetInTouchWidget {...{showMuggy}}/>
  {size==='small'&&
  <Button onClick={toggleShowMobileMenu}
  icon={<DropButton
    icon={showMobileMenu?<Close size='medium' color='light-1' />:<GrometMenu size='medium' color='light-1' />}
    primary
    color='brand'
    
    dropProps={{plain:true}}
    dropAlign={{ top: 'bottom', right: 'right' }}
    dropContent={
      <Box fill pad="medium" background='light-1' margin={{top:'2rem'}} width='100vw'>
      
      <Menu vertical secondary floated fluid>
            <Menu.Item
              name='company'
              
            >
              
              <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            
            <Heading color='brand' level='4'>Our Company</Heading>
           
          }
          
        >
        <Link href="/about">
            <Anchor style={{textDecoration:'none'}} color='dark-1'>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
    </Anchor>
    </Link>
    
    <Link href="/customerstories">
            <Anchor style={{textDecoration:'none'}} color='dark-1'>
          <ListItem button>
            <ListItemIcon>
            <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
          </Anchor>
    </Link>
    <Link href="/faq">
            <Anchor style={{textDecoration:'none'}} color='dark-1'>
          <ListItem button>
            <ListItemIcon>
            <SendIcon />
            </ListItemIcon>
    
            <ListItemText primary="FAQ" />
          </ListItem>
          </Anchor>
          </Link>
        
         
        </List>
            </Menu.Item>
    
            <Menu.Item
              name='services'
              
            >
          
            <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <Link href="/services">
            <Anchor style={{textDecoration:'none'}} color='brand'>
            <Heading level='4'>What we do (Our Services)</Heading>
            </Anchor>
            </Link>
          }
          
        >
    
        <Link href="/services/respitecare">
            <Anchor style={{textDecoration:'none'}} color='dark-1'>
          <ListItem button>
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="Respite Care" />
          </ListItem>
          </Anchor>
            </Link>
            <Link href="/services/seniorpersonalcare">
            <Anchor style={{textDecoration:'none'}} color='dark-1'>
          <ListItem button>
            <ListItemIcon>
            <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="Senior Personal Care" />
          </ListItem>
          </Anchor>
          </Link>
    
          <Link href="/services/companioncare">
            <Anchor style={{textDecoration:'none'}} color='dark-1'>
          <ListItem button>
            <ListItemIcon>
            <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="Companion Care" />
          </ListItem>
          </Anchor>
          </Link>
         
        </List>
            </Menu.Item>
    
           
          </Menu>
      </Box>
    }
    
    />}
  />
// <GrometMenu size='medium' color='brand' />

  }
  </Box>
 
  </Box>
   
     
        </AppBar>
  
   </Visibility>


        
    )
}

/**
 * <AppBar elevation={0}>
        <Toolbar>
        <Typography variant="h4"  className={classes.titleStyle}>
        Jitpomi
        </Typography>
        <Link href='/'>
        <IconButton color='inherit' >
        <HomeIcon/>
        </IconButton>
        </Link>
       
<CallModal/>
     
        </Toolbar>
        </AppBar>
 */