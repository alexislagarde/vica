import React from 'react';
import {Link, HashRouter} from 'react-router-dom';
import './App.css';
//NOTA: ACORDARSE < a href= LINK en react
function Botonnav() {
  return (
          <HashRouter>
              <div className="Container-App-button">
                    <Link to={"/MainMenu"}><button className="Boton-Login">Ingresar</button></Link>
             </div>
         </HashRouter>
             );
    }
// export const Botonnav = (props) => {
// return   (
//             <div className="App-button">
//                 <Link to={"/Consres"}><button>Ingresar</button></Link>
//             </div>
//       );
// }

export default Botonnav;
