import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomizedDialogs from './Dialog';
import { Avatar, Card, Grid, Stack } from '@mui/material';

export default function accountDetails() {
  return (
   
      
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <Avatar
              sx={{ width: 70, height: 70 }}
              src="https://companiesmarketcap.com/img/company-logos/512/SLF.png"
            />
          </Grid>
          <Grid item xs={8}>
            <Stack>
              <Typography variant="h6" gutterBottom component="div">
                Sun-Life Rainbow MPF Scheme
              </Typography>
              <Typography variant="caption" gutterBottom component="div">
                Since of 22 Jun 2020 | Account number: 1201203231 | Account
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

             
            </Stack>
          </Grid>
        </Grid>
  

  );
}
