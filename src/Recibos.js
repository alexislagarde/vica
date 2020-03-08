import  React from 'react';
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
    height: 900,
    width: 1050,
    border: 4,
    marginBottom: 250,


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



export default function Recibos() {
  const classes = useStyles();
  return (
    <div className="Recibo">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Número</StyledTableCell>
            <StyledTableCell align="right">Fecha</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
            <StyledTableCell align="right">Usuario</StyledTableCell>
            <StyledTableCell align="right">Cobrador</StyledTableCell>
            <StyledTableCell align="right">Sucursal</StyledTableCell>
            <StyledTableCell align="right">Observacion</StyledTableCell>
            <StyledTableCell align="right">Anulado</StyledTableCell>
          </TableRow>
        </TableHead>
        </Table>
      </TableContainer>
      </div>
    );
  }

        // <TableBody>
        //   {rows.map(row => (
        //     <TableRow key={row.name}>
        //       <TableCell component="th" scope="row">
        //         {row.name}
        //       </TableCell>
        //       <TableCell align="right">{row.Número}</TableCell>
        //       <TableCell align="right">{row.Fecha}</TableCell>
        //       <TableCell align="right">{row.Total}</TableCell>
        //       <TableCell align="right">{row.Usuario}</TableCell>
        //       <TableCell align="right">{row.Cobrador}</TableCell>
        //       <TableCell align="right">{row.Observacion}</TableCell>
        //       <TableCell align="right">{row.Anulado}</TableCell>
        //     </TableRow>
        //   ))}
        //</TableBody>
