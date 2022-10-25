import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from '@mui/material/styles';
import CounterBox from "../atoms/missionSection/counterBox";
import HighlighterText from "../atoms/wrapperElements/highlighterText";
import Grow from "@mui/material/Grow";
import useIsInViewport from "../atoms/visibilityFunction/visibilityFunction"
import { useAppContext } from "../../appContext";

export default function BoxSx() {
  //const [trigger, settrigger] = React.useState(false);
  const theme = useTheme();
  const ref1 = React.useRef(null);
  const isInViewport = useIsInViewport(ref1);
  const value = useAppContext();
  let { missionContent } = value.content;

  const ResponsiveTypographyHeader = (props) => {
    return (
      <Typography
        variant={props.variant}
        gutterBottom
        component="h1"
        align="center"
        sx={{ fontWeight: "300" }}
      >
        Mission
      </Typography>
    );
  };

  const ResponsiveDescribtion = (props) => {
    return (
      <>
      <Typography
        //align="center"
        variant={props.variant}
        component="h1"
        gutterBottom
        sx={{ whiteSpace: "pre-line", mr: {md: 30, lg: 50} }}
      >
        {missionContent.heroDescribtion}
      </Typography>
      <HighlighterText variant={props.variant}>
        Und wir helfen dir dabei.
      </HighlighterText>
      </>
    )
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        maxWidth: "1680px",
        px: {xs: 3,  md:6}
      }}
    >
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
          alignItems="flex-start"
          sx={{pt: {xs: 5, sm: 20}}}
        >
          <Grid item>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ResponsiveTypographyHeader variant="h2" />
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <ResponsiveTypographyHeader variant="h3" />
            </Box>
          </Grid>
          <Grid item>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ResponsiveDescribtion variant="h5" />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <ResponsiveDescribtion variant="subtitle1" />
          </Box>
          </Grid>
          <Grid item sx={{   }}>
            <CounterBox
              trigger={isInViewport}
              //settrigger={settrigger}
            />
          </Grid>
        </Grid>
      </Grow>
    </Box>
  );
}
