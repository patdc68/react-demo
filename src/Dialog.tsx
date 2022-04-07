import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AccountDetails from './AccountDetails';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    // minHeight: '80vh',
    // maxHeight: '80vh',
    // width: '80%',
    // minWidth: '80vh',
  },
  "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
    maxWidth: "none",
    width: "70%",
    maxHeight: "none",
    height: "90%",
  },
//   '& MuiPaper-root': {
//  maxWidth: "none",
//  width: "80%"
//   },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle  sx={{ m: 0, p: 2 }} {...other} >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button disableRipple style={{textTransform: 'none'}} variant="text" sx={{ minHeight: 0, minWidth: 0, padding: 0 }} onClick={handleClickOpen}>
        Account Details
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ width: "100%" }}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Scheme Details
        </BootstrapDialogTitle>
        <DialogContent dividers>

          <AccountDetails/>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
