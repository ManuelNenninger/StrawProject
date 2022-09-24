import Box from "@mui/material/Box";
import Image from "next/image";
import HeroPicture from "../../../../public/heroPictureTwo.svg";

export default function heroPicture(props) {
  return (
    <>
      <Box sx={{ p: 5 }}>
        <Box>
          <Image src={HeroPicture} width={130} height={100} layout="responsive" />
        </Box>
      </Box>
    </>
  );
}
