import React from 'react';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";
 
export default function MyApp() {
  return (
    <Card>
      <CardPrimaryContent>
        <h1>Header</h1>
        <CardMedia square imageUrl='./my/fancy/image.png' />
      </CardPrimaryContent>
 
      <CardActions>
        <CardActionButtons>
          <button>Click Me</button>
        </CardActionButtons>
 
        <CardActionIcons>
          <i>Click Me Too!</i>
        </CardActionIcons>
      </CardActions>
    </Card>
  );
}