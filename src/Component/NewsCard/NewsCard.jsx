import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

export default function NewsCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

   {/* Function to switch between expanding the card  */ }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

        {/* Image section */ }
        <CardMedia
          className={classes.media}
          image={props.urlToImage}
          title={props.urlToImage}
        />

        {/* Summary of the article section */ }
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

      {/* Buttons section for the card */ }
      <CardActions>
          <Button size="small">
            Share
          </Button>
          <Button size="medium" onClick={() => window.location.href = props.url}>
            Read More
          </Button>
      </CardActions>
    </Card>
  );
}
