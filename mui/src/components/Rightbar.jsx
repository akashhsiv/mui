import React from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar'


const Rightbar = () => {
  return (
    <Box
      
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
    <Box position="fixed">
      <Typography variant='h6' fontWeight={100}>
        Online Friends
      </Typography>
      <AvatarGroup max={7}>
      <Avatar alt="Naruto Uzumaki" src="https://i.pinimg.com/564x/96/71/aa/9671aac619fa889884a4a635e1169e58.jpg" />
      <Avatar alt="Monkey D. Luffy" src="https://i.pinimg.com/564x/d9/21/60/d92160da86a546289978a4d589e434bf.jpg" />
      <Avatar alt="Goku" src="https://i.pinimg.com/736x/2c/b9/08/2cb908d9f969eede348d7ef1ce56a62c.jpg" />
      <Avatar alt="Ichigo Kurosaki" src="https://i.pinimg.com/564x/2c/69/25/2c69255c959d5a86cc081e234ca3f7c5.jpg" />
      <Avatar alt="Sailor Moon" src="https://i.pinimg.com/564x/a6/f7/0d/a6f70d22758be41caecabdd37d4b3dd9.jpg" />
      <Avatar alt="Eren Yeager" src="https://i.pinimg.com/736x/e0/25/c8/e025c8647945c331aca02cb7defd78f3.jpg" />
      <Avatar alt="Edward Elric" src="https://i.pinimg.com/564x/8d/a9/52/8da9529c241d91422bdad87ef95908b6.jpg" />
      <Avatar alt="Denji" src="https://i.pinimg.com/736x/9a/f3/a6/9af3a6135d5802e1222ba7796f0c73a9.jpg" />
      <Avatar alt="Gojo Satoru" src="https://i.pinimg.com/564x/dd/7d/97/dd7d973f3eaa5cc38ffa0af6d6fb23ec.jpg" />
      
      </AvatarGroup>
      <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
        Latest Posts 
      </Typography>
      <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img
            src="https://i.pinimg.com/474x/1d/66/03/1d6603367d840e261961fe02d251884b.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://i.pinimg.com/236x/c4/18/cd/c418cd0b384a317e74e830c896d39e89.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://i.pinimg.com/736x/27/2d/4d/272d4db5d4015542168a80bd904cc6c2.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://i.pinimg.com/236x/08/e4/f4/08e4f4df275dbff0878941bad1647cdb.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://i.pinimg.com/474x/ad/90/8c/ad908cf69eae875da4c01f8a8abc02a0.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography variant='h6' fontWeight={100} mt={2} >
        Latest Conversations
      </Typography>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
    </Box>
  );
};

export default Rightbar;
