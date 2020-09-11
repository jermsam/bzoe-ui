import { Paragraph, Box ,Heading } from "grommet"
import { List,Divider,ListItem,ListItemAvatar,Avatar,ListItemText,makeStyles} from '@material-ui/core';
import React from "react";

const useStyles = makeStyles((theme)=>({

 
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    
  }))

export interface WhyUsCardProps{
    icon:string;
    title:string;
    body:string;
}

export default ({icon,title,body}:WhyUsCardProps) =>{
    const classes =useStyles()

    return (
       
        <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={icon} className={classes.large} />
        </ListItemAvatar>
        <ListItemText
          primary={<Heading level='4'>{title}</Heading>}
          color='primary'
          secondary={
            <Paragraph fill>
           
              {body}
            </Paragraph>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
     
    
    </List>
        
    
    )
}