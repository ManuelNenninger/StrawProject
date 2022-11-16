import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import AppBar from "../organisms/appbar";
import ActionSection from "../organisms/actionSection/actionSectionMain";
import AgreementSection from "../organisms/agreementSection/agreementSectionMain";
import ProcessSection from "../organisms/processSection/processSectionMain";
import AboutSection from "../organisms/aboutSection/aboutSectionMain";
import InfoSection from "../organisms/infoSection/infoSection";
import MoreInforSection from "../organisms/moreInfoSection/moreInfoSection";

export default function Home(props) {
  const theme = useTheme();
  let [{herosection}, {processsection}, {aboutsection}, {faqsection}, {cardinfosection}, {grid}] = props.pages.pageBuilder;

  return (
    <>
      <ActionSection content={herosection} />
      <AgreementSection content={grid} />
      <ProcessSection content={processsection}/>
      <InfoSection content={cardinfosection}/>
      <MoreInforSection content={faqsection}/>
      <AboutSection content={aboutsection}/>
    </>
  )
}
