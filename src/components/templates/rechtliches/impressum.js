import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function BoxSx() {

  return (
    <Box
      sx={{
        maxWidth: "1680px",
        height: "100vh",
        p: 6,
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography variant="h2" component="h1" gutterBottom>
            Impressum{" "}
          </Typography>
          <Typography variant="h4" gutterBottom>
            Angaben gemäß § 5 TMG
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="pre">
            {"Manuel Nenninger | BrandName \nHedwigstrasse 2\n 80636 München"}
          </Typography>
          <Typography variant="h4" gutterBottom>
            Kontakt
          </Typography>
          <Typography variant="subtitle1" component="pre" gutterBottom>
            {"Telefon: +49 151 16331310\nE-Mail: manuel.nenninger@gmail.com"}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
