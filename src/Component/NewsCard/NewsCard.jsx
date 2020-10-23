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
import { makeStyles,withStyles} from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import MissingImage from './MissingImage.png'


// Styling for the parts within the NewsCard Components 
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    margin : 20, 
    height: "100%"
  },
  media: {
    width: "100%",
    height: "100%",
    paddingTop: "56.5%",
    objectFit : "cover"
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


  // Determining if we need to use the default pic 
  let media = <CardMedia className={classes.media} image={MissingImage} title={props.urlToImage} />

  if(props.urlToImage !== null && props.urlToImage !== ""){
    media =  <CardMedia className={classes.media} image={props.urlToImage} title={props.urlToImage} />
  }

  console.log(props.url)

 

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
          title={props.title}
          subheader={props.source}
        />

        {
          // Image of the article 
          media
        }

        {/* Date and the summary of the article section */ }
        <CardContent>
          <Typography className={classes.dateStyle}>
              {moment(props.date).format('ll')}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
          </Typography>
        </CardContent>

        {/* Article section */ }
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {props.content}
            </Typography>
          </CardContent>
        </Collapse>
      </CardActionArea>

      {/* Buttons section for the card with sharing menu*/ }
      <CardActions>
          <Button size="small" onClick={handleClick}>
            Share Article
          </Button>
          <Button size="medium" onClick={() => window.location.href = props.url}>
            Read More
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={()=> window.open(`https://facebook.com/sharer/sharer.php?u=${props.url}`, "_blank")}>
              <ListItemIcon>
                <FacebookIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Facebook Post"/>
            </StyledMenuItem>
            <StyledMenuItem onClick={()=> window.open(`https://twitter.com/intent/tweet?&text=${props.url}`, "_blank")}>
              <ListItemIcon>
                <TwitterIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Tweet" />
            </StyledMenuItem>
            <StyledMenuItem onClick={()=> window.open(`mailto:?subject=${props.title}&body=${props.url}%20is%20the%20link!`, "_blank")}>
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