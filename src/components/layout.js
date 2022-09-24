import AppBar from "./organisms/appbar";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Footer from "./organisms/footer"

export default function Layout(props){
  const theme = useTheme();

  return(
      <>
      <Box
        id="main_BackgroundColor"
        sx={{backgroundColor: theme.palette.primary.main,}}
      >
        <Box
          id="main_Frame"
          sx={{
          maxWidth: "1680px",
          mx: "auto",
          //px: 6,
          }}
        >
          <AppBar>
            <main>{props.children}</main>
            <Footer/>
          </AppBar>
        </Box>
      </Box>
      </>
  )
}
