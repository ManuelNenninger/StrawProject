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


export default function MoreInfoSection(props) {
  const theme = useTheme();

  const AccordionComponent = () => {
    return (
      <>
        <Accordion sx={{ backgroundColor: theme.palette.primary.main, boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ py: 3 }}
          >
            <Typography>Lagerung</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              An einem kühlen, trockenen, licht- und feuchtigkeitsgeschützten Ort aufbewahrt, zwei Jahre haltbar.
            </Typography>
          </AccordionDetails>
        </Accordion >
        <Accordion sx={{ backgroundColor: theme.palette.primary.main, boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ py: 3 }}
          >
            <Typography>Verwendung</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Kann bis zu 40 Minuten lang für warme oder kalte Getränke verwendet werden.
            </Typography>
          </AccordionDetails>
        </Accordion >
        <Accordion sx={{ backgroundColor: theme.palette.primary.main, boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            sx={{ py: 3 }}
          >
            <Typography>Entsorgung</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Da der Trinkhalm aus natürlichen Polymeren besteht und keine Kunststoffe enthält, kann er ganz einfach in jedem Bio-Müll entsorgt werden.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: theme.palette.primary.main, boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            sx={{ py: 3 }}
          >
            <Typography>Abmaße</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Derzeit haben wir nur Trinkhalme mit einem Durchmesser von 6,5 mm und einer Länge von 210 mm zur Verfügung. Falls Ihr euch weitere Größen und Farben wünscht, lasst es uns wissen!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  const ImageComponent = () => {
    return (
      <>
        <Box className="unset-img" sx={{  }}>
          <Image
            alt="Picture of the author"
            width={5000}
            height={5000}
            src="/Frame_6.svg"
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
              Fragen?
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
