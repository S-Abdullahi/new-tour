import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';

export default function Tile(props) {
console.log(props.item)
  return (<>
      <Card sx={{ maxWidth: 345, m:5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.item.info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:"flex", justifyContent:'center'} }>
        <Button variant="outlined" color='error'>Not Interested</Button>
      </CardActions>
    </Card>
  </>);
}
