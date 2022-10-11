import Datenschutz from "../src/components/templates/rechtliches/datenschutzerklaerung";
import Box from "@mui/material/Box";

export default function DatenschutzSite(){
  return(
    <>
    <Box
      sx={{
        maxWidth: "1680px",
        minHeight: "100vh",
        p: 6,
      }}
    >
      <p>Datenschutz</p>
      </Box>
      {/*<Datenschutz/>*/}
    </>
  )
}
