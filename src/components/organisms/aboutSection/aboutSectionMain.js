import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ActionButton from "../../atoms/buttons/actionButton";
import SectionWrapper from "../../atoms/wrapperElements/sectionWrapper"

export default function AboutSection() {
  return (
    <SectionWrapper secondaryBackgroundColor upperWave lowerWave>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ px: {xs: 0, md: 15, lg: 20, xl:25}, }}
      >
        <Grid item>
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{ }}
            color="text.secondary"
          >
            About
          </Typography>
        </Grid>
        <Grid item sx={{  pt: 15 }}>
          <Typography variant="h4" gutterBottom sx={{fontSize: {xs: "1.5rem", sm: "2.125rem"}}} color="text.secondary">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
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
            <Grid item xs={6}>
              <ActionButton
                fullWidth
                variant="contained"
                size="large"
                text="Order"
              />
            </Grid>
            <Grid item xs={6}>
              <ActionButton
                fullWidth
                variant="outlined"
                size="large"
                text="More information"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
