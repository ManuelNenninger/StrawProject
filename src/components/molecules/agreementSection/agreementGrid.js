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
// import { useAppContext } from "../../../appContext";
import {PortableText} from '@portabletext/react'
import {ptComponents} from "../../../../lib/sanity";

export default function BoxSx({content}) {
  const theme = useTheme();
  const ref1 = useRef(null);
  const isInViewport = useIsInViewport(ref1);
  //console.log("isInViewport1: ", isInViewport);
  // const value = useAppContext();
  // let { agreementGridContent } = value.content.agreementContent;
  let {sectionTitle="", size="", columns=[]} = content;


  const icons = {
    LocalDrinkRoundedIcon,
    SanitizerRoundedIcon,
    BrokenImageRoundedIcon,
  }

  let gridBreakpoints = {};

  const CellGrid = ({ iconname, title, body }, index) => {

    return (
      <>
        <Grid
            xs={gridBreakpoints["xs"] ? gridBreakpoints["xs"] : "none"}
            sm={gridBreakpoints["sm"] ? gridBreakpoints["sm"] : "none"}
            md={gridBreakpoints["md"] ? gridBreakpoints["md"] : "none"}
            lg={gridBreakpoints["lg"] ? gridBreakpoints["lg"] : "none"}
            xl={gridBreakpoints["xl"] ? gridBreakpoints["xl"] : "none"}
            item
            key={"Grid_" + index}>
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
              <SvgIcon component={icons[iconname]}  sx={{fontSize: 60, mb: 2}} color="primary" />,
            </Grid>
            <Grid item>
              <Typography variant="h6" gutterBottom color="text.secondary">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom color="text.secondary">
              <PortableText
                value={body}
                components={ptComponents}
              />
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
          {columns.map(function({blocks, sizes}){
            {/*Hier werden die Grid Breakpoints festgelegt.*/}
            (sizes.map(function(gridOptions){
              {/*Hier werden die Grid Breakpoints in das Object übergeben.*/}
              gridBreakpoints[gridOptions.breakpoint] = parseInt(12/gridOptions.width)
            }))
            return(
              blocks.map(function(ContentObject, sizes, index){
                return(CellGrid(ContentObject, sizes, index))
              })
            )
          })
          }
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
        <Grid item sx={{width: "100%", pb: 10}}>
          <Typography align="center" variant="h2" gutterBottom color="text.secondary">
            {sectionTitle}
          </Typography>
        </Grid>
        <Grid item sx={{ }}>
          <MainGrid />
        </Grid>
      </Grid>
    </Grow>

  );
}
