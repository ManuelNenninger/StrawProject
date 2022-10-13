import Box from "@mui/material/Box";
import Image from "next/image";
import HeroPicture from "../../../../public/restaurant.svg";

export default function heroPicture(props) {
  return (
    <>
      <Box sx={{ p: 5 }}>
        <Box sx={{display: {xs: "none", md: "block"}}} >
          <Image src={HeroPicture} width={130} height={100}  layout="responsive" alt="bio strohhalm nachhaltig"/>
        </Box>
        <Box sx={{display: {xs: "block", md: "none"}}} >
          <Image src={HeroPicture} width={200} height={250} layout="responsive" alt="bio strohhalm nachhaltig"/>
        </Box>
      </Box>
    </>
  );
}
