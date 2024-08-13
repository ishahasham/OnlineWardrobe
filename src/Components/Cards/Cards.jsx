import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Cards({ id, title, desc, image }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.slice(0, 15)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc.slice(0, 70)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/products/${id}`)}  sx={{
            color: 'white', 
            backgroundColor: 'black',
            '&:hover': {
              backgroundColor: 'darkgray'
            }
          }}>Add</Button>
      </CardActions>
    </Card>
  );
}
