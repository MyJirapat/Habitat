import React from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


const columns = [
  {id: 'no', label: 'No' },
  { id: 'buildingname', label: 'Building Name'},
  { id: 'room_no', label: 'Room Number'},

  {
    id: 'people',
    label: 'People No',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'amount',
    label: 'Total Amount', 
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'bill',
    label: 'Bill At',  
    format: (value) => value.toLocaleString('en-US'),
  },


  {
    id: 'status',
    label: 'Status',
    format: (value) => value.toFixed(2),
  },

  {
    id: 'action',
    label: 'Action', 
    format: (value) => value.toFixed(2),
  },

];

function createData(no, buildingname, room_no, people, amount, bill, status, action) {
  
  return { 
    no, buildingname, room_no, people, amount, bill,status, action };
}

const rows = [
  createData('1','King David', '401', 4, 4000, '30/2/21', 'paid' ),
  createData('2','King David', '402', 4, 4000, '30/2/21', 'paid' ),
  createData('3','King David', '403', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('4','King David', '404', 4, 4000, '30/2/21', 'paid' ),
  createData('5','King David', '405', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('6','King David', '406', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('7','King David', '407', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('8','King David', '408', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('9','King David', '409', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('10','King David', '410', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('11','King David', '411', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('12','King David', '412', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('13','King David', '413', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('14','King David', '414', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('15','King David', '415', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('16','King David', '416', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('17','King David', '417', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('18','King David', '418', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('19','King David', '415', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('20','King David', '416', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('21','King David', '417', 4, 4000, '30/2/21', 'Unpaid' ),
  createData('22','King David', '418', 4, 4000, '30/2/21', 'Unpaid' ),
];


const useStyles = makeStyles({
  root: {
    width: '90%',
    alignItems: 'center',
    display: "inline-block",
    
    
  },
  container: {
    maxHeight: 440,
  },
  
  Head:{
    backgroundColor: '#8795b6',
    color: '#ffff'
  },

  color:{
   font:'white'
  }
});





export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const hStyle = { color: 'white' };

  return (
     
    <Paper className={classes.root}>  
      <TableContainer className={classes.container}>     
        <Table stickyHeader aria-label="sticky table">

          <TableHead className={classes.font} >
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
            {rows.slice(page * rowsPerPage, page*rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>     
     
      <TablePagination
         rowsPerPageOptions={[10, 25, 100]}
         component="div"
         count={rows.length}
         rowsPerPage={rowsPerPage}
         page={page}
         onChangePage={handleChangePage}
         onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>

    
   
  );
}







