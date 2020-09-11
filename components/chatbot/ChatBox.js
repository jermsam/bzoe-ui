/* eslint-disable react/no-array-index-key */
import React from 'react'

import {Box,Heading,} from 'grommet'
import {Button, Image,Card} from 'semantic-ui-react'
import InputMessage from './InputMessage';



/* ========== */
/* Title component */
const Title =({img,title})=><Box gap='medium' direction='row' pad={{top:'small',horizontal:'medium'}} fill className="chatApp__convTitle">
   { img&&<Button basic circular icon={<Image src={img} alt='logo' size='mini'/>}/>}
    <Heading level='4' color='brand'>{title}</Heading>
</Box>

/* end Title component */
/* ========== */



/* ========== */
/* TypingIndicator component */
const TypingIndicator = ({isTyping,owner}) =>{

    let typersDisplay = '';
    let countTypers = 0;
    /* for each user writing messages in chatroom */
   
    // loop over values
// eslint-disable-next-line no-restricted-syntax
for (const key of Object.keys(isTyping)) {
      /* retrieve the name if it isn't the owner of the chatbox */
        
      if( key !== owner.name && isTyping[key] ) {
        typersDisplay += `, ${  key}`;
        // eslint-disable-next-line no-plusplus
        countTypers++;
    }
  }
    /* formatting text */
		typersDisplay = typersDisplay.substr(1);
		typersDisplay += (( countTypers > 1 ) ? ' are ' : ' is ');
        /* if at least one other person writes */
        
		if ( countTypers > 0 ) {
			return (
				<div className="chatApp__convTyping" style={{color:'blue'}}>{typersDisplay} writing
				<span className="chatApp__convTypingDot" />
				</div>
			);
		}
		return (
			<div className="chatApp__convTyping" />
		);
}

/* end TypingIndicator component */
/* ========== */

/* ========== */
/* MessageList component - contains all messages */
const MessageList =({messages,owner,sendMessageLoading,sendEvent,})=> {


   
		return (
			<div className="chatApp__convTimeline">
			{messages.slice(0).reverse().map(
				({id,sender,message,card,options}) =><MessageItem
                key={id}
                {...{sender,message,card,owner,options,sendMessageLoading,sendEvent,id
                    }}
                />
			)}
			</div>
		);
	
}
/* end MessageList component */
/* ========== */



const makeColor = (value) =>{
    if(value.toLowerCase().includes('franchise')) return 'orange';
    if(value.toLowerCase().includes('price')) return 'red';
    return 'green'
}

const OptionsList = ({options,sendMessageLoading,setIsAnswered,id})=>{
    const  [items,setItems]=React.useState([])
   
    

    

    React.useEffect(
        ()=>{
            setItems(options)
        },[options]
    )

    const answer =React.useCallback(
        async(option)=>{
           // 
          // console.log(message)
           sendMessageLoading(option,{id});

           // sendMessageLoading(owner,ownerAvatar,option,[])
                 setItems([])
                 setIsAnswered(true)
        },[sendMessageLoading,setIsAnswered,id]
    )

   
    
        return(
            <div style={{margin:'10px'}}>
                {
                   items.slice(0).map(
                        (option,index)=>
                       <Button 
                        style={{margin:'5px'}}
                        key={index} circular 
                        color={makeColor(option)}
                       onClick={(e)=>{
                           e.preventDefault()
                           answer(option)
                        }}
                        >
                        {option}
                        </Button>
                    )
                }
            </div>
        )
    }

/* ========== */
/* MessageItem component - composed of a message and the sender's avatar */
const MessageItem= ({owner,sender,message,options,sendMessageLoading,card,id}) => {
    const [isAnswered,setIsAnswered]=React.useState(false)
          
		/* message position formatting - right if I'm the author */
		const messagePosition = ((owner.userId === sender.userId ) ? 'chatApp__convMessageItem--right' : 'chatApp__convMessageItem--left');
		return (
            <div>
            
                
             {message&&<div  className={`chatApp__convMessageItem ${messagePosition} clearfix`}>
				{!(owner.userId === sender.userId ) &&<img src={sender.avatar} alt={sender} className="chatApp__convMessageAvatar" />}
				<div className="chatApp__convMessageValue" dangerouslySetInnerHTML={{__html:message}}/>
                
                </div>}
                
                {card&&<Card
    image={card.imageUri}
    header={card.title}
    meta={card.title!=='Care Giver Qualifications'?'Services like:':''}
    description={card.subtitle}
    extra=''
  />
                }
                {options&&(options.length>0)&&!isAnswered&&<OptionsList  {...{options,sendMessageLoading,owner,setIsAnswered,id}}/>}
               
               
            </div>
             

           
			
		);
	
}
/* end MessageItem component */
/* ========== */

 
/* ========== */
/* ChatBox component - composed of Title, MessageList, TypingIndicator, InputMessage */
export default ({owner,typing,isTyping,resetTyping,sendEvent,sendMessage,messages,})=>{
   
 
    const [isLoading,setIsLoading] = React.useState(false)

   

   
    	/* catch the sendMessage signal and update the loading state then continues the sending instruction */
	const sendMessageLoading =React.useCallback(
        async (message,params) =>{
       
            setIsLoading(true)
             await sendMessage(message,params);
            setIsLoading(false)
        },[sendMessage]
    )


    return (
        <div className="chatApp__conv">
            <Title/>
    <MessageList {...{owner,messages,sendMessageLoading,sendEvent,}}/>
            <div className="chatApp__convSendMessage clearfix">
            
                <TypingIndicator {...{owner,isTyping}}/>
    <InputMessage {...{isLoading,owner,sendMessageLoading,typing,resetTyping}}/>
            </div>
        </div>
    );
}

/* end ChatBox component */
/* ========== */

  
  
  