import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Counter from "../../atoms/agreementSection/counter";
import { useTheme } from '@mui/material/styles';
import {  useRef } from "react";
import useIsInViewport from "../../atoms/visibilityFunction/visibilityFunction"

export default function BoxSx() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [numberThree, setNumberThree] = useState(0);
  const [trigger, settrigger] = useState(false);
  const ref1 = useRef(null);
  const isInViewport = useIsInViewport(ref1);
  //console.log("isInViewport1: ", isInViewport);


  const theme = useTheme();


  useEffect(() => {
    let zahl = 0;
    //Der Trigger ist das visibility im Window
    if (!isInViewport || zahl >= 400) {
      return;
    }

    let timer1 = setInterval(function () {
      zahl++;

      setNumberOne(() => {
        return zahl % 10;
      });
      setNumberTwo(() => {
        return parseInt(zahl / 10) % 10;
      });
      setNumberThree(() => {
        return parseInt(zahl / 100) % 10;
      });

      //Wenn die Zahl erreicht ist, wird das Interval beendet.
      if (zahl === 400) {
        clearTimeout(timer1);
      }
    }, 1);

    //Wenn useEffect neu durchlauft aufgrund des triggers
    //Wird jedesmal das Interval beendet
    return () => {
      clearTimeout(timer1);
    };
  }, [isInViewport]);

  return (<>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: theme.palette.primary.main, border: 1,  borderColor: 'secondary.main', py: {xs: 1, md: 2}, boxShadow: 3 }}
      >
        <Grid item sx={{ }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item sx={{}}>
              <Typography
                variant="h4"
                align="center"
                //sx={{fontSize: {xs: "3rem", md: "3.75rem"}}}
                sx={{px: 3, fontWeight: "300", display: {xs: "none", sm: "block"}}}
              >
                Jeder Strohhalm spart Plastik.
              </Typography>
              <Typography
                variant="h4"
                align="center"
                //sx={{fontSize: {xs: "3rem", md: "3.75rem"}}}
                sx={{px: 3, fontWeight: "300", display: {xs: "block", sm: "none"}}}
              >
                Jeder Strohhalm spart Plastik.
              </Typography>
            </Grid>
            <Grid item ref={ref1} xs={12} sx={{  }}>
              <Counter
                numberOne={numberOne}
                numberTwo={numberTwo}
                numberThree={numberThree}
                settrigger={settrigger}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  </>);
}
