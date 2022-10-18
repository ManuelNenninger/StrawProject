import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import AppBar from "../organisms/appbar";
import ActionSection from "../organisms/actionSection/actionSectionMain";
import AgreementSection from "../organisms/agreementSection/agreementSectionMain";
import ProcessSection from "../organisms/processSection/processSectionMain";
import AboutSection from "../organisms/aboutSection/aboutSectionMain";
import InfoSection from "../organisms/infoSection/infoSection";

export default function Home({test}) {
  const theme = useTheme();
  console.log(test);
  return (
    <>
      <ActionSection/>
      <AgreementSection/>
      <ProcessSection/>
      <InfoSection/>
      <AboutSection/>
    </>
  )
}
