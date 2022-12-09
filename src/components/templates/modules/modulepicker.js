import React from 'react'

import ActionSection from "../../organisms/actionSection/actionSectionMain";
import AgreementSection from "../../organisms/agreementSection/agreementSectionMain";
import ProcessSection from "../../organisms/processSection/processSectionMain";
import AboutSection from "../../organisms/aboutSection/aboutSectionMain";
import InfoSection from "../../organisms/infoSection/infoSection";
import MoreInforSection from "../../organisms/moreInfoSection/moreInfoSection";
import BusinessInfoSection from "../../organisms/businessInfoSection/businessInfoSection";

export const Module = ({
  index,
  data,
  product,
  activeVariant,
  onVariantChange,
  content,
  moduleName=""
}, ) => {
  console.log("Der Module Name ist: " + moduleName);
  const ModuleType = {
    grid: AgreementSection,
    herosection: ActionSection,
    processsection: ProcessSection,
    aboutsection: AboutSection,
    cardinfosection: InfoSection,
    faqsection: MoreInforSection,
    specialpricesection: BusinessInfoSection,
  }[moduleName] ?? <></>

  return (
    <ModuleType
      // index={index}
      // data={data}
      // product={product}
      // activeVariant={activeVariant}
      // onVariantChange={onVariantChange}
      content={content}
    />
  )
}
