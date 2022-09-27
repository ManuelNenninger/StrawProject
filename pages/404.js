import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import HeroPicture from "../public/404.svg";
import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function FourOhFour() {
  return (
    <Box
      sx={{
        maxWidthwidth: "1680px",
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ minHeight: "100%" }}
      >
        <Grid item sx={{ width: "100%" }}>
          <Box sx={{ p: 1 }}>
            <Box>
              <Image
                src={HeroPicture}
                width={230}
                height={100}
                layout="responsive"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Link href="/">
            <a>
              <Typography variant="h2" gutterBottom>
                Go Back Home
              </Typography>
            </a>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
