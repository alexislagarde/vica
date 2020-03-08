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
    maxheight: 200,
    width: 510,
    border: 4,
    marginBottom: 100,

  },
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

export default function Pagores() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Forma de pago</StyledTableCell>
            <StyledTableCell align="right">Importe $</StyledTableCell>
          </TableRow>
        </TableHead>
        </Table>
      </TableContainer>
    );
  }
