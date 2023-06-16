import React from "react";
import { Box, colors } from "@mui/material";
import { styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { postsInfo } from "../service/postsData";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Posts = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      {postsInfo &&
        postsInfo.map((post, index) => (
          <Card key={`${index} + ${post.cardContent.title}`} sx={{margin: 4}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label={post.cardHeader.avatarLabel}>
                  {post.cardHeader.avatarInitials}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={post.cardHeader.title}
              subheader={post.cardHeader.subHeader}
            />
            <CardMedia
              component="img"
              width="100"
              height="194"
              image={`${post.cardMedia.image}`}
              alt={post.cardMedia.imageAlt}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.cardContent.title}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />{" "}
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                sx={{display: post.cardExpandableContent? "block" : "none"}}
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{display: post.cardExpandableContent? 'block' : 'none'}}>
              <CardContent>
                <Typography paragraph>{`${post.cardExpandableContent?.title}:`}</Typography>
                <Typography paragraph>
                  {post.cardExpandableContent?.bodyShortTop}
                </Typography>
                <Typography paragraph>
                 {post.cardExpandableContent?.bodyLong1}
                </Typography>
                <Typography paragraph>
                  {post.cardExpandableContent?.bodyLong2}
                </Typography>
                <Typography>
                  {post.cardExpandableContent?.bodyShortBottom}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
    </>
  );
};

export default Posts;
