import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import SectionWrapper from "../../atoms/wrapperElements/sectionWrapper"
import { useTheme } from "@mui/material/styles";
import { useAppContext } from "../../../appContext";
import ActionButton from "../../atoms/buttons/actionButton";
import SubscribeDialogPopUp from "../../atoms/dialogPopUp/subscribeDialogPopUp";


export default function BoxSx() {
  const theme = useTheme();
  const value = useAppContext();
  let { infoContentArray, infoHeadline } = value.content.infoContent;
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const GridCard = (object, index) => {
    return (
      <>
        <Grid item xs={12} md={6} sx={{}}>
          <Card sx={{ maxWidth: 400, mx: "auto", backgroundColor: theme.palette.primary.main}}>
            <CardMedia
              component="img"
              height="400"
              image={object.Image}
              alt="green iguana"
            />
            <CardContent sx={{}}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              >
                {object.ActionTitel}
              </Typography>
              <Typography variant="body2" >
                {object.Description}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </>
    );
  };

  return (
    <SectionWrapper secondaryBackgroundColor upperWave bottomDistance>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sx={{ pb: 15, pt: 5 }}>
          {" "}
          <Typography variant="h3" gutterBottom color="text.secondary" sx={{fontWeight: "300", display: {xs: "none", sm: "block"}}} align="center">
            {infoHeadline}
          </Typography>
          <Typography variant="h4" gutterBottom color="text.secondary" sx={{fontWeight: "300", display: {xs: "block", sm: "none"}}} align="center">
            {infoHeadline}
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={20}
          >
            {infoContentArray.map(function (object, index) {
              return GridCard(object, index);
            })}
          </Grid>
        </Grid>
        <Grid item sx={{ pt: 10, }}>
        <ActionButton
          fullWidth
          variant="outlined"
          size="large"
          text="Mehr Informationen"
          onClick={handleClickOpen}
        />
        </Grid>
      </Grid>
      <SubscribeDialogPopUp open={open} handleClose={handleClose} />
    </SectionWrapper>
  );
}
