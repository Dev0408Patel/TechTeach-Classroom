import  React,{Component} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


 function ClassCard(props) {
    return (
    <div className='classcard'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.classImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.classTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.classQuote}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}


export default ClassCard;