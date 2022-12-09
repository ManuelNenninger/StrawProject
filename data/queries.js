// Construct our "blocks" GROQ
export const blocksgrid = `
  _type == 'agreementcard' => {
    _type,
    _key,
    iconname,
    title,
    body,
  },
`
// Construct our "processstep" GROQ
export const blocksprocessstep = `
  _type == 'processstep' => {
    _type,
    _key,
    mainTitle,
    describtion,
    mainImage,
  },
`
// Construct our "faqrow GROQ
export const blockfaqbuilder = `
  _type == 'faqrow' => {
    _type,
    _key,
    title,
    body,
  },
`
// Construct our "mediainfocard GROQ
export const blockmediainfocard = `
  _type == 'mediainfocard' => {
    _type,
    _key,
    cardtitle,
    body,
    mainImage,
  },
`

// Construct our "faqrow GROQ
export const blockspecialpricecard = `
  _type == 'priceinfo' => {
    _type,
    _key,
    pricecardtitle,
    pricecarddescribtion,
    pricecardprice,
  },
`

// Construct our content "modules" GROQ
export const modules = `
  _type == 'grid' => {
    "grid": {
        _type,
        _key,
        sectionTitle,
        size,
        columns[]{
          sizes[]{
            breakpoint,
            width,
            justify,
            align,
            start
          },
          blocks[]{
            ${blocksgrid}
          }
        }
      }
    },
  _type == 'processsection' => {
    "processsection": {
      _type,
      _key,
      sectionTitle,
      processbuilder[]{
        ${blocksprocessstep}
      },
    }
  },
  _type == 'herosection' => {
    "herosection": {
      _type,
      _key,
      heroTitle,
      heroDescribtion,
      mainImage,
      "primaryCallToAction": primaryCallToAction->{url,linkText},
    }
  },
  _type == 'aboutsection' => {
    "aboutsection": {
      _type,
      _key,
      aboutTitle,
      body,
    }
  },
  _type == 'faqsection' => {
    "faqsection": {
      _type,
      _key,
      faqsectiontitle,
      mainImage,
      alignment,
      faqbuilder[]{
        ${blockfaqbuilder}
      }
    }
  },
  _type == 'cardinfosection' => {
    "cardinfosection": {
      _type,
      _key,
      sectionTitle,
      cardbuilder[]{
        ${blockmediainfocard}
      },
    }
  },
  _type == 'specialpricesection' => {
    "specialpricesection": {
      _type,
      _key,
      sectionTitle,
      sectionDescribtion,
      priceinfobuilder[]{
        ${blockspecialpricecard}
      },
    }
  },
`
export const footermodule = `
brandname,
footersocial,
footerrowbuilder[]{
  _type == 'footerrow' => {
    "footerrow": {
      _type,
      _key,
      metaTitle,
      linkbuilder[]{
        _type == 'footerlink' =>{
          linkname,
          url,
        }
      },
    }
},
},
`
