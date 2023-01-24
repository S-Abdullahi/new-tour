import React, {useState, useEffect} from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';

export default function Tile(props) {
console.log(props)

const [readMore, setRead] = useState(true)

function toggle(){
    setRead(prev => !prev)
    console.log(readMore)
}
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
          {readMore ? props.item.info : `${props.item.info.substring(0,200)}...`}<button onClick={()=>setRead(!readMore)}>{readMore ? "show less" : "see more"}</button>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:"flex", justifyContent:'center'} }>
        <Button variant="outlined" color='error' onClick={props.delete}>Not Interested</Button>
      </CardActions>
    </Card>
  </>);
}
