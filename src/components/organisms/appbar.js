import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import ActionButton from "../atoms/buttons/actionButtonAppBar";
import Link from "next/link";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

const handleClick = (event) => {
  let anchorId = ('#' + event.target.value);
  console.log(anchorId);
  const anchor = (document.querySelector(anchorId));

  if (anchor) {
    anchor.scrollIntoView();
    //Safari unterstuetzt keine options
    // anchor.scrollIntoView({
    //   behavior: "smooth",
    //   block: 'start',
    // });
  }
};

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backdropFilter: "blur( 4px )",
            borderBottom: "1px solid rgba( 255, 255, 255, 0.18 )"
          }}
        >
          <Toolbar
            sx={{width: "100%", maxWidth: 1680, mx: "auto"}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/">
                Brand
              </Link>
            </Typography>
            <ActionButton variant="outlined" text="About" value="About" onClick={handleClick}/>
            <ActionButton variant="outlined" text="How it works" value="How_it_works" onClick={handleClick} />
            <ActionButton variant="contained" text="Buy" href="/preis" />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box>{props.children}</Box>
    </React.Fragment>
  );
}
