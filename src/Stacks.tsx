import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Card, Grid, Radio } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CustomizedDialogs from "./Dialog";
import moment from "moment";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
      // minHeight: '80vh',
    // maxHeight: '80vh',
    // maxWidth: '80vh',
    // minWidth: '80vh',
  color: theme.palette.text.secondary,
}));

const date = Date.now();
let formattedDate = (moment(date)).format('DD MMM YYYY') 

export default function BasicStack() {
  
  
  return (
    <Stack spacing={2} sx={{ m: 5 }}>
      <Card sx={{ minWidth: 275, padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <Avatar
              sx={{ width: 70, height: 70 }}
              src="https://companiesmarketcap.com/img/company-logos/512/SLF.png"
            />
          </Grid>
          <Grid item xs={8}>
            <Stack>
              <Stack direction="row" spacing={2}>
              <Typography variant="h6" gutterBottom component="div">
                Sun-Life Rainbow MPF Scheme
              </Typography>

              <Radio
             
                
              />
              </Stack>
              <Typography variant="caption" gutterBottom component="div">
                Since of {formattedDate} | Account number: 1201203231 | Account
                type: Contribution Account
              </Typography>

              <Stack direction="row">
                <Typography
                  variant="caption"
                  gutterBottom
                  component="div"
                  marginTop={2}
                >
                  Company Name
                </Typography>

                <Typography
                  variant="caption"
                  gutterBottom
                  component="div"
                  marginTop={2}
                  marginLeft={25}
                >
                  Account Balance (HKD)
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Typography
                  variant="h6"
                  fontSize={17}
                  marginRight={2}
                  sx={{ fontWeight: "Bold" }}
                >
                  Cherrypicks Resources Limited
                </Typography>

                <Typography
                  variant="caption"
                  marginTop={2}
                  fontSize={15}
                  marginLeft={27}
                  sx={{ fontWeight: "Bold" }}
                >
                  $ 10,000.00
                </Typography>
              </Stack>

              <CustomizedDialogs/>
            </Stack>
          </Grid>
        </Grid>
      </Card>

      <Card sx={{ minWidth: 275, padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <Avatar
              sx={{ width: 60, height: 60 }}
              src="https://play-lh.googleusercontent.com/S7__btDWTeR6-iVR_-uYgW6Sn42snK-1nolqfhzMh1voOwlZ3-V-CibN9Vn6HgxJyWU"
            />
          </Grid>
          <Grid item xs={8}>
            <Stack>
              <Typography variant="h6" gutterBottom component="div">
                Manulife - Global Select (MPF) Scheme
              </Typography>
              <Typography variant="caption" gutterBottom component="div">
                Since of {formattedDate} | Account number: 1201203231 | Account
                type: Contribution Account
              </Typography>

              <Stack direction="row">
                <Typography
                  variant="caption"
                  gutterBottom
                  component="div"
                  marginTop={2}
                >
                  Company Name
                </Typography>

                <Typography
                  variant="caption"
                  gutterBottom
                  component="div"
                  marginTop={2}
                  marginLeft={25}
                >
                  Account Balance (HKD)
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Typography
                  variant="h6"
                  fontSize={17}
                  marginRight={19.5}
                  sx={{ fontWeight: "Bold" }}
                >
                  ABC Company
                </Typography>

                <Typography
                  variant="caption"
                  marginTop={2}
                  fontSize={15}
                  marginLeft={20}
                  sx={{ fontWeight: "Bold" }}
                >
                  $ 12,000.00
                </Typography>
              </Stack>
              <CustomizedDialogs/>
            </Stack>
          </Grid>
        </Grid>
      </Card>

      <Card sx={{ minWidth: 275, padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <Avatar
              sx={{ width: 60, height: 60 }}
              src="https://1000logos.net/wp-content/uploads/2020/09/AIA-Logo.png"
            />
          </Grid>
          <Grid item xs={8}>
            <Stack>
              <Typography variant="h6" gutterBottom component="div">
                AIA - MPF Prime Value Choice
              </Typography>
              <Typography variant="caption" gutterBottom component="div">
                Since of {formattedDate} | Account number: 1201203231 | Account
                type: Contribution Account
              </Typography>

              <Stack direction="row">
                <Typography
                  variant="caption"
                  gutterBottom
                  component="div"
                  marginTop={2}
                >
                  Company Name
                </Typography>

                <Typography
                  variant="caption"
                  gutterBottom
                  component="div"
                  marginTop={2}
                  marginLeft={25}
                >
                  Account Balance (HKD)
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Typography
                  variant="h6"
                  fontSize={17}
                  marginRight={19.5}
                  sx={{ fontWeight: "Bold" }}
                >
                  ABC Company
                </Typography>

                <Typography
                  variant="caption"
                  marginTop={2}
                  fontSize={15}
                  marginLeft={20}
                  sx={{ fontWeight: "Bold" }}
                >
                  $ 15,000.00
                </Typography>
              </Stack>

              <CustomizedDialogs/>

              
            </Stack>
          </Grid>
        </Grid>
      </Card>

      
    </Stack>
    
  );
}
