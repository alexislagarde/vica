import React from 'react';
import {Link, HashRouter} from 'react-router-dom';
import'./Estilos/Consres.css';
//NOTA: ACORDARSE < a href= LINK en react

import IconoHome from "./Imagenes/IconoHome48.png"
import IconoAtras from "./Imagenes/IconoAtras.png"

export const Nav = (props) => {
return  (
  <HashRouter>
      <div className="NavegationHeader">
        <Link to="/"><input title="Cerrar Sesion"  type ="image" className="IconosAtras" src={IconoAtras} alt="Cerrar Sesion" /></Link>
        <Link to="/"><input width="30px" align="left" title="Ir a Home" type ="image"  className="IconoHome" src={IconoHome} alt="Ir a Home" /></Link>
     </div>
  </HashRouter>
      );
}

export default Nav;
