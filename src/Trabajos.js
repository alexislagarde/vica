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
    maxheight: 100,
    width: 900,
    border: 4,
    marginBottom: 200,

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


export default function Trabajos() {
  const classes = useStyles();
  return (
    <div className="Trabajos">
    <h6 align="center">Consulta de Trabajos</h6>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
         <TableHead>
            <TableRow>
              <StyledTableCell>Estado</StyledTableCell>
              <StyledTableCell align="right">Fecha</StyledTableCell>
              <StyledTableCell align="right">Compromiso</StyledTableCell>
              <StyledTableCell align="right">Numero</StyledTableCell>
              <StyledTableCell align="right">Sucursal</StyledTableCell>
              <StyledTableCell align="right">Vehiculo</StyledTableCell>
              <StyledTableCell align="right">Total</StyledTableCell>
              <StyledTableCell align="right">Factura</StyledTableCell>
              <StyledTableCell align="right">Obsevacion</StyledTableCell>
            </TableRow>
          </TableHead>
          </Table>
        </TableContainer>
      </div>
    );
  }
