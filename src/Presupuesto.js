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
    width: 1000,
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



export default function Presupuesto() {
  const classes = useStyles();
  return (
    <div className="Presupuestos">
      <h6 align="center">Prespuestos</h6>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>#</StyledTableCell>
                    <StyledTableCell align="right">Fecha</StyledTableCell>
                    <StyledTableCell align="right">Numero</StyledTableCell>
                    <StyledTableCell align="right">Vehiculo</StyledTableCell>
                    <StyledTableCell align="right">Total</StyledTableCell>
                    <StyledTableCell align="right">Vendedor</StyledTableCell>
                    <StyledTableCell align="center">Orden de trabajo</StyledTableCell>
                    <StyledTableCell align="center">Forma de pago</StyledTableCell>
                    <StyledTableCell align="right">Sucursal</StyledTableCell>
                    <StyledTableCell align="right">Observacion</StyledTableCell>
                    <StyledTableCell align="right">Situaciones</StyledTableCell>
                  </TableRow>
                </TableHead>
                </Table>
              </TableContainer>
      </div>
    );
  }
