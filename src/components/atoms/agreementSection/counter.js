import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';

export default function Counter({
  numberOne,
  numberTwo,
  numberThree,
  settrigger
}) {

  const theme = useTheme();

  return (
    <>
      <Box sx={{m: 1,backgroundColor: theme.palette.primary.main}}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            p: 1,
            "--Grid-borderWidth": "1px",
            //borderTop: 'var(--Grid-borderWidth) solid',
            //borderLeft: 'var(--Grid-borderWidth) solid',
            borderColor: "divider",
            '& > div': {
              px: 4,
            },
            "& :not(:last-of-type)": {
              borderRight: "var(--Grid-borderWidth) solid",
              //borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: "divider",
            }
          }}
        >
          <Grid xs={3} item>
            <Typography
              variant="h4"
              sx={{color: theme.palette.secondary.main, fontSize: {xs: "1.25rem", md: "2.125rem"}}}
            >
              {numberThree}
            </Typography>
          </Grid>
          <Grid xs={3} item >
          <Typography
            variant="h4"
            sx={{color: theme.palette.secondary.main, fontSize: {xs: "1.25rem", md: "2.125rem"}}}
          >
            {numberTwo}
          </Typography>
          </Grid>
          <Grid xs={3} item >
          <Typography
            variant="h4"
            sx={{color: theme.palette.secondary.main, fontSize: {xs: "1.25rem", md: "2.125rem"}}}
          >
            {numberOne}
          </Typography>
          </Grid>
          <Grid xs={3} item >
          <Typography
            variant="h4"
            sx={{color: theme.palette.secondary.main, fontSize: {xs: "1.25rem", md: "2.125rem"}}}
          >
            mg
          </Typography>
          </Grid>
        </Grid>
        {/*<Button
          variant="outlined"
          onClick={() =>
            settrigger((prev) => {
              return !prev;
            })
          }
        >
          Test
        </Button>*/}
      </Box>
    </>
  );
}
