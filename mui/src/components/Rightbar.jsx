import React from "react";
import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100} color="primary">
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Naruto Uzumaki"
            src="https://i.pinimg.com/564x/96/71/aa/9671aac619fa889884a4a635e1169e58.jpg"
          />
          <Avatar
            alt="Monkey D. Luffy"
            src="https://i.pinimg.com/564x/d9/21/60/d92160da86a546289978a4d589e434bf.jpg"
          />
          <Avatar
            alt="Goku"
            src="https://i.pinimg.com/736x/2c/b9/08/2cb908d9f969eede348d7ef1ce56a62c.jpg"
          />
          <Avatar
            alt="Ichigo Kurosaki"
            src="https://i.pinimg.com/564x/2c/69/25/2c69255c959d5a86cc081e234ca3f7c5.jpg"
          />
          <Avatar
            alt="Eren Yeager"
            src="https://i.pinimg.com/736x/e0/25/c8/e025c8647945c331aca02cb7defd78f3.jpg"
          />
          <Avatar
            alt="Denji"
            src="https://i.pinimg.com/736x/9a/f3/a6/9af3a6135d5802e1222ba7796f0c73a9.jpg"
          />
          <Avatar
            alt="Gojo Satoru"
            src="https://i.pinimg.com/564x/dd/7d/97/dd7d973f3eaa5cc38ffa0af6d6fb23ec.jpg"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2} color="primary">
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
              src="https://i.pinimg.com/236x/73/8c/73/738c7301d58c54a4b03c5b1a74db722e.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/236x/91/4d/0e/914d0edb1bae833f124e741c2d400ece.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2} color="primary">
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Naruto"
                src="https://i.pinimg.com/564x/96/71/aa/9671aac619fa889884a4a635e1169e58.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Naruto Uzumaki
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Luffy"
                src="https://i.pinimg.com/564x/d9/21/60/d92160da86a546289978a4d589e434bf.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Monkey D. Luffy
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Ichigo"
                src="https://i.pinimg.com/564x/2c/69/25/2c69255c959d5a86cc081e234ca3f7c5.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ichigo Kurosaki
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
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
