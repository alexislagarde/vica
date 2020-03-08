import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import './Estilos/styles.css';

//Importar JS
import Consres from "./Consres.js"
import Constrab from "./Constrab.js"
import VerFacturas from "./VerFacturas.js"
import VerPresupuestos from "./VerPresupuestos.js"
import Encabezado from "./Encabezado.js";
import PiePagina from "./PiePagina.js"

//Iconos
import IconoRecibo from "./Imagenes/IconoRecibo.png";
import IconoFactura from "./Imagenes/IconoFactura.png"
import IconoPresupuesto from "./Imagenes/IconoPresupuesto.png"
import IconoOT from "./Imagenes/IconoOT.png"




class MainMenu extends Component {
  render() {
    return (
          <div className="MainMenu">
          <Encabezado />
            <Tabs defaultTab="vertical-tab-one" vertical>
            <TabList>
                <Tab tabFor="vertical-tab-one"><img src={IconoRecibo} alt="recibo" align="left" />Recibos</Tab>
                <Tab tabFor="vertical-tab-two"><img src={IconoOT} alt="orden de trabajo" align="left" />Ordenes de Trabajo</Tab>
                <Tab tabFor="vertical-tab-three"><img src={IconoFactura} alt="factura" align="left" />Facturas</Tab>
                  <Tab tabFor="vertical-tab-four"><img src={IconoPresupuesto} alt="presupuesto" align="left" />Presupuestos</Tab>
              </TabList>
              <TabPanel tabId="vertical-tab-one">
                <Consres />
              </TabPanel>
              <TabPanel tabId="vertical-tab-two">
                <Constrab />
              </TabPanel>
              <TabPanel tabId="vertical-tab-three">
                <VerFacturas />
              </TabPanel>
              <TabPanel tabId="vertical-tab-four">
                <VerPresupuestos />
              </TabPanel>
            </Tabs>
            <PiePagina />
          </div>

      )
  }
}



export default  MainMenu;
