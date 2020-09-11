import React from 'react'
import {Box,} from 'grommet'

import Email from 'react-email-autocomplete';
import Phone  from 'react-phone-input-2'

const style= {
    padding:'8px',
    outlineColor:'#1565C0'
    ,outlineWidth:'thin' ,
    border:'1px solid #DEDEDD',
    borderRadius:'3px',
    WebkitBorderRadius:'3px',
    MozBorderRadius:'3px',
    width:'100%'
}

export const TextInput= ({label,...rest})=>(
    <Box fill>
<input 
    {...rest} 
    className='placeholder-fix'
    style={style}
    />
    </Box>
    )

    

    export const EmailInput= ({label,...rest})=>(
        <Box fill className="form-group">
         <Email className="form-control placeholder-fix"
         domains={['gmail.com', 'yahoo.com', 'outlook.com','hotmail.com','comcast.com']}
          style={style}
          {...rest} 
         />
        </Box>
        )

        export const PhoneInput =(props)=><Phone {...props} inputStyle={
            {
                minWidth: '100%',
                maxWidth: '100%',
            }
        } />
