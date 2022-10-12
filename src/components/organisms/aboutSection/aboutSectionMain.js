import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ActionButton from "../../atoms/buttons/actionButton";
import SectionWrapper from "../../atoms/wrapperElements/sectionWrapper"
import SubscribeDialogPopUp from "../../atoms/dialogPopUp/subscribeDialogPopUp";

export default function AboutSection() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <SectionWrapper secondaryBackgroundColor lowerWave>
      <Grid
        id="About"
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ px: {xs: 0, md: 20, lg: 30, xl: 40}, }}
      >
        <Grid item>
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            color="text.secondary"
          >
            About
          </Typography>
        </Grid>
        <Grid item sx={{  pt: 15 }} >
          <Typography variant="h5" gutterBottom color="text.secondary" sx={{pb: 2}}>
            Du möchtest helfen die Umwelt zu schützen, indem Du auf Plastik verzichtest - ohne auf durchgeweiche Papierhalme oder leicht zerbrechliche Alternativen aus Glas umzusteigen?

            </Typography>
            <Typography variant="h5" gutterBottom  color="text.secondary" sx={{pb: 2}}>
              Die Trinkhalme von Risao sind aus 100% kompostierbarer Reisstärke produziert. Sie weichen nicht wie Papierhalme auf, sind biologisch abbaubar und ungefährlich für Kinder.

            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{pb: 2}}
              //sx={{fontSize: {xs: "1.5rem", sm: "2.125rem"}}}
              color="text.secondary"
            >
              Ich beginne gerade meine Reise mit Risao als Start-Up, um meine Idee zu testen und Feedback zu sammeln.
              Falls ich Dir also helfen konnte, Dein Getränk nach einem stressigem Tag besser genießen zu können, lass es mich wissen!
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
                text="Mehr Informationen"
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
