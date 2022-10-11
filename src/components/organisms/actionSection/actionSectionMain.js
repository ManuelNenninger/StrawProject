import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeroDescribtion from "../../atoms/actionSection/heroDescribtion";
import HeroPicture from "../../atoms/actionSection/heroPicture";
import {  useRef } from "react";
import useIsInViewport from "../../atoms/visibilityFunction/visibilityFunction"
import Grow from "@mui/material/Grow";

export default function HeroSection() {
  const ref1 = useRef(null);
  const isInViewport = useIsInViewport(ref1);
  //console.log("isInViewport1: ", isInViewport);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        maxWidth: "1680px",
        px: {xs: 3,  md:6}
      }}
    >
      <Grow
         in={isInViewport}
         style={{ transformOrigin: "0 0 0" }}
         {...(isInViewport ? { timeout: 2000 } : {})}
       >
        <Grid
          ref={ref1}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
          spacing={1}
        >
          <Grid item xs={12} md={6} >
            <HeroDescribtion />
          </Grid>
          <Grid item xs={12} md={6} sx={{mb: {xs: 15, md: 0}}}>
            <HeroPicture />
          </Grid>
        </Grid>
      </Grow>
    </Box>
  );
}
