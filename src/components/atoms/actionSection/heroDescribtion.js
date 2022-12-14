import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ActionButton from "../buttons/actionButton"
import { useTheme } from '@mui/material/styles';
import { useAppContext } from "../../../appContext";
import HighlighterText from "../wrapperElements/highlighterText";
import SubscribeDialogPopUp from "../dialogPopUp/subscribeDialogPopUp";
import {PortableText} from '@portabletext/react'
import {ptComponents} from "../../../../lib/sanity";

export default function HeroDescribtion({content={}}) {
  console.log("Content in der komponente ist: ");
  console.log(content);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  // const value = useAppContext();
  // let { heroContent } = value.content;
  //Content from Sanity
  let {heroDescribtion="Lorem Ipsum Describtion.", heroTitle="Lorem Ipsum", primaryCallToAction="" } = content;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Die Responsive Heading wird von Sanity als Block Content unter Custome Heading gerendered.
  const ResponsiveTypography = (props) => {
    return(
      <Typography
      variant={props.variant}
      gutterBottom
      component="h1"
      sx={{fontWeight: "300"}}
      >
          Hier sollte der HeroTitle stehen.
        <HighlighterText variant={props.variant}>
          nur besser
        </HighlighterText>
      </Typography>
    )
  }
  return (
    <>
      <Box sx={{}}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ pr: { xs: "none", md: 15 }, mt: {xs: 10, md: 0} }}
        >
          <Grid item >
          {typeof heroTitle !== 'string' ?
            (<PortableText
            value={heroTitle}
            components={ptComponents}
          />) :
          (<ResponsiveTypography variant="h1"/>)}
          </Grid>
          <Grid item >
            <Typography variant="h5" component="h2" gutterBottom sx={{  }}>
              {heroDescribtion}
            </Typography>
          </Grid>
          <Grid item sx={{ width: "100%", pt: 2 }}>
            <Box>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={3}
              >
                <Grid item md={6} xs={12}>
                  <ActionButton fullWidth variant="contained" size="large" text="Bestellen" secondaryColor href="/preis"/>
                </Grid>
                <Grid item md={6} xs={12}>
                  <ActionButton fullWidth variant="outlined" size="large" text="Zum Newsletter" secondaryColor onClick={handleClickOpen} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <SubscribeDialogPopUp open={open} handleClose={handleClose} />
      </Box>
    </>
  );
}
