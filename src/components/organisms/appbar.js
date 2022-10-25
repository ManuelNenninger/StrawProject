import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import ActionButton from "../atoms/buttons/actionButtonAppBar";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import Menu from '@mui/material/Menu';

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
  console.log(event.target.value);
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

export default function ElevateAppBar(props){
const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const ResponsiveMenu = (props) =>{
    return(
      <>
      <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      <Link href="/preis">
        <MenuItem onClick={handleCloseNavMenu} >
            <Typography textAlign="center">Bestellen</Typography>
        </MenuItem>
      </Link>
      <Link href="/business">
        <MenuItem onClick={handleCloseNavMenu} >
            <Typography textAlign="center">B2B</Typography>
        </MenuItem>
      </Link>
      <Link href="/mission">
        <MenuItem onClick={handleCloseNavMenu} >
            <Typography textAlign="center">Mission</Typography>
        </MenuItem>
      </Link>
      <MenuItem value="How_it_works" onClick={handleCloseNavMenu}>
        <Typography  textAlign="center">How it works</Typography>
      </MenuItem>
      <MenuItem value="About" onClick={handleCloseNavMenu}>
        <Typography textAlign="center">Über mich</Typography>
      </MenuItem>
    </Menu>
      </>
    )
  }


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
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: "'Comfortaa', cursiv", fontWeight: "600" }}>
              <Link href="/">
                <a>
                  Risao
                </a>
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <ResponsiveMenu />
            </Box>
            <Box sx={{display: {xs: "none", md: "block"}}}>
              <ActionButton variant="outlined" text="B2B" value="B2B" href="/business"/>
              <ActionButton variant="outlined" text="Mission" value="Mission" href="/mission"/>
              <ActionButton variant="outlined" text="Über mich" value="About" onClick={handleClick}/>
              <ActionButton variant="outlined" text="How it works" value="How_it_works" onClick={handleClick} />
              <ActionButton variant="contained" text="Bestellen" href="/preis" />
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box>{props.children}</Box>
    </React.Fragment>
  );
}
