import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function BoxSx() {

  return (
    <Box
      sx={{
        maxWidth: "1680px",
        minHeight: "100vh",
        p: 6,
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"

      >
        <Grid item>
          <Typography variant="h2" gutterBottom >
            FAQ
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{fontWeight: "300"}} gutterBottom >
            ...
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
