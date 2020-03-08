import  React, {Component}  from 'react';

import LogoVica from "./Imagenes/LogoPie.jpg";
import LogoFb from "./Imagenes/IconoFace.png";
import LogoTel from "./Imagenes/IconoTw.png";
import Sucursal from "./Imagenes/tire.png"


class PiePagina extends Component {
  render() {
    return (
        <div className="Container-PiePagina">
              <div className="Container-Logo" > <img className="Logo-PiePagina" align="left" src={LogoVica} alt="vica-Logo" /> </div>
              <div className="PiePagina">
                  <p><img src={Sucursal} alt="Sucursales" /> </p>
                  <p> Sucursales: </p>

                          <p>
                          <a  title="Ir a Google Maps" className="linkmaps" target="_blank" rel="noopener noreferrer" href="https://www.google.com.ar/maps/place/Vica+Neum%C3%A1ticos+y+Servicios+S.A.+(Suc.+3+de+Abril)/@-27.4745559,-58.8461667,17z/data=!4m5!3m4!1s0x94456cbdf41cf7d7:0x8ea4262985dc604e!8m2!3d-27.4745559!4d-58.843978" >
                          Av. 3 de abril 573 </a> Tel: 4-467734 Fax: 4-468929</p>
                          <a  title="Ir a Google Maps"  target="_blank" rel="noopener noreferrer"  className="linkmaps" href="https://www.google.com.ar/maps/place/Vica+Neum%C3%A1ticos+y+Servicios+S.A./@-27.4816322,-58.7858307,17z/data=!4m12!1m6!3m5!1s0x94456cbdf41cf7d7:0x2f64eed32f62b84b!2sVica+Neum%C3%A1ticos+y+Servicios+S.A.!8m2!3d-27.481637!4d-58.783642!3m4!1s0x94456cbdf41cf7d7:0x2f64eed32f62b84b!8m2!3d-27.481637!4d-58.783642">
                          Ruta 12 y A. Mazza Km.1031 </a>
                          Tel 4-451030 Fax: 4-456082

              </div>
              <div className="Container-Redes" align="right">
                    <a rel="noopener noreferrer" title= "Ir a Fb" target="_blank" href="https://www.facebook.com/vicaneumaticossa"><input align="left" type="image" alt="facebook-vica" src={LogoFb} /></a>
                    <input title="3794-467734"  align="left" type="image" alt="Telefono-vica" src={LogoTel} />
              </div>
        </div>
    );
  }
}

export default PiePagina;
