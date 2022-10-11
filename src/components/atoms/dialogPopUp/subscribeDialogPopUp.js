import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ActionButton from "../buttons/actionButton"
import EmailSubscribtion from "./eMailSubscribtionForm";
import Grid from '@mui/material/Grid';

export default function DialogOrder({open, handleClose, order }){
  const theme = useTheme();


  return(
    <>
    <Dialog
      open={open}
      //TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
    <Box sx={{ backgroundColor: theme.palette.primary.main, p:4 }}>
      <DialogTitle color="text.primary">{"Du würdest gerne mehr erfahren?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Typography variant="body1" color="text.primary">
            Hinterlasse uns deine E-Mail und wir Informieren dich ausführlicher über unser Produkt.
          </Typography>
          <Typography variant="body1" color="text.primary" >
            Du verpasst somit auch keine Sonderangebote mehr und wirst als erster über Neuigkeiten erfahren!
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
      <Grid item sx={{width: "100%"}}>
        <EmailSubscribtion />
      </Grid>
      </Grid>
      </DialogActions>
      </Box>
    </Dialog>
    </>
  )
}
