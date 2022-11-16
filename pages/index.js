import HomePage from "../src/components/templates/homePage"
import client from '../client'
import groq from 'groq'
// import SeoHead from "../src/components/seoComponents/seoHead";
// import { urlFor } from "../lib/sanity"
import { modules, modulestest } from '../data/queries'


export default function Home(props) {

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
    // console.log("Neue Daten!");
    // console.log(pages.seo);
    return {
      props: {
        pages
      },
      revalidate: process.env.SANITY_REVALIDATE_SECRET ? parseInt(process.env.SANITY_REVALIDATE_SECRET) : parseInt(86400),
    }
}
