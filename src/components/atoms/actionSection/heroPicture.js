import Box from "@mui/material/Box";
import Image from "next/image";
import HeroPicture from "../../../../public/heroPictureTwo.svg";
import {urlFor} from "../../../../lib/sanity";

export default function heroPicture({content={}}) {
  let { mainImage={} } = content;


  let url;
    if(Object.keys(mainImage).length !== 0 ){
      url = (urlFor(mainImage).url());
    }

  return (
    <>
      <Box sx={{ p: 5 }}>
        <Box>
          {/*<Image src={HeroPicture} width={130} height={100} layout="responsive" alt="bio strohhalm nachhaltig"/>*/}
          <Image
          src={Object.keys(mainImage).length !== 0 ? url : HeroPicture}
          width={130}
          height={100}
          layout="responsive"
          alt="bio strohhalm nachhaltig"/>
        </Box>
      </Box>
    </>
  );
}
