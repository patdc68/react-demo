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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
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
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
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

export default function TermsAndCondition() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{textTransform: 'none', borderColor: '#000000', maxWidth: '120px', minWidth: '120px' }} sx={{ borderRadius: 12.5 }} variant="contained" onClick={handleClickOpen}>
        Confirm
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Terms and Condition
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend, turpis sed facilisis hendrerit, lectus arcu vehicula lectus, nec iaculis sem ligula id est. Curabitur placerat eros eu turpis viverra semper. Morbi a finibus felis, eu sollicitudin lacus. Curabitur vulputate, ex sed sollicitudin dictum, justo ipsum venenatis sapien, vel placerat nunc erat id nibh. Integer sollicitudin enim ut vestibulum porttitor. Morbi nec quam quam. Vestibulum rhoncus consectetur diam. Phasellus fringilla fringilla nibh et iaculis. Morbi ac nibh eget nunc elementum sodales nec et ante. Donec at leo quis sapien consequat posuere vitae id quam. Etiam scelerisque lacinia nisl. Suspendisse eu dignissim turpis, ut euismod nisi. Morbi aliquam ut urna dignissim finibus.
          </Typography>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Accept
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
