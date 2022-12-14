import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(700).height(350).fit('max').auto('format')}
        />
      )
    }
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({children}) => <Typography variant="h1" gutterBottom><p>{children}</p></Typography>,
    h2: ({children}) => <Typography variant="h2" gutterBottom><p>{children}</p></Typography>,
    h3: ({children}) => <Typography variant="h3" gutterBottom><p>{children}</p></Typography>,
    h4: ({children}) => <Typography variant="h4" gutterBottom><p>{children}</p></Typography>,
    h5: ({children}) => <Typography variant="h5" gutterBottom><p>{children}</p></Typography>,
    body1: ({children}) => <Typography variant="body1" gutterBottom><p>{children}</p></Typography>,
    normal: ({children}) => <Typography variant="subtitle1" gutterBottom component="div"><p>{children}</p></Typography>,
    blockquote: ({children}) => <blockquote className="border-l-purple-500"><p>{children}</p></blockquote>,

    // Ex. 2: rendering custom styles
    //Für Hero Section Title
    customHeading: ({children}) => {
      return(
      <>
        <Box sx={{display: {xs: "none", sm: "block"}}} >
          <Typography variant="h2" gutterBottom component="h1" sx={{fontWeight: "300"}}>{children}</Typography>
        </Box>
        <Box sx={{display: {xs: "block", sm: "none"}}} >
          <Typography variant="h3" gutterBottom component="h1" sx={{fontWeight: "300"}}>{children}</Typography>,
        </Box>
      </>)
    },
  },
  marks: {
    highlight: ({children}) => {return <span className="highlight">{children}</span>}
  },
}

export const urlFor = (source) => {
  return imageUrlBuilder(client).image(source)
}
