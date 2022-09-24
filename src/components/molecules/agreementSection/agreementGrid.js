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

export default function BoxSx() {
  const theme = useTheme();
  const ref1 = useRef(null);
  const isInViewport = useIsInViewport(ref1);
  //console.log("isInViewport1: ", isInViewport);


  const ContentArray = [
    {
      Icon: <LocalDrinkRoundedIcon sx={{fontSize: 60, mb: 2}} color="primary" />,
      Titel: "Lorem Ipsum",
      Describtion: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    },
    {
      Icon: <SanitizerRoundedIcon sx={{fontSize: 60, mb: 2}} color="primary"/>,
      Titel: "Lorem Ipsum",
      Describtion: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
    },
    {
      Icon: <BrokenImageRoundedIcon sx={{fontSize: 60, mb: 2}}  color="primary"/>,
      Titel: "Lorem Ipsum",
      Describtion: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna "
    }
  ];

  const CellGrid = ({ Icon, Titel, Describtion }) => {
    return (
      <>
        <Grid xs={12} md={4} item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}
            sx={{'& > div': {
              //pt: 1,
            },
            // "& :not(:first-of-type)": {
            //   pt: 1,
            // },
            }}
          >
            <Grid item>{Icon} </Grid>
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
          alignItems="center"
          //spacing={10}
          sx={{
            '& > div': {
              px: {sm: 3, md: 5, lg: 10, xl: 15},
              pb: {xs: 5, md: 0}
            },
          }}
        >
          {ContentArray.map(function (ContentObject) {
            return CellGrid(ContentObject);
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
            Lorem ipsum dolor sit amet
          </Typography>
        </Grid>
        <Grid item sx={{pt: 15}}>
          <MainGrid />
        </Grid>
      </Grid>
    </Grow>

  );
}
