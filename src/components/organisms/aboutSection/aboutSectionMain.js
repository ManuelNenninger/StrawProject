import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ActionButton from "../../atoms/buttons/actionButton";
import SectionWrapper from "../../atoms/wrapperElements/sectionWrapper"
import SubscribeDialogPopUp from "../../atoms/dialogPopUp/subscribeDialogPopUp";
import {PortableText} from '@portabletext/react'
import {ptComponents} from "../../../../lib/sanity";

export default function AboutSection({content}) {
  const [open, setOpen] = React.useState(false);
  let {aboutTitle, body} = content;
  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log(body);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <SectionWrapper secondaryBackgroundColor lowerWave upperWave>
      <Grid
        id="About"
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ pb: 10, px: {xs: 0, md: 20, lg: 30, xl: 40}, }}
      >
        <Grid item>
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            color="text.secondary"
          >
            {aboutTitle}
          </Typography>
        </Grid>
        <Grid item sx={{  }} >
          <Typography variant="h5" gutterBottom color="text.secondary">
            <PortableText
              value={body}
              components={ptComponents}
            />
          </Typography>
        </Grid>
        <Grid item sx={{  width: "100%", pt: 5 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={3}
          >
            <Grid item md={6} xs={12}>
              <ActionButton
                fullWidth
                variant="contained"
                size="large"
                text="Order"
                href="/preis"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <ActionButton
                fullWidth
                variant="outlined"
                size="large"
                text="Zum Newsletter"
                onClick={handleClickOpen}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <SubscribeDialogPopUp open={open} handleClose={handleClose} />
    </SectionWrapper>
  );
}
