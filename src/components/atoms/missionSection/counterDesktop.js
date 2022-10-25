import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';

export default function Counter({
  numberOne,
  numberTwo,
  numberThree,
  numberFour,
  numberFive,
  settrigger,
  variant,
}) {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          sx={{
            py: {xs: 1, sm: 2},
            borderColor: "divider",
            "& > div": {
              px: 2
            }
          }}
        >
          <Grid
            item

            sx={{
              mr: {xs: 0.5, sm: 1},
              borderColor: "divider",
              borderRadius: 2,
              backgroundColor: theme.palette.primary.main
            }}
          >
            <Typography variant={variant}  >{numberFive}</Typography>
          </Grid>
          <Grid

            item
            sx={{
              borderColor: "divider",
              borderRadius: 2,
              backgroundColor: theme.palette.primary.main,
              mx: {xs: 0.5, sm: 1}
            }}
          >
            <Typography variant={variant} >{numberFour}</Typography>
          </Grid>
          <Grid

            item
            sx={{
              mx: {xs: 0.5, sm: 1},
              borderColor: "divider",
              borderRadius: 2,
              backgroundColor: theme.palette.primary.main
            }}
          >
            <Typography variant={variant} >{numberThree}</Typography>
          </Grid>
          <Typography color="text.secondary" variant={variant} >,</Typography>
          <Grid

            item
            sx={{
              mx: {xs: 0.5, sm: 1},
              borderColor: "divider",
              borderRadius: 2,
              backgroundColor: theme.palette.primary.main
            }}
          >
            <Typography variant={variant} >{numberTwo}</Typography>
          </Grid>
          <Grid

            item
            sx={{
              mr: {xs: 0.5, sm: 1},
              borderColor: "divider",
              borderRadius: 2,
              backgroundColor: theme.palette.primary.main
            }}
          >
            <Typography variant={variant} >{numberOne}</Typography>
          </Grid>
          <Grid item  sx={{  }}>
            <Typography color="text.secondary" variant={variant}>kg</Typography>
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
