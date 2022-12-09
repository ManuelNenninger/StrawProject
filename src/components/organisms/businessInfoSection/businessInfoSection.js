import * as React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BloBWrapper from "../../atoms/wrapperElements/blobWrapper";
import SectionWrapper from "../../atoms/wrapperElements/sectionWrapper"
import ActionButton from "../../atoms/buttons/actionButton";
import OrderDialog from "../../atoms/pricePage/orderDialog";
// import { useAppContext } from "../../../appContext";
import {  useRef } from "react";
import useIsInViewport from "../../atoms/visibilityFunction/visibilityFunction"
import Grow from "@mui/material/Grow";

export default function BoxSx(props) {
  const [open, setOpen] = React.useState(false);
  // const value = useAppContext();
  // let { businessInfoContent } = value.content;
  const ref1 = useRef(null);
  const isInViewport = useIsInViewport(ref1);
  let {content={}} = props;
  let {sectionTitle="Lorem Ipsum", sectionDescribtion=" Lorem Ipsum Description", priceinfobuilder=[{pricecarddescribtion: "Test Desc", pricecardprice: "Test price", pricecardtitle: "test"}] } = content;
  let {pricecarddescribtion="", pricecardprice="", pricecardtitle="" } = priceinfobuilder[0];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const GridContent = () => {
    return (
      <>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems={{xs: "center", md:"flex-start"}}
          sx={{pr: {md:15, sm: 0}}}
        >
          <Grid item>
            {" "}
            <Typography variant="h3" gutterBottom color="text.secondary" sx={{fontWeight: "300", display: {xs: "none", md: "block"}}} >
              {sectionTitle}
            </Typography>
            <Typography variant="h4" gutterBottom color="text.secondary" sx={{fontWeight: "300", display: {xs: "block", md: "none"}}} align="center">
              {sectionTitle}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" gutterBottom color="text.secondary">
            {sectionDescribtion}
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  };

  const Card = () => {
    return (
      <>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "rgba( 255, 255, 255, 0.15 )",
            backdropFilter: "blur( 2px )",
            minWidth: 200,
            maxWidth: 350,
            py: 4,
            mt: {xs: 15, md: 0},
            px: { xs: 8, md: 4 },
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            borderRadius: 5,
            boxShadow: 3
          }}
        >
          <Grid item sx={{ pb: 20 }}>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="h3"
              component="div"
              align="center"
            >
              {pricecardtitle}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              {pricecarddescribtion}
            </Typography>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Typography
                  color="text.secondary"
                  gutterBottom
                  variant="h4"
                  component="div"
                  align="center"
                  sx={{ fontWeight: "300" }}
                >
                  {pricecardprice}
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <ActionButton
              fullWidth
              variant="contained"
              size="large"
              text="Order"
              onClick={handleClickOpen}
            />
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <SectionWrapper secondaryBackgroundColor lowerWave >
    <Grow
       in={isInViewport}
       style={{ transformOrigin: "0 0 0" }}
       {...(isInViewport ? { timeout: 2000 } : {})}
     >
      <Grid
        ref={ref1}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{  pt: 15 }}

      >
        <Grid item md={6} sx={{ }}>
          <GridContent />
        </Grid>
        <Grid item sx={{ }}>
          <BloBWrapper>
            <Card />
          </BloBWrapper>
        </Grid>
      </Grid>
      </Grow>
      <OrderDialog open={open} handleClose={handleClose} order="> 500 Stück"/>
    </SectionWrapper>
  );
}
