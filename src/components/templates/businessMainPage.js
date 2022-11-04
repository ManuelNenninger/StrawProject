import BusinessHeroSection from "../organisms/businessActionSection/businessActionSection";
import BusinessInfoSection from "../organisms/businessInfoSection/businessInfoSection";
import MoreInforSection from "../organisms/moreInfoSection/moreInfoSection";

export default function Main (){
  return(
    <>
      <BusinessHeroSection/>
      <BusinessInfoSection/>
      <MoreInforSection bottomDistance/>
    </>
  )
}
