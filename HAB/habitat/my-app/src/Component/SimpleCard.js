import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";

const columns = [
  { id: "name", label: "No", minWidth: 170 },

  { id: "code", 
  label: "Buildingname", 
  minWidth: 170,
  

},
  {
    id: "population",
    label: "People",
    minWidth: 170,
   
  },
  {
    id: "size",
    label: "Room",
    minWidth: 170,
    
  },
  {
    id: "density",
    label: "Amount",
    minWidth: 170,
    
  }
];


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        
        <Typography variant="h5" component="h2">
          {props.Text}
        </Typography>

      </CardContent>
    
      <CardActions>
        <Button size="small">{props.Btn}</Button>
      </CardActions>
    </Card>
  );
}




/*<Typography variant="h5" component="h2">
          {props.Text}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.Text2}
        </Typography>
        <Typography variant="body2" component="p">
          {props.description}
          <br />
          {props.Text3}
        </Typography>*/