import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CounterAgreement from "../../molecules/agreementSection/counterAgreement";
import AgreementGrid from "../../molecules/agreementSection/agreementGrid";
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import SectionWrapper from "../../atoms/wrapperElements/sectionWrapper"

export default function AgreementSectionMain() {
  const theme = useTheme();

  return (
    <>
    {/*<Box
      sx={{
        minHeight: "100vh",
        maxWidth: "1680px",
        backgroundColor: theme.palette.secondary.main,
        px: 6,
      }}
    >*/}
    <SectionWrapper secondaryBackgroundColor lowerWave >
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ minHeight: "100%", }}
      //spacing={1}
    >
      <Grid item sx={{position: "relative",pb: 5}}>
        <Box sx={{  position: "absolute", }}>
          <Box sx={{  position: "relative", transform: "translate(-50%,-50%)", minWidth: {xs: "75vw", md:"50vw"}, }}>
            <CounterAgreement />
          </Box>
        </Box>
        {/*<CounterAgreement />*/}
      </Grid>
      {/*Devider Grid Item*/}
      <Grid item sx={{width: "100%", py: 10}} >
        {/*<Divider/>*/}
      </Grid>
      <Grid item  >
          <AgreementGrid/>
      </Grid>
    </Grid>
    </SectionWrapper>
    </>
  );
}
