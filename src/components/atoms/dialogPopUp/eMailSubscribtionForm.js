import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';





export default function CheckboxLabels() {
  const theme = useTheme();

//https://www.youtube.com/watch?v=ByG--A6jPYk
  const CssTextField = styled(TextField)({
    height: "100%",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    color: theme.palette.secondary.main,
    label: {
      color: theme.palette.secondary.main,
    },
    input: {
      color: theme.palette.secondary.main,
    },
    '& label.Mui-focused': {
      color: theme.palette.secondary.main,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main,
      },
    },
  });

  return (
    <FormGroup row>
      <FormControlLabel
        label
        sx={{ mr: 0 }}
        control={
          <CssTextField
            id="filled-basic"
            label="E-Mail Adresse"
            variant="outlined"
          />
        }
      />
      <FormControlLabel
        label
        control={
          <Button
            sx={{
              height: "100%",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              textTransform: "lowercase",
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.main
            }}
            endIcon={<MarkEmailReadRoundedIcon />}
            disableElevation
            variant="contained"
          >
            Subscribe
          </Button>
        }
      />
    </FormGroup>
  );
}
