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
            Versand
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{fontWeight: "300"}} gutterBottom >
            Nachdem die Zahlung bei uns eingegangen ist, wird das Paket umgehend versand.
          </Typography>
          <Typography variant="h5" sx={{fontWeight: "300"}} gutterBottom >
            Der Versand erfolgt in der Regel über DHL oder DPD. Die Regelieferzeit beträgt 3 bis 4 Werktagen.
          </Typography>
          <Typography variant="h5" sx={{fontWeight: "300"}} gutterBottom>
            Die Versandpauschale in Deutschland beträgt, wenn nicht anders angegeben, 2,70 Euro.
          </Typography>
          <Typography variant="h5" sx={{fontWeight: "300"}} gutterBottom >
            Die gesetzliche Umsatzsteuer ist im Preis bereits beinhaltet.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
