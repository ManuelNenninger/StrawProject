import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import ProcessContentCard from "../../atoms/processSection/processContentCard";
import Button from "@mui/material/Button";
import {  useRef } from "react";
import useIsInViewport from "../../atoms/visibilityFunction/visibilityFunction"
import Grow from "@mui/material/Grow";
import SectionWrapper from "../../atoms/wrapperElements/sectionWrapper"
import { useAppContext } from "../../../appContext";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    //width: "100% !important", // Overrides inline-style
    // height: 100
  },
  "&:hover, &.Mui-focusVisible": {
    //zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15
    },
    "& .MuiImageMarked-root": {
      opacity: 0
    },
    "& .MuiTypography-root": {
      //border: "1px solid currentColor"
    }
  }
}));

export default function BoxSx() {
  const theme = useTheme();
  const value = useAppContext();
  let { processCardArray } = value.content.processContent;

  const [selected, setSelected] = useState(1);
  const [trigger, settrigger] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref1 = useRef(null);
  const isInViewport = useIsInViewport(ref1);
  //console.log("isInViewport1: ", isInViewport);


//<----- Begin Timer for Step switch ----->
  useEffect(() => {
    let zahl = 0;
    //Der Trigger ist das visibility im Window
    if (!isInViewport) {
      return;
    }

    let timer1 = setInterval(function () {
      zahl = zahl + 1000;

      setProgress((oldProgress) => {
        if(oldProgress === 100){return 100}
        //Wenn man 4s auswählt, ist die animation zu langsam, um 100% anzuzeigen.
        const prozentBisFull = (100 / 9000) * zahl;
        //console.log("Es sind " + prozentBisFull + "% von4000 erreicht.");
        return prozentBisFull;
      });


      //Hier wird nach 5s selected gewechselt
      if(zahl % 10000 === 0){
        //console.log("100% erreicht: " + zahl);
        setProgress(100)
        zahl = 0;
        setProgress(0)
        setSelected((prev) => {
          if (prev === 4) {
            return 1;
          }
          return prev + 1;
        });
      }

    }, 1000);

    //--------------
    //Wenn useEffect neu durchlauft aufgrund des triggers
    //Wird jedesmal das Interval beendet
    return () => {
      clearTimeout(timer1);
      ;
    };
  }, [isInViewport]);
  //<----- End Timer for Step switch ----->



  const InstructionBox = ({ Number, Titel }) => {
    return (
      <>
        <Box sx={{ mb: 6, borderBottom: "1px solid" }}>
          <ImageButton
            value={Number}
            onClick={function (e) {
              setSelected(Number);
            }}
            sx={{ px: 2, backgroundColor: selected === Number ? theme.palette.secondary.main : "none", borderRadius: selected === Number ? '10px 10px 0 0' : "none"}}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              sx={{
                "& > div": {
                  //px: 1
                },
                "& :not(:first-of-type)": {
                  px: 2
                }
              }}
            >
              <Grid item>
                <Typography variant="h5" display="block" color={selected === Number ? "text.secondary" : "text.main"}>
                  {Number}{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Grid item>
                  <Typography variant="h3" display="block" color={selected === Number ? "text.secondary" : "text.main"} sx={{fontSize: {xs: "2.125rem", md: "3rem"}}}>
                    {Titel}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </ImageButton>
        </Box>
      </>
    );
  };

  const ProcessInstruction = () => {
    return (
      <>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          {processCardArray.map(function (ContentObject) {
            return InstructionBox(ContentObject);
          })}
        </Grid>
      </>
    );
  };

  return (
    <SectionWrapper>
    <Grow
       in={isInViewport}
       style={{ transformOrigin: "0 0 0" }}
       {...(isInViewport ? { timeout: 2000 } : {})}
     >
      <Grid
        ref={ref1}
        id="How_it_works"
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{}}
      >
        <Grid item>
          <Typography variant="h2" align="center" gutterBottom sx={{display: {xs: "none", sm: "block"}}}>
            Teste unser Produkt
          </Typography>
          <Typography variant="h3" align="center" gutterBottom sx={{display: {xs: "block", sm: "none"}}}>
            Teste unser Produkt
          </Typography>
          {/*<Button
            variant="text"
            onClick={() =>
              settrigger((prev) => {
                return !prev;
              })
            }
          >
            Test
          </Button>*/}
        </Grid>
        <Grid item sx={{pt: 15, width: "100%", }}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{ }}
          >
            <Grid item>
              <ProcessInstruction />
            </Grid>
            <Grid item>
              <ProcessContentCard ContentArray={processCardArray} selected={selected} progress={progress}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Grow>

    </SectionWrapper>
  );
}
