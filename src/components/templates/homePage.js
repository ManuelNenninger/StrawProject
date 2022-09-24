import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import AppBar from "../organisms/appbar";
import ActionSection from "../organisms/actionSection/actionSectionMain";
import AgreementSection from "../organisms/agreementSection/agreementSectionMain";
import ProcessSection from "../organisms/processSection/processSectionMain";
import AboutSection from "../organisms/aboutSection/aboutSectionMain";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <ActionSection/>
      <AgreementSection/>
      <ProcessSection/>
      <AboutSection/>
    </>
  )
}
