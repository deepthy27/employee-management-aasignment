import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../App.css";

export default function Cards(props) {
  return (
    <Card className='cards' sx={{ maxWidth: 345 }}>
      <CardActionArea className='card-action'>
        <CardMedia
          component="img"
          height="240"
          image={props.cardImg}
          alt="employee"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.cardName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.cardDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
