import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { RaisedButton } from 'material-ui';
import CustomizedDialogs from './Dialog';
import TermsAndCondition from './TermsAndCondition';





export default function CustomButtons() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

<Stack direction="row" spacing={2}  marginBottom={9} >
      
      <Button  style={{ backgroundColor: '#BAAF9E', textTransform: 'none', borderColor: '#000000', maxWidth: '120px', minWidth: '120px' }} sx={{ borderRadius: 12.5 }} variant="contained" >
        Cancel
      </Button>
      {/* <Button onClick={handleClickOpen} style={{textTransform: 'none', borderColor: '#000000', maxWidth: '120px', minWidth: '120px' }} sx={{ borderRadius: 12.5 }} variant="contained">
        Submit
       
      </Button> */}

      <TermsAndCondition/>

    </Stack>
    </div>

  );
}
