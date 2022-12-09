import BusinessMain from "../src/components/templates/businessMainPage";
import client from '../client'
import groq from 'groq'
import { useRouter } from 'next/router'
import NotFoundPage from "./404";
import { Module } from "../src/components/templates/modules/modulepicker";

import { modules, modulestest } from '../data/queries'

export default function Business(props){
  const {pages={}} = props
    const {seo={}} = pages;
    const router = useRouter();

    if(!router.isFallback && (Object.keys(pages).length === 0)){
    return <NotFoundPage statusCode={404}/>
  }

  // pages.pageBuilder?.map(function(obj, index){
  //   //console.log({...Object.values(obj)[0]});
  //   const content = {...Object.values(obj)[0]}
  //   // console.log("Module Name: "+ Object.keys(obj)[0]);
  //   // console.log({...content});
  // })
  // let testobj = pages.pageBuilder[2];
  // let testContent = {...Object.values(testobj)[0]}
  // const moduleName = Object.keys(testobj)[0].toString();
  // console.log("Test Object ist Name ist: ");
  // console.log(moduleName);
  //
  // return   <Module moduleName={moduleName} content={testContent}/>


  if(!router.isFallback){
return(
  <>
    {
      pages.pageBuilder.map(function(obj, index){
        //console.log({...Object.values(obj)[0]});
        const content = {...Object.values(obj)[0]}
        const moduleName = Object.keys(obj)[0].toString();
        return (
          <Module
          moduleName={moduleName}
          onVariantChange={content}
          content={content}
        />)
      })
    }
  </>
)}
// ----------
//   return(
//     <>
//       <BusinessMain {...props}/>
//     </>
//   )
}

export async function getStaticProps() {

    const pages = await client.fetch(groq`
      *[_type == "page" && slug.current == "business"][0]{
        pageBuilder[]{
          defined(_ref) => { ...@->content[0] {
            ${modules}
          }},
          !defined(_ref) => {
            ${modules}
          }
        },
        title,
        "slug": slug.current,
        seo,
      }
    `)

    return {
      props: {
        pages
      },
      revalidate: process.env.SANITY_REVALIDATE_SECRET ? parseInt(process.env.SANITY_REVALIDATE_SECRET) : parseInt(86400),
    }
}
