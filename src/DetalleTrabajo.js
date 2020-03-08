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


export default function DetallesTrabajo() {
  const classes = useStyles();
  return (
    <div className="DetallesTrabajo">
        <h6 align="center">Detalles de trabajo</h6>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>#</StyledTableCell>
                    <StyledTableCell align="right">Codigo</StyledTableCell>
                    <StyledTableCell align="right">Descripcion</StyledTableCell>
                    <StyledTableCell align="right">Presupuesto</StyledTableCell>
                    <StyledTableCell align="right">Responsable</StyledTableCell>
                    <StyledTableCell align="right">P.U c/IVA</StyledTableCell>
                    <StyledTableCell align="right">Desc/Rec</StyledTableCell>
                    <StyledTableCell align="right">Sub Total</StyledTableCell>
                  </TableRow>
                </TableHead>
                </Table>
              </TableContainer>
      </div>
    );
  }
