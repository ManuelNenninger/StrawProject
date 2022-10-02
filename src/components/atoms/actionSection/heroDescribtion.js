import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ActionButton from "../buttons/actionButton"
import { useTheme } from '@mui/material/styles';
import { useAppContext } from "../../../appContext";


export default function HeroDescribtion(props) {
  const theme = useTheme();
  const value = useAppContext();
  let { heroContent } = value.content;

  return (
    <>
      <Box sx={{}}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ pr: { xs: "none", md: 15 }, mt: {xs: 10, md: 0} }}
        >
          <Grid item >
            <Typography
            variant="h2"
            gutterBottom
            component="h1"
            //sx={{ fontSize: { xs: "3.75rem", lg: "5.375rem"}}}

            >
              {heroContent.heroTitel}
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant="h5" component="h2" gutterBottom sx={{  }}>
              {heroContent.heroDescribtion}
            </Typography>
          </Grid>
          <Grid item sx={{ width: "100%", pt: 2 }}>
            <Box>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={3}
              >
                <Grid item md={6} xs={12}>
                  <ActionButton fullWidth variant="contained" size="large" text="Order" secondaryColor href="/preis"/>
                </Grid>
                <Grid item md={6} xs={12}>
                  <ActionButton fullWidth variant="outlined" size="large" text="More information" secondaryColor/>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
