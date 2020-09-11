/* eslint-disable no-param-reassign */
import React from 'react';
import {Box} from 'grommet'
import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export default ()=>{
 

    React.useEffect(
      ()=>{
          /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
          ((d, m)=>{
            const kommunicateSettings = {"appId":publicRuntimeConfig.KOMMUNICATE_APP_ID,"popupWidget":true,"automaticChatOpenOnNavigation":true};
            const s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            const h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
      },[]
  )
  /*
  (function(d, m){
    var kommunicateSettings = {"appId":"e8f58ca3433643ef533dde87c0386cf8","popupWidget":true,"automaticChatOpenOnNavigation":true};
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    window.kommunicate = m; m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
  */

  return (

    <Box  align="end" justify="end" direction='row' 
        style={{
            border:'0px',
            position:'fixed',
            bottom:'15vh',
            right:'1.5vw',
            zIndex:'2147483647'
        }}
        
       />  
  )
  
}