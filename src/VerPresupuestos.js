import  React, {Component}  from 'react';
import'./Estilos/Consres.css';
import refresh from './Imagenes/refresh.png';


import Presupuestos from "./Presupuesto.js"
import Detalle from "./DetallePres.js"

//Elementos del material-ui


  class VerPresupuestos extends Component {
  constructor(props) {
    super(props);
    this.state = ({ FechaDesde: '' ,
                    FechaHasta: '',
                    Sucursal: '',
                    Rubro: '',
                    Situaciones: '',

  })
     this.procesar = this.procesar.bind(this);
     this.cambioFechaDesde =this.cambioFechaDesde.bind(this);
     this.cambioFechaHasta =this.cambioFechaHasta.bind(this);
     this.cambioSucursal =this.cambioSucursal.bind(this);
     this.cambioRubro =this.cambioRubro.bind(this);
     this.cambioSituaciones =this.cambioSituaciones.bind(this);

  }

  render() {
    return (
      <div className="Consres">


                <div className="Conres-body">
                      <form onSubmit={this.procesar}>
                        <table className="Conres-table">
                          <tr>
                               <td>  Desde:  </td>
                               <td >  Hasta: </td>
                               <td>Sucursal:</td>
                               <td>Rubro:</td>
                               <td>Situaciones: </td>
                               <td>Sin OT:</td>
                          </tr>
                          <tr>
                               <td > <input id="date" type="date" value={this.state.FechaDesde} onChange={this.cambioFechaDesde} /></td>

                               <td > <input id="date" type="date" value={this.state.FechaHasta} onChange={this.cambioFechaHasta} /></td>

                               <td><select name="Seleccione"><option value="">(TODAS)</option></select></td>

                               <td><select name="Seleccione"><option value="">(TODOS)</option></select></td>
                               <td><select name="Situaciones"><option value="">Situaciones</option></select></td>

                               <td><select name="Seleccione"><option value="">(AMBOS)</option></select></td>
                               <td><input type="Image" title="Actualizar" src={refresh} className="Consres-logo" alt="refresh"  height="25" width="25" /></td>
                            
                           </tr>
                        </table>
                      </form>
                        <table className="Consres-Recibos">
                              <td> <Presupuestos />  </td>
                        </table>

                        <table className="Conres-table2">
                            <tr>
                                <td ><Detalle /> </td>
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
                        +this.state.Sucursal + ' ' +
                        +this.state.Rubro + ' ' +
                        +this.state.Situaciones
                      );
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
    cambioRubro(e) {
      this.setState( {
        Rubro:  e.target.value
      })
    }
    cambioSituaciones(e) {
      this.setState( {
        Situaciones:  e.target.value
      })
    }
  };


export default VerPresupuestos;
