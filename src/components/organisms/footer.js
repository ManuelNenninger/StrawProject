import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import SvgIcon from "@mui/material/SvgIcon";
import SectionWrapper from "../atoms/wrapperElements/sectionWrapper"

const FooterContent = [
  {
    titel: "Quick Links",
    listContent: [
      { describtion: "lala1", link: "https://www.google.com/" },
      { describtion: "lala2", link: "https://www.google.com/" },
      { describtion: "lala3", link: "https://www.google.com/" }
    ]
  },
  {
    titel: "Support",
    listContent: [
      { describtion: "lala1", link: "https://www.google.com/" },
      { describtion: "lala2", link: "https://www.google.com/" }
    ]
  }
];

export default function BoxSx() {
  const GridFunction = function (object) {
    return (
      <>
        <Grid item sx={{ }}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="h5" gutterBottom>
                {object.titel}
              </Typography>
            </Grid>
            {object.listContent.map(function (listObject) {
              return (
                <Grid item>
                  <Link href={listObject.link} color="secondary.main" variant="subtitle1">
                    {listObject.describtion}
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </>
    );
  };

  const SocialGrid = function () {
    return (
      <>
        <Grid item sx={{ }}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="h5" gutterBottom>
                Follow us{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Grid item>
                  <IconButton color="secondary" aria-label="add an alarm">
                    <InstagramIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="secondary" aria-label="add an alarm">
                    <FacebookRoundedIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="secondary" aria-label="add an alarm">
                    <TwitterIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  const SvgBackground = function () {
    return (
      <>
        <Box>
          <SvgIcon
            sx={{ height: 300, width: "100%", display: "block" }}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 250"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(29, 58, 36, 0.55)" offset="0%" />
                <stop stop-color="rgba(29, 58, 36, 0.55)" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-0)"
              fill-opacity="1"
              d="M0,175L18.5,166.7C36.9,158,74,142,111,137.5C147.7,133,185,142,222,129.2C258.5,117,295,83,332,83.3C369.2,83,406,117,443,129.2C480,142,517,133,554,145.8C590.8,158,628,192,665,187.5C701.5,183,738,142,775,125C812.3,108,849,117,886,129.2C923.1,142,960,158,997,166.7C1033.8,175,1071,175,1108,175C1144.6,175,1182,175,1218,170.8C1255.4,167,1292,158,1329,166.7C1366.2,175,1403,200,1440,187.5C1476.9,175,1514,125,1551,91.7C1587.7,58,1625,42,1662,58.3C1698.5,75,1735,125,1772,141.7C1809.2,158,1846,142,1883,145.8C1920,150,1957,175,1994,162.5C2030.8,150,2068,100,2105,83.3C2141.5,67,2178,83,2215,83.3C2252.3,83,2289,67,2326,83.3C2363.1,100,2400,150,2437,162.5C2473.8,175,2511,150,2548,145.8C2584.6,142,2622,158,2640,166.7L2658.5,175L2658.5,250L2640,250C2621.5,250,2585,250,2548,250C2510.8,250,2474,250,2437,250C2400,250,2363,250,2326,250C2289.2,250,2252,250,2215,250C2178.5,250,2142,250,2105,250C2067.7,250,2031,250,1994,250C1956.9,250,1920,250,1883,250C1846.2,250,1809,250,1772,250C1735.4,250,1698,250,1662,250C1624.6,250,1588,250,1551,250C1513.8,250,1477,250,1440,250C1403.1,250,1366,250,1329,250C1292.3,250,1255,250,1218,250C1181.5,250,1145,250,1108,250C1070.8,250,1034,250,997,250C960,250,923,250,886,250C849.2,250,812,250,775,250C738.5,250,702,250,665,250C627.7,250,591,250,554,250C516.9,250,480,250,443,250C406.2,250,369,250,332,250C295.4,250,258,250,222,250C184.6,250,148,250,111,250C73.8,250,37,250,18,250L0,250Z"
            ></path>
          </SvgIcon>
        </Box>
      </>
    );
  };

  return (
    <>
    <SectionWrapper footer>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{pt: 3, pb: 5}}
      >
        <Grid item xs={12} md={4} sx={{ }}>
          <Typography variant="h4" gutterBottom>
            BrandName
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} sx={{ }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
            spacing={8}
            sx={{}}
          >
            {FooterContent.map(function (object) {
              return GridFunction(object);
            })}
            <SocialGrid />
          </Grid>
        </Grid>
        {/*<SvgBackground />*/}
      </Grid>
    </SectionWrapper>
    </>
  );
}
