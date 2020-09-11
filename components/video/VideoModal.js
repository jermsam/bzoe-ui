import React from "react";
import { Button,  Modal, Icon } from "semantic-ui-react";
import ReactPlayer from "react-player";
import { Box,} from "grommet";


export default({url,show,setShow,})=> {
  
  const [playing, setPlaying] = React.useState(false);
  const onClose =()=>{
    setShow(false)
    setPlaying(false)
  }
  return (
    
     
      <Modal
        closeIcon={{
          style: { height: "1.5rem", width: "1.5rem" },
         color: "red",
          name: "close"
        }}
        dimmer='inverted'
        open={show}
        onOpen={() => setShow(true)}
        onClose={onClose}
        size='large'
       
      >
        <Modal.Content>
        <Box className='player-wrapper'>
<ReactPlayer
              light={!show&&'imgs/video-still.png'}
              {...{url,playing}}
              onEnded={() => setShow(false)}
             
              show={show}
              width="100%"
              height="100%"
              controls
              className="react-player"
              playIcon={
                <Button size="massive" icon onClick={() => setShow(true)}
                className='themedButton' 
                >
                  <Icon name="play" />
                </Button>
              }
              
            />
      </Box>
        </Modal.Content>
      </Modal>
    
  );
}
