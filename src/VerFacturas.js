import  React, {Component}  from 'react';
import'./Estilos/Consres.css';
import refresh from './Imagenes/refresh.png';

import Factura from "./Facturas.js";
import Itemsfact from "./Itemsfact.js";
import FormaPago from "./FormaPago.js"


class VerFacturas extends Component {
  constructor(props) {
    super(props);
    this.state = ({ FechaDesde: '' ,
                    FechaHasta: '',
                    Sucursal: ''
  })
     this.procesar = this.procesar.bind(this);
     this.cambioFechaDesde =this.cambioFechaDesde.bind(this);
    this.cambioFechaHasta =this.cambioFechaHasta.bind(this);
     this.cambioSucursal =this.cambioSucursal.bind(this);
  }

  render() {
    return (
      <div className="Consres">
                <div className="Conres-body">
                      <form onSubmit={this.procesar}>
                        <table className="Conres-table">
                          <tr>
                              Buscar
                          </tr>
                          <tr>
                               <td>  Desde:  </td>
                               <td > <input id="date" type="date" value={this.state.FechaDesde} onChange={this.cambioFechaDesde} /></td>
                               <td >  Hasta: </td>
                               <td > <input id="date" type="date" value={this.state.FechaHasta} onChange={this.cambioFechaHasta} /></td>
                               <td>Sucursal:</td>
                               <td><select name="Seleccione"><option value="">(TODAS)</option></select></td>
                               <td><input type="Image" src={refresh} className="Consres-logo" alt="refresh"  height="25" width="25" /></td>
                         </tr>
                        </table>
                      </form>
                        <table className="Consres-Recibos">
                                <tr>
                                    <td><Factura /> </td>
                                </tr>
                        </table>
                        <table className="Conres-table2">
                            <tr>
                                  <td align="left"> <Itemsfact /> </td>
                                  <td ><FormaPago /> </td>
                            </tr>
                        </table>

                  </div>
                  </div>

                );
    }


  procesar(e) {
   e.preventDefault();
   alert('Dato cargado '+this.stateFechaDesde + ' ' +
                        +this.state.FechaHasta + ' ' +
                        +this.state.Sucursal);
 }
  cambioFechaDesde(e) {
      this.setState( {
        FechaDesde: e.target.value
      })
    }

    cambioFechaHasta(e) {
      this.setState( {
        FechaHasta: e.target.value
      })
    }

    cambioSucursal(e) {
      this.setState( {
        Sucursal:  e.target.value
      })
    }
  };

export default VerFacturas;
