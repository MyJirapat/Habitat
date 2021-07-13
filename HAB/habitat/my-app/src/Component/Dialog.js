import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '95%',
    marginTop: "-2%",
    display: "block",
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    
  },
}));

export default function FormDialog() {
  const classes =useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  
  return (
    <div className={classes.root} >
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add
      </Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-apartment"
      >
        <DialogTitle id="edit-apartment">Add</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please, edit .
          </DialogContentText>

          <TextField autoFocus
                  margin="dense"
                  id="no"
                  label="No"
                  type="text"
                  fullWidth
          />
          <TextField autoFocus
                  margin="dense"
                  id="buildingname"
                  label="Buildingname"
                  type="text"
                  fullWidth
          />

          <TextField autoFocus
                  margin="dense"
                  id="room"
                  label="Roomnumber"
                  type="text"
                  fullWidth
          />
    
          <TextField autoFocus
                margin="dense"
                id="people"
                label="People No"
                type="text"
                fullWidth
          />

          <TextField autoFocus
                margin="dense"
                id="amount"
                label="Amout"
                type="text"
                fullWidth
          />

          <TextField autoFocus
                margin="dense"
                id="bill"
                label="Bill"
                type="text"
                fullWidth
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
