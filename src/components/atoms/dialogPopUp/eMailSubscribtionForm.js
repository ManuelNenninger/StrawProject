import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";




export default function CheckboxLabels() {
  const theme = useTheme();

//https://www.youtube.com/watch?v=ByG--A6jPYk

  const StyledTextField = styled(TextField)({
    mr: 0,
    label: {
      color: theme.palette.secondary.main
    },
    input: {
      color: theme.palette.secondary.main
    },
    fieldset: {
      borderColor: theme.palette.secondary.main,
      borderRight: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,

    },
    "& .MuiInputBase-root": {
      height: 60
    },
    "& label.Mui-focused": {
      color: theme.palette.secondary.main
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.secondary.main,
        borderRight: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.main,
        borderRight: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,

      }
    }
  });

  return (
    <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{width: "100%", mx: 2}}
      >
        <Grid item xs={7} sm={9}>
          <Box sx={{ height: "100%" }}>
            <StyledTextField
              fullWidth
              id="input-with-sx"
              label="With sx"
              label="E-Mail"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={5} sm={3}>
          <Button
            color="secondary"
            fullWidth
            variant="contained"
            sx={{
              my: 0,
              px: 2,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              height: 60,
              boxShadow: "none",
              ":hover": {
                backgroundColor: theme.palette.secondary.light,
                boxShadow: "none"
              }
            }}
          >
            Subscribe
          </Button>{" "}
        </Grid>
      </Grid>
  );
}
