// import BusinessHeroSection from "../organisms/businessActionSection/businessActionSection";
import BusinessInfoSection from "../organisms/businessInfoSection/businessInfoSection";
import MoreInforSection from "../organisms/moreInfoSection/moreInfoSection";
import ActionSection from "../organisms/actionSection/actionSectionMain";

export default function Main (props){
  let [ {faqsection={}}, ] = props?.pages?.pageBuilder;
  let test = props?.pages?.pageBuilder;
  let [{herosection}] = test;
  let [{specialpricesection}] = test;


  return(
    <>
      <ActionSection content={herosection} />
      <BusinessInfoSection content={specialpricesection}/>
      <MoreInforSection bottomDistance content={faqsection}/>
    </>
  )
}
