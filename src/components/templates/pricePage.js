import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from '@mui/material/styles';
import ActionButton from "../atoms/buttons/actionButton";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PriceCard from "../atoms/pricePage/priceCard"

export default function BoxSx() {
  const theme = useTheme();



  return (
    <Box
      sx={{
        maxWidth: "1680px",
        minHeight: "100vh",
      }}
    >
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Typography
          align="center"
          gutterBottom
          variant="h2"
          component="div"
          sx={{display: {xs: "none", sm: "block"}, pb: {xs: 1, md: 10}, pt: {xs: 5, md: 0}}}
        >
          Preisübersicht
        </Typography>
        <Typography
          align="center"
          gutterBottom
          variant="h3"
          component="div"
          sx={{display: {xs: "block", sm: "none"}, fontWeight: "300", pb: {xs: 0, md: 10}, pt: {xs: 5, md: 0}}}
        >
          Preisübersicht
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            "& > div": {
              px: { sm: 3, md: 5, },
              py: { xs: 7, md: 0 }
            }
          }}
        >
          <Grid item sx={{}}>
            <PriceCard
              mainTitle="Probier Pack"
              price="4"
              order="50"
            />
          </Grid>
          <Grid item sx={{ }}>
          <PriceCard
            mainTitle="Basic Pack"
            price="7"
            order="100"
          />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Box>
  );
}
