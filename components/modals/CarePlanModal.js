import React from 'react';

import Card from 'components/card'
import {Box,Layer,Button,Heading} from 'grommet' 
import ReactCardCarousel from "react-card-carousel";
import MyList from 'components/lists'

const data=[
    {
     title:'Companionship Care',
     description:'Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.',
    
     image:'/imgs/companionship.png'
    },
    {
     title:'Personal Care',
     description:'Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.',
    
     image:'/imgs/personalcare.png'
    },
    {
     title:'Household Management',
     description:'Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.',
    
     image:'/imgs/householdmanagement.png'
    },
    {
        title:'Food / Fluid Preparation',
        description:'Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.',
       
        image:'/imgs/mealpreparation.jpeg'
       },
       {
           title:'Transportation',
           description:'Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.',
          
           image:'/imgs/transportation.png'
          },{
            title:'Food / Fluid / Medication Reminder',
            description:'Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.',
           
            image:'/imgs/foodfluidmedicationassistance.png'
           },{
            title:'Activity / Exercise',
            description:'Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.',
           
            image:'/imgs/activityexerciseassistance.png'
           },
          
]

export default({onClose})=>{
    const [menu,setMenu] = React.useState(data); 
    const [cart,setCart] = React.useState([]); 
 
    const submit =()=>{
 
     console.log(cart);
    // setMenu([])
   onClose()
    }
 
    return(
        <Layer
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
              background='brand'
            >
<Box  height='100vh' align='center' justify='center'  background={{color:'brand',opacity:'strong'}}>
<Box gap='large' align='center' fill   >
        <Box width='360px' height='auto' margin='small' pad='small' elevation='medium' background={{color:'white',opacity:'strong'}} align='center'>
        <Heading level='3' color='brand'> Define Your Care Plan</Heading>
      
      {menu.length>0&&  <Box  style={{
        position: "relative",
        height: "30vh",
        width: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "middle",
        margin:'10px',
        padding:'10px'
      }}>
         
         <ReactCardCarousel disable_box_shadow>
             {
                menu.map((card,)=><Card
                 background={{color:'white',opacity:'strong'}}
                 style={{backgroundColor:'white'}}
                onClick={()=>{
                    // remove from menu
                   const newMenu= menu.filter(({title})=>title!==card.title);
                   setMenu(newMenu);
                   // add to cart
                  cart.push(card)
                }}
                 key={card.title}
                 {...card}
                 action='ADD ITEM'
                 />)
             }
         </ReactCardCarousel>
         
         
    </Box>}
   
    <Box margin='small' width='400px'>
       <MyList {...{cart}}
       onClick={(cartItem)=>{
        const newCart= cart.filter(({title})=>title!==cartItem.title);
        setCart(newCart);
        menu.push(cartItem)
       }}
       />
    {cart.length>0&& <Button 
    onClick={submit}
    margin='small' 
        primary
    size='large' 
    color='brand'
     label='CONFIRM CARE PLAN'
     />}
        </Box>
        </Box>
    </Box>
    </Box>

            </Box>
            </Layer>
    );

}