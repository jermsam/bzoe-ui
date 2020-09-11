import React from 'react';
import moment from 'moment';
import {Container, Menu,Grid,Divider} from 'semantic-ui-react';
import {Box,Heading,Paragraph,Anchor} from 'grommet';
import {Paper} from '@material-ui/core'
import Link from 'next/link'

class Footer extends React.Component {
    _isMounted = false;
    
    constructor(props){
      super(props)
      this.state = {
        activeItem:''
      }
    }
  
    componentDidMount () {
      this._isMounted = true;
    }
  
    componentWillUnmount () {
      this._isMounted = false;
    }
  
    handleItemClick = (e, {name}) => {
      if (this._isMounted) {
        this.setState ({
          activeItem: name,
        });
      }
    };
  
    render () {
      const {activeItem} = this.state;
  
      return (
        <Box background="brand">
        <Paper elevation={0} style={{
          backgroundImage: `url(${require('public/imgs/respite-min.jpg?webp')})`,
          backgroundPosition:"center",
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
          opacity:0.96,
          border:0
        }} >
        <Box 
     
      pad='large'
  
      height='100%'
      background={{color:'brand',opacity:0.76}} 
      
      >
      <Grid columns={2} centered stackable verticalAlign='middle'>
      <Grid.Column style={{margin:'0px'}}>
<Box fill align='center' pad='large' justify='center'>
<Heading textAlign='center' level='5'>
For the best in-home care Services around Snohomish and King County, Call:
</Heading>
<Heading textAlign='center' level='1'>
+1 (888) 545 4331
</Heading>
<Heading textAlign='center' level='5'>
support@bzoehomecare.com
</Heading>
<Heading textAlign='center' level='5'>
B'Zoe, Inc. -12400 SE 38TH ST. #50462
<p>Bellevue, Washington 98015</p>

</Heading>
</Box>
      </Grid.Column>
      <Grid.Column>
<Box style={{paddingRight:'5rem !important'}} align='center'>
<Heading  level='1'>Remember </Heading>

<Paragraph size='large' fill textAlign='center'>
At B'Zoe Home Care, our primary goal is to help provide a high quality of life for our clients 
and their families by delivering customized, dependable and affordable care. Our team of highly-qualified
 caregivers and staff all live in Snohomish and King Counties, WA area and we are invested in this community.  
</Paragraph>
<Heading level='3' color='light-3' >At your service 24/7 </Heading>
</Box>
      </Grid.Column>
     </Grid>
      </Box>
        </Paper>
          <Menu secondary inverted fluid stackable style={{background: 'transparent'}}>
            <Container>
            <Link href='/about'>
          <Anchor   style={{textDecoration:'none',fontSize:'1.4rem'}}>
            <Menu.Item
            header
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
          
              <span style={{color: 'white'}}>
              About Us
              </span>
           
          </Menu.Item>
          </Anchor>
          </Link>
          <Link href='/services'>
          <Anchor style={{textDecoration:'none',fontSize:'1.4rem'}}>
          <Menu.Item
                  header
                  name="home"
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                >
                
                    <span style={{color: 'white'}}>
                    Services
                    </span>
                 
                </Menu.Item>
                </Anchor>
              </Link>
                <Link href='/faq'>
                <Anchor style={{textDecoration:'none',fontSize:'1.4rem'}}>
                <Menu.Item
                  header
                  name="home"
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                >
                
                    <span style={{color: 'white'}}>
                    FAQs
                    </span>
                 
                </Menu.Item>
              </Anchor>
              </Link>
             
              <Menu.Menu position="right">
              <Link href='/'>
                <Anchor style={{textDecoration:'none',fontSize:'1.4rem'}}>
                <Menu.Item
                  header
                  name="home"
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                >
                
                    <span style={{color: 'white'}}>
                    Copyright {moment ().format ('YYYY')}{" "}
                      &copy;B'Zoe, Inc.
                    </span>
                 
                </Menu.Item>
                </Anchor>
              </Link>
              </Menu.Menu>
            </Container>
          </Menu>
        </Box>
      );
    }
  }

  export default Footer