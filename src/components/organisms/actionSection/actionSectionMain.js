import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeroDescribtion from "../../atoms/actionSection/heroDescribtion";
import HeroPicture from "../../atoms/actionSection/heroPicture";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        maxWidth: "1680px",
        px: 6,
      }}
    >
      <Grid
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
    </Box>
  );
}
