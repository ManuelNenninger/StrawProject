import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import {  useRef } from "react";
import useIsInViewport from "../../atoms/visibilityFunction/visibilityFunction"
import LocalDrinkRoundedIcon from '@mui/icons-material/LocalDrinkRounded';
import SanitizerRoundedIcon from '@mui/icons-material/SanitizerRounded';
import BrokenImageRoundedIcon from '@mui/icons-material/BrokenImageRounded';
import Grow from "@mui/material/Grow";
import SvgIcon from "@mui/material/SvgIcon";
import { useAppContext } from "../../../appContext";

export default function BoxSx() {
  const theme = useTheme();
  const ref1 = useRef(null);
  const isInViewport = useIsInViewport(ref1);
  //console.log("isInViewport1: ", isInViewport);
  const value = useAppContext();
  let { agreementGridContent } = value.content.agreementContent;

  //Da in dem Conent Object keine Variablen declariert sind, wird hier dem String eine Componente zugewiesen.
  //https://stackoverflow.com/questions/47717326/how-to-render-a-component-by-string-name
  const icons = {
    LocalDrinkRoundedIcon,
    SanitizerRoundedIcon,
    BrokenImageRoundedIcon,
  }

  const CellGrid = ({ IconName, Titel, Describtion }, index) => {
    return (
      <>
        <Grid xs={12} md={4} item key={"Grid_" + index}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={0}
            sx={{'& > div': {
              //pt: 1,
            },
            // "& :not(:first-of-type)": {
            //   pt: 1,
            // },
            }}
          >
            <Grid item>
              <SvgIcon component={icons[IconName]}  sx={{fontSize: 60, mb: 2}} color="primary" />,
            </Grid>
            <Grid item>
              <Typography variant="h6" gutterBottom color="text.secondary">
                {Titel}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom color="text.secondary">
                {Describtion}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  const MainGrid = () => {
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          //spacing={10}
          sx={{
            '& > div': {
              px: {sm: 3, md: 5, lg: 10, xl: 15},
              pb: {xs: 5, md: 0}
            },
          }}
        >
          {agreementGridContent.map(function (ContentObject, index) {
            return CellGrid(ContentObject, index);
          })}
        </Grid>
      </>
    );
  };

  return (
    <Grow
       in={isInViewport}
       style={{ transformOrigin: "0 0 0" }}
       {...(isInViewport ? { timeout: 2000 } : {})}
     >
      <Grid
        ref={ref1}
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{}}
      >
        <Grid item sx={{width: "100%"}}>
          <Typography align="center" variant="h2" gutterBottom color="text.secondary">
            Vorteile von Risao
          </Typography>
        </Grid>
        <Grid item sx={{pt: 15}}>
          <MainGrid />
        </Grid>
      </Grid>
    </Grow>

  );
}
