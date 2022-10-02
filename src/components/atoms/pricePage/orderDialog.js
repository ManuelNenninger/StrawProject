import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ActionButton from "../buttons/actionButton"


export default function DialogOrder({open, handleClose, order }){
  const theme = useTheme();
  const mailText = "mailto:manuel.nenninger@gmail.com?subject=Bestellung Reis Trinkhalm  "+ order + " Stk.&body=Hey, ich würde gerne "+ order + " nachhaltige Trinkhalme bestellen!"
  console.log(mailText);
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
      <DialogTitle color="text.primary">{"Deine Bestellung ist fast geschafft!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Typography variant="body1" color="text.primary">
            Da ich erst vor kurzem gestartet bin, habe ich noch kein vollständiges Bezahlsystem. Klick einfach auf den Button "Bestellen via Mail".
            Anschließend öffnet sich dein E-Mail Postfach und Du kannst die forgefertigte Mail ganz einfach versenden.
            Im Anschluss erhälst Du alle Informationen sowie dein Paket innerhalb von 3 - 4 Tagen.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ActionButton fullWidth variant="contained" onClick={handleClose} size="large" text="Bestellen via Mail" secondaryColor href={mailText}/>
      </DialogActions>
      </Box>
    </Dialog>
    </>
  )
}
