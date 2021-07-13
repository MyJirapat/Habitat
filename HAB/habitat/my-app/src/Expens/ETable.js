import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const columns = [
  {id: 'no', label: 'No' },
  

  { id: 'room_no', label: 'Room Number'},

  {
    id: 'people',
    label: 'Status',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'amount',
    label: 'Previous Date', 
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'bill',
    label: 'Previous Reading',  
    format: (value) => value.toLocaleString('en-US'),
  },


  {
    id: 'status',
    label: 'Current Reading',
    format: (value) => value.toFixed(2),
  },

  {
    id: 'action',
    label: 'Usage', 
    format: (value) => value.toFixed(2),
  },

  {id: 'option', label: 'Option' },
  




];

function createData(Room, Status, PreviousDate, PreviousReading, Current,Usage,Option) {
  return { Room, Status, PreviousDate, PreviousReading, Current,Usage,Option};
}

const rows = [
  createData('101', 'Inhabitable', '27/04/2021', '3962', '', '96', ''),
  createData('102', 'Inhabitable', '27/04/2021', '3962', '', '96', ''),
  createData('103', 'Habitable',   '27/04/2021', '3962', '', '96', ''),
  createData('104', 'Inhabitable', '27/04/2021', '3962', '', '96', ''),
];


const Floor2 = [
  createData('201', 'Inhabitable', '27/04/2021', '3962', '', '96', ''),
  createData('202', 'Inhabitable', '27/04/2021', '3962', '', '96', ''),
  createData('203', 'Habitable',   '27/04/2021', '3962', '', '96', ''),
  createData('204', 'Inhabitable', '27/04/2021', '3962', '', '96', ''),
];



export default function AcccessibleTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
       <h4> {props.header}</h4>
      <Table className={classes.table} aria-label="caption table">
       
        <TableHead>
          <TableRow>
          {columns.map((column) => (
                <TableCell  
                  className={classes.Head}
                  key={column.id} 
                  align={column.align}
                  style={{ minWidth: column.minWidth}}
                >
                  {column.label}
                </TableCell>
          ))}
          </TableRow>
        </TableHead>


        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.props}>
              <TableCell component="th" scope="row">
                
              </TableCell>
              <TableCell align="left">{row.Room}</TableCell>
              <TableCell align="left">{row.Status}</TableCell>
              <TableCell align="left">{row.PreviousDate}</TableCell>
              <TableCell align="left">{row.Current}</TableCell>
              <TableCell align="left">{row.Usage}</TableCell>
              <TableCell align="left">{row.Option}</TableCell>


            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>

  );
}



