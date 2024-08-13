import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ImgCard({img,title,p}) {
  return (
    <Card sx={{
        maxWidth: 345,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)', 
        borderRadius: '8px',
        transition: 'transform 0.3s ease-in-out', 
        '&:hover': {
          transform: 'scale(1.05)', 
        },
      }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200px"
          image={img}
          alt="img-loveus"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {p}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
