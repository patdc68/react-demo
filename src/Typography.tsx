import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function Types() {
  return (

    <Box sx={{ width: "100%", maxWidth: 500, marginLeft: 5, marginTop: 5 }}>

      <Typography variant="subtitle1" gutterBottom component="div">
        You are applying for Employee Choice Arrangement
      </Typography>

      <Typography variant="h6" gutterBottom component="div">
        Transfer Out
      </Typography>

      <Typography variant="body2" gutterBottom component="div" marginTop={1}>
      Please select the account you want to transfer out. You can select single account to make transfer.
      </Typography>
    </Box>
  );
}
