import HomePage from "../src/components/templates/homePage"
import client from '../client'
import groq from 'groq'
// import SeoHead from "../src/components/seoComponents/seoHead";
// import { urlFor } from "../lib/sanity"
// import Modulepicker from "../src/components/templates/modules/modulepicker"
import { modules, modulestest, footermodule } from '../data/queries'

export default function Home(props) {
  let {footer} = props;
  //let {metaDesc, metaTitle, shareDesc, shareTitle, shareGraphic} = props?.pages?.seo;
  
  return (
    <>
      {/*<SeoHead
        canonicalUrl={"/"}
        title={metaTitle && metaTitle}
        description={metaDesc && metaDesc}
        ogTwitterImage={shareGraphic && urlFor(shareGraphic).url()}
        ogImageUrl={shareGraphic && urlFor(shareGraphic).url()}
      />*/}
      <HomePage {...props}/>
      {/*props.pages.pageBuilder.map(function(obj, index){
        console.log(obj);
        return <Modulepicker moduleName={Object.keys(obj)[0]} content={obj}/
      })*/}
    </>
  )
}

export async function getStaticProps() {

    const pages = await client.fetch(groq`
      *[_type == "page" && slug.current == "index"][0]{
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
    const footer = await client.fetch(groq`
      *[_type == "footer"][0]{
        ${footermodule}
      }
    `)

    return {
      props: {
        pages,
        footer,
      },
      revalidate: process.env.SANITY_REVALIDATE_SECRET ? parseInt(process.env.SANITY_REVALIDATE_SECRET) : parseInt(86400),
    }
}
