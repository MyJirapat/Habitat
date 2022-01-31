import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import Feecard from './Feecard'
// import Feecard from "../../Components/Feeset/Feecard";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { NavLink, Link } from "react-router-dom";
//import Savebtn from "../../Components/Button/Save";
import InfoIcon from '@material-ui/icons/Info';
import axios from "axios";
import { useParams } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  heder: {
    width: '100%',
    padding: theme.spacing(1),
    marginTop: '4%',
  },
  Card: {
    width: '110%',
    padding: theme.spacing(3),
    margin: '4%',
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
  Btn: {
    marginLeft: "92%",
    marginTop: "-4%",
  },

  papers: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  images: {
    width: 128,
    height: 128,
  },
  imgs: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

  Dialog: {
    padding: theme.spacing(2),
    width: 450,

  },
  PriceTag: {
    height: "24px",
    width: "100px",
    backgroundColor: '#D8D8D8',
    borderRadius: '13px',
    fontSize: '13px',
    color: '#4A4A4A',
    fontWeight: '400',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
  },
  MoveName: {
    marginLeft: "45%",
  },

  buttonsubmit: {
    width: "407px",
    height: "42.8px",
    position: "absolute",
    top: 620,
    left: "39%"
  },

}));

export default function Feeset(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const handleClickOpen = () => {
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [isLoading, setIsLoading] = useState(false)

  const [allfeeset, setAllfeeset] = useState([]);
  useEffect(() => {
    axios.get('/feeset/fee-sets').then(response => {
      console.log(response.data);
      setAllfeeset(response.data);
      setIsLoading(true)
    })
      .catch(error => {
        console.log('Error data: ' + error);
        setIsLoading(true)
      })
  }, []);

  const deletetable = (id) => {
    axios.post(`/feeset/fee-set/${id}`)
      .then(() => {
        alert(['Delete'])
        setAllfeeset(
          allfeeset.filter((row) => {
            return row.feeSetId != id;
          })
        );
      });
  };

  const { id } = useParams()

  if (isLoading) {
   
  return (
    <div className="container ">
      <div>

        <Card className={classes.Card} variant="outlined">
          <Table aria-label="caption table">
            <TableHead >
              <TableRow>
                <TableCell className={classes.heder}>
                  <h4>Fee Sets</h4>
                  <NavLink to={`/feesets/${id}`} style={{ textDecoration: 'none' }}>
                    {/* <Link to={`/feesets_sp/${id}`} style={{ textDecoration: 'none' }}> */}

                    <Button
                      className={classes.Btn}
                      variant="contained" color="primary" disableElevation
                      style={{ backgroundColor: '#485D84' }}>Create</Button>
                  </NavLink>
                  {/* </Link> */}

                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <br />
              <Grid container spacing={0}>
                {allfeeset.map((row, key) => {
                  return (
                    <Grid item xs={4}>
                      <div className="col-sm">
                        <Feecard 
                          className={classes.MoveName}
                          Set={row.feeSetName}
                          //key={key.feeSetId}
                          //Roomprice="Standard"
                            Electric="Electricity"
                            Water="water"
                          name={row.feeTypeName}
                          info={
                            <InfoIcon style={{ display: "flex", flexWrap: 'wrap' }}
                              onClick={handleClickOpen}
                              size="small" />}
                          /*Edit={
                              <DeleteOutlinedIcon 
                              onClick={()=>{deletetable(row.feeSetId)}}
                                size="small"/>}*/

                          delete={
                            <DeleteOutlinedIcon
                              style={{ marginTop: "12%" }}
                              onClick={() => { deletetable(row.feeSetId) }}
                              size="small" />}
                        />     
                      </div>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="edit-apartment">
                        <DialogTitle id="customized-dialog-title" onClose={handleClose}>{row.feeSetName}</DialogTitle>

                        <DialogContent className={classes.Dialog}>
                          {row.feeTypes.map((num) => (
                            <DialogContentText>
                              <DialogActions className="createAccount">
                                <Grid container spacing={2}>
                                  <Grid item xs={5}>
                                    {num.feeTypeName}
                                  </Grid>
                                  <Grid item xs={5}>
                                    {num.feeTypePrice}
                                  </Grid>
                                  <Grid item xs={2} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                      <Grid item xs={5}>
                                        THB
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </DialogActions>
                            </DialogContentText>
                          ))}
                        </DialogContent>
                      </Dialog>
                    </Grid>
                  )
                })}
              </Grid>
            </TableBody>
          </Table>
        </Card>
      </div>
      <CardActions>
          {/* <Link to={`/roomtype_sp/${id}`}> */}
          <Link to={`/setting2/${id}`}>
            {/* window.location.href =  `/setting2/${id}`; */}
          <Button className={classes.buttonsubmit}
                  variant="contained" color="primary" disableElevation
                  style={{ backgroundColor: '#485D84' }}> Save</Button>
          </Link>
      </CardActions>
    </div>
  );
  } else {
    return (
      <div>
          <CircularProgress className={classes.IsLoading} color="secondary" />
      </div>
      )
    }
}