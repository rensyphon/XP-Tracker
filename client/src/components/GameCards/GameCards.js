import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

//will need to pull image from igdb API. 
//As well as insert api fields into game and description
const gameImage = require('./assets/images/game-example'); 

export default function ActionAreaCard() {
  return (
    <Card className='game-cards' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={gameImage}
          alt="game"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            "game"
          </Typography>
          <Typography variant="body2" color="text.secondary">
           "description"
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
