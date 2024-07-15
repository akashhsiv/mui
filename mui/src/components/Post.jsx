import React from "react";
import {
  Card,
  CardHeader,
  Divider,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

const Post = ({ post }) => {
  return (
    <div>
      <Card sx={{ margin: 2, borderRadius: 2, boxShadow: 2, width: 550 }}>
        <CardHeader
          avatar={<Avatar src={post.avatarUrl} aria-label="recipe" />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography variant="h6" fontWeight="bold">
              {post.title}
            </Typography>
          }
        />
        <Divider sx={{ mb: 2 }} />
        <CardMedia
          component="img"
          height={250}
          image={post.imageUrl}
          alt={post.title}
          sx={{ objectFit: "contain", width: "100%", height: "200px" }}
        />
        <CardContent>
          <Typography variant="body1" color="text.primary">
            {post.caption}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
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
