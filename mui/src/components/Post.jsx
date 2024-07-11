import React from 'react';
import {Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions} from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';

const Post = () => {
  return (
    <div>
        <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              S V
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Southern Viscacha"
          subheader="A Relaxed and Somber Rodent"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://media.gettyimages.com/id/163243554/photo/a-mountain-viscacha-yawning-and-stretching-on-the-salt-flats-salar-de-uyuni-bolivia.jpg?s=2048x2048&w=gi&k=20&c=SVHeH4gbAdSLR8_de6FujquempAvmtaq_hflfDfSd2Q="
          alt="viscacha"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Viscachas are South American rodents known for their long ears, bushy tails, and somber expressions. They spend much of their time resting on rocks and sunbathing.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
           <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>}/>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          </CardActions>
      </Card>
    </div>

  );
};

export default Post;