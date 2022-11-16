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
// import { useAppContext } from "../../../appContext";
import ActionButton from "../../atoms/buttons/actionButton";
import SubscribeDialogPopUp from "../../atoms/dialogPopUp/subscribeDialogPopUp";
import {  useRef } from "react";
import useIsInViewport from "../../atoms/visibilityFunction/visibilityFunction"
import Grow from "@mui/material/Grow";
import {PortableText} from '@portabletext/react'
import {ptComponents, urlFor} from "../../../../lib/sanity";

export default function BoxSx({content}) {
  const theme = useTheme();
  // const value = useAppContext();
  // let { infoContentArray, infoHeadline } = value.content.infoContent;
  const [open, setOpen] = React.useState(false);
  let {sectionTitle="", cardbuilder=[]} = content

  const ref1 = useRef(null);
  const isInViewport = useIsInViewport(ref1);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const GridCard = ({cardtitle, mainImage, body}, index) => {
    return (
      <>
        <Grid item xs={12} md={6} sx={{}} key={"CardInfo_" + index}>
          <Card sx={{ maxWidth: 400, mx: "auto", backgroundColor: theme.palette.primary.main}}>
            <CardMedia
              component="img"
              height="400"
              image={urlFor(mainImage).url()}
              alt="green iguana"
            />
            <CardContent sx={{}}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              >
                {cardtitle}
              </Typography>
              <Typography variant="body2" >
                <PortableText
                  value={body}
                  components={ptComponents}
                />
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </>
    );
  };

  return (
    <SectionWrapper secondaryBackgroundColor upperWave lowerWave>
    <Grow
       in={isInViewport}
       style={{ transformOrigin: "0 0 0" }}
       {...(isInViewport ? { timeout: 2000 } : {})}
     >
      <Grid
        ref={ref1}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sx={{ pb: 10, pt: 5 }}>
          {" "}
          <Typography variant="h3" gutterBottom color="text.secondary" sx={{fontWeight: "300", display: {xs: "none", sm: "block"}}} align="center">
            {sectionTitle}
          </Typography>
          <Typography variant="h4" gutterBottom color="text.secondary" sx={{fontWeight: "300", display: {xs: "block", sm: "none"}}} align="center">
            {sectionTitle}
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
            {cardbuilder.map(function (object, index) {
              return GridCard(object, index);
            })}
          </Grid>
        </Grid>
        <Grid item sx={{ pt: 10, }}>
        <ActionButton
          fullWidth
          variant="outlined"
          size="large"
          text="Zum Newsletter"
          onClick={handleClickOpen}
        />
        </Grid>
      </Grid>
      </Grow>
      <SubscribeDialogPopUp open={open} handleClose={handleClose} />
    </SectionWrapper>
  );
}
