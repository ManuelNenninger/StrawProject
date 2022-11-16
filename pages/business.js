import BusinessMain from "../src/components/templates/businessMainPage";
import client from '../client'
import groq from 'groq'

import { modules, modulestest } from '../data/queries'

export default function Business(props){

  return(
    <>
      <BusinessMain {...props}/>
    </>
  )
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

//console.log(pages.pageBuilder[1]);
    return {
      props: {
        pages
      },
      revalidate: process.env.SANITY_REVALIDATE_SECRET ? parseInt(process.env.SANITY_REVALIDATE_SECRET) : parseInt(86400),
    }
}
