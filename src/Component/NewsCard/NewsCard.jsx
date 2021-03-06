import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import moment from 'moment'; 
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import MissingImage from './MissingImage.png'
import { makeStyles,withStyles} from '@material-ui/core/styles';

/* 
  Newscard presents the article data in a material UI, which can share the article link 
  in different social media platforms! 
*/ 

// Styling for the parts within the NewsCard Components 
const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
    margin : 20, 
    height: "100%", 
    justifyContent: "space-evenly", 
    flexBasis: "30%"
  },
  media: {
    width: "100%",
    height: "100%",
    paddingTop: "56.5%",
    objectFit : "contain"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  dateStyle :{
    marginBottom : 10
  }
}));


// Styling for the menu 
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

// Styling for the menu item 
const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: "#004977",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

/* 
  Open Facebook to allow users to post a facebook post about the article url 
  and provided error handling to redirect users to the missing url page 
*/ 
function facebookShare(url){
  if(url === "missingurl"){
    window.open(`/${url}`, "_blank")
  }

  else{
    window.open(`https://facebook.com/sharer/sharer.php?u=${url}`, "_blank")
  }
}

/* 
  Open Twitter to allow users to tweet the article url 
  and provided error handling to redirect users to the missing url page 
*/ 
function twitterShare(url){
  console.log(url)
  if(url === "missingurl"){
    window.open(`/${url}`, "_blank")
  }

  else{
    window.open(`https://twitter.com/intent/tweet?&text=${url}`, "_blank")
  }
}

/*
   Open email application to allow users to mail article url
   and provided error handling to redirect users to the missing url page 
 */ 
function emailShare(url,title){
  if(url === "missingurl"){
    window.open(`/${url}`, "_blank")
  }

  else{
    window.open(`mailto:?subject=${title}&body=${url}%20is%20the%20link!`, "_blank")
  }
}

export default function NewsCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  {/* Function to switch between expanding the card  */ }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  {/* Function to open the share menu  */ }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  {/* Function to close the share menu  */ }
  const handleClose = () => {
    setAnchorEl(null);
  };

  let media = <CardMedia className={classes.media} image={MissingImage} title={props.urlToImage} />
  let title = props.title
  let source = props.source
  let description = props.description
  let content = props.content
  let date = props.date
  let url = props.url

  // When API return nothing for title, source, description, date, content, pic, and url, newscard present default value
  if(title === "" || title === null){
    title = "Title is unavailable"
  }

  if(props.urlToImage !== null && props.urlToImage !== ""){
    media =  <CardMedia className={classes.media} image={props.urlToImage} title={props.urlToImage} />
  }


  if(source === "" || source === null){
    source = "Source is unavailable"
  }

  if(description === "" || description === null){
    description = "Description is unavailable"
  }

  if(content === "" || content === null){
    content = "Content is unavailable"
  }

  if(url === "" || url === null){
    url = "missingurl"
  }

  if(date === "" || date === null){
    date = "Date is unavailable"
  }

  else{
    date = moment(props.date).format('ll')
  }

  return (
    <Card className={classes.root}>

      {/* Makes the card a clickable to expand the card */ }
      <CardActionArea  onClick={handleExpandClick}>

        {/* Header section */ }
        <CardHeader
          action={
            <IconButton
              className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          }
          title={title}
          subheader={source}
        />

        {/*Image of the news card*/}
        {media}

        {/* Date and the summary of the article section */ }
        <CardContent>
          <Typography className={classes.dateStyle}>
              {date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {description}
          </Typography>
        </CardContent>

        {/* Article section */ }
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {content}
            </Typography>
          </CardContent>
        </Collapse>
      </CardActionArea>

      {/* Buttons section for the card with sharing menu*/ }
      <CardActions>
          <Button size="small" onClick={handleClick}>
            Share Article
          </Button>
          <Button size="medium" onClick={()=> window.open(url, "_blank")}>
            Read More
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {/* Sharing the article on a Facebook post*/ }
            <StyledMenuItem onClick={()=> facebookShare(url)}>
              <ListItemIcon>
                <FacebookIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Facebook Post"/>
            </StyledMenuItem>
            
            {/* Sharing the article on a Tweet*/ }
            <StyledMenuItem onClick={()=> twitterShare(url)}>
              <ListItemIcon>
                <TwitterIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Tweet" />
            </StyledMenuItem>
            
            {/* Sharing the article on a Email post*/}
            <StyledMenuItem onClick={()=> emailShare(url,title)}>
              <ListItemIcon>
                <EmailIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Email" />
            </StyledMenuItem>
          </StyledMenu>
      </CardActions>
    </Card>
  );
}
