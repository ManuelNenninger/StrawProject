import Typography from "@mui/material/Typography";

export default function HighlighterText({children }){
  return (
    <>
      <Typography variant="h2" component="span" className="highlight" color="text.secondary" gutterBottom sx={{  }}>
        {children}
      </Typography>
    </>
  )
}
