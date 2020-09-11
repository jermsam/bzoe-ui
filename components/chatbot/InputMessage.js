/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import {Send} from 'grommet-icons'
/* ========== */
/* InputMessage component - used to type the message */

export const OwnerContext = React.createContext(null);

export default  ({isLoading,owner,sendMessageLoading,typing,resetTyping}) =>{

    const messageInput = React.useRef();
   

    const onSubmit = React.useCallback(
        async (event)=> {
            event.preventDefault();
            /* Disable sendMessage if the message is empty */
            if( messageInput.current.value.length > 0 ) {
                
                sendMessageLoading(messageInput.current.value,[]);
                /* Reset input after send */
                messageInput.current.value = '';
            }
        },[sendMessageLoading]
    )
  
    const handleTyping=React.useCallback(
        ()=> {
           
            /* Tell users when another user has at least started to write */
            if( messageInput.current.value.length > 0 ) {
                console.log('typing: ',owner.name)
                typing(owner.name);
            }
            else {
                console.log('reset typing: ',owner.name)
                /* When there is no more character, the user no longer writes */
                resetTyping(owner.name);
            }
        },[typing,resetTyping,owner]
    )

    // If the chatbox state is loading, loading class for display 
		const loadingClass = isLoading ? 'chatApp__convButton--loading' : '';
	

    return (
      
<form onSubmit={onSubmit}>
        
                <input
					type="text"
					ref={messageInput}
					className="chatApp__convInput"
					placeholder="Text message"
					onKeyDown={handleTyping}
					onKeyUp={handleTyping}
					tabIndex="0"
				/>
               

                <div className={`chatApp__convButton ${loadingClass}`} onClick={onSubmit}>
				<Send color='light-1'/>
				</div>
    </form>
   
    )
}


