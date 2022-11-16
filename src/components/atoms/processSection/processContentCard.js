import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from '@mui/material/LinearProgress';
import { useTheme } from "@mui/material/styles";
import  ActionButton from "../buttons/actionButton";
import CardActions from '@mui/material/CardActions';
import { urlFor} from "../../../../lib/sanity"

const illustrationArray = {
        1: "Delivery-pana-2.svg",
        2: "Pina-colada-pana.svg",
        3: "Customer feedback-amico.svg",
        4: "Product-iteration-bro.svg",
      }

export default function ActionAreaCard({ ContentArray, selected, progress }) {
  const theme = useTheme();
  let {mainTitle="", mainImage, describtion } = ContentArray[selected-1];


  return (
    <Box sx={{ m: {xs: 0, sm: 3, md: 5} }}>
      <Card sx={{ maxWidth: 400, backgroundColor: theme.palette.secondary.main, p: {xs: 1, sm: 3} }}>
        <CardActionArea>
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={progress} sx={{backgroundColor: theme.palette.secondary.main}}/>
          </Box>
          <CardMedia
            component="img"
            height="345"
            image={(urlFor(mainImage).url())}
            alt={mainTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" color="text.secondary">
              Schritt {selected}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{display: {xs: "none", sm: "block"}}}>
              {describtion}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{display: {xs: "block", sm: "none"}}} >
              {describtion}
            </Typography>
          </CardContent>
          <CardActions>
            <ActionButton
              fullWidth
              variant="contained"
              size="large"
              text="Order"
              href="/preis"
            />
          </CardActions>
        </CardActionArea>
      </Card>
    </Box>
  );
}
