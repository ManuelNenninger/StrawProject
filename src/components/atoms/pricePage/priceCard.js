import * as React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from '@mui/material/styles';
import ActionButton from "../buttons/actionButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OrderDialog from "./OrderDialog";

export default function PriceCard (props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  let { price, order } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          minWidth: 350,
          py: 4,
          px: {xs: 7, md: 4},
          border: 2,
          borderRadius: 5,
          borderColor: "secondary.main",
          boxShadow: 3
        }}
      >
        <Grid item sx={{ pb: 20 }}>
          <Typography color="text.secondary" gutterBottom variant="h3" component="div">
            {props.mainTitle}
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="text.secondary" gutterBottom variant="h5" component="div">
            {order} Stück
          </Typography>
        </Grid>

        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography color="text.secondary" gutterBottom variant="h2" component="div">
                {price + "€"}
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="text.secondary" gutterBottom variant="subtitle1" component="div">
                {parseInt(price) / parseInt(order)} € / Stück
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ width: "100%" }}>
        <ActionButton
          fullWidth
          variant="contained"
          size="large"
          text="Order"
          onClick={handleClickOpen}
        />
        </Grid>
      </Grid>
      <OrderDialog open={open} handleClose={handleClose} order={order}/>
    </>
  );
};
