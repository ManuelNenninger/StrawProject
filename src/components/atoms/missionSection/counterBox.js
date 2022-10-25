import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import { useTheme } from '@mui/material/styles';
import CounterDesktop from "./counterDesktop";


export default function CounterBox({trigger, settrigger, ...props}){
  const theme = useTheme();
  const [numberOne, setNumberOne] = React.useState(0);
  const [numberTwo, setNumberTwo] = React.useState(0);
  const [numberThree, setNumberThree] = React.useState(0);
  const [numberFour, setNumberFour] = React.useState(0);
  const [numberFive, setNumberFive] = React.useState(0);
  const plastikEinsparungInGramm = 200;

  React.useEffect(() => {
    let zahl = 0;
    //Der Trigger ist das visibility im Window
    if (!trigger || zahl >= plastikEinsparungInGramm) {
      return;
    }

    let timer1 = setInterval(function () {
      zahl++;

      //0,01kg
      setNumberOne(() => {
        return parseInt((zahl/1000)*100)%10;
      });
      //0,1kg
      setNumberTwo(() => {
        return parseInt((zahl/1000)*10) % 10;
      });
      //1kg
      setNumberThree(() => {
        return parseInt(zahl / 1000) % 10;
      });
      //10kg
      setNumberFour(() => {
        return parseInt(zahl / 10000) % 10;
      });
      //100kg
      setNumberFive(() => {
        return parseInt(zahl / 100000) % 10;
      });

      //Wenn die Zahl erreicht ist, wird das Interval beendet.
      if (zahl === plastikEinsparungInGramm) {
        clearTimeout(timer1);
      }
    }, 1);

    //Wenn useEffect neu durchlauft aufgrund des triggers
    //Wird jedesmal das Interval beendet
    return () => {
      clearTimeout(timer1);
    };
  }, [trigger]);

  return(
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          mt: 5,
          p: {xs: 1, sm: 5},
          py: {xs: 3, sm:5},
          borderRadius: 5
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{}}
        >

          <Grid item sx={{ }}>
            <Typography
              //align="center"
              variant="h5"
              component="h2"
              gutterBottom
              color="text.secondary"
              sx={{ whiteSpace: "pre-line" }}
            >
              Eingespartes Einweg-Plastik{" "}
            </Typography>
          </Grid>
          <Grid item sx={{display: {xs: "none", sm: "block"}}}>
            <CounterDesktop
              numberOne={numberOne}
              numberTwo={numberTwo}
              numberThree={numberThree}
              numberFour={numberFour}
              numberFive={numberFive}
              //settrigger={settrigger}
              variant={"h4"}
            />
          </Grid>
          <Grid item sx={{display: {xs: "block", sm: "none"}}}>
            <CounterDesktop
              numberOne={numberOne}
              numberTwo={numberTwo}
              numberThree={numberThree}
              numberFour={numberFour}
              numberFive={numberFive}
              //settrigger={settrigger}
              variant={"subtitle1"}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
