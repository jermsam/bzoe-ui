import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RingVolumeIcon from '@material-ui/icons/RingVolume';
import { IconButton } from '@material-ui/core';
import PhoneInput from 'react-phone-input-2'
import validator from 'validator';

export default function CallModal() {
  const [open, setOpen] = React.useState(false);
  const [phone, setPhone] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SendCall =()=>{

    if(validator.isMobilePhone(phone,['en-US'])){
        console.log('calling ... ',phone)
        handleClose()
    }

  }

  return (
    <div>
 
      <IconButton  onClick={handleClickOpen} >
      <RingVolumeIcon/>
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Get in touch</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Send us your phone number and we shall connect you.
          </DialogContentText>
          <PhoneInput
          country={'us'}
          value={phone}
          onChange={value =>setPhone(`+${value}`)}
        />
        </DialogContent>
        <DialogActions>
        
          <Button onClick={handleClose} color="primary">
           Close
          </Button>
          <Button onClick={SendCall} color="primary" variant="contained">
          Send
        </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
