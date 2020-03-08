import  React  from 'react';
//Elemetos de Material UI
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';

import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    height: 200,
    width: 530,
    border: 4,
    marginBottom: 100,
  },
  TableContainer:{


  }
});
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);



export default function Itemsfact() {
  const classes = useStyles();
  return (
    <div className="Items">
       <h6 align="center">Items de Factura</h6>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>#</StyledTableCell>
                  <StyledTableCell>Codigo</StyledTableCell>
                  <StyledTableCell align="left">Descripcion</StyledTableCell>
                </TableRow>
              </TableHead>
              </Table>
            </TableContainer>
    </div>
    );
  }
