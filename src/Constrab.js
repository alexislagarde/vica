import  React, {Component}  from 'react';
import'./Estilos/Consres.css';


import Trabajos from './Trabajos.js';
import DetalleTrabajo from './DetalleTrabajo.js';
//import Items from './Itemres.js';
///import money from './Imagenes/money.png';
//import Pago from './Pagosres.js';

//Elementos del material-ui


class Constrab extends Component {
  render() {
    return (
      <div className="Consres">



                <div className="Conres-body">
                        <table className="Consres-Recibos">
                        <tr>
                            <td><Trabajos />   </td>
                        </tr>
                        <tr>
                            <td><DetalleTrabajo />   </td>
                        </tr>
                        </table>
                </div>
      </div>
    );
  }
  };


export default Constrab;
