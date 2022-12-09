import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import SectionWrapper from "../../atoms/wrapperElements/sectionWrapper"
import { useTheme } from '@mui/material/styles';
import {PortableText} from '@portabletext/react'
import {ptComponents, urlFor} from "../../../../lib/sanity";

export default function MoreInfoSection(props) {
  const theme = useTheme();
  let {content={}} = props;
  let {
    faqbuilder=[{
      title: "Lorem Ipsum",
      body: []
    }],
    alignment="rightPicture",
    faqsectiontitle="Lorem Ipsum",
    mainImage
    } = content;

const AccordionComponent = () => {
  return (
    <>
    {faqbuilder.map(function(faqrow, index){
      let {body, title} = faqrow;
      return (
        <Accordion  key={index} sx={{ backgroundColor: theme.palette.primary.main, boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ py: 3 }}
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            { body.length !== 0 ?
              <PortableText
              value={body}
              components={ptComponents}
              />
              :
              <Typography variant="subtitle2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            }
            </Typography>
          </AccordionDetails>
        </Accordion >
      )
    })}

    </>
  )
}

  const ImageComponent = () => {
    return (
      <>
        <Box className="unset-img" sx={{  }}>
          <Image
            alt="FAQ Häufige Fragen"
            width={5000}
            height={5000}
            src={urlFor(mainImage).url()}
            className="custom-img"
          />
        </Box>
      </>
    );
  };

  return (
    <SectionWrapper bottomDistance={props?.bottomDistance && true} >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Grid item sx={{pb: 5}}>
            {" "}
            <Typography variant="h3" gutterBottom>
              {faqsectiontitle}
            </Typography>{" "}
          </Grid>
          <Grid item xs={12} sx={{  width: "100%" }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item md={7} id="AccordionGrid">
                <AccordionComponent />
              </Grid>
              <Grid
                item
                md={5}
                id="Picute"
                sx={{ width: "100%", pl: { xs: 1, md: 10 } }}
              >
                <ImageComponent />
              </Grid>
            </Grid>{" "}
          </Grid>
        </Grid>
      </SectionWrapper>

  );
}
