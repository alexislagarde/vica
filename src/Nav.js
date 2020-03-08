import React from 'react';
import {Link} from 'react-router-dom';
//NOTA: ACORDARSE < a href= LINK en react
export const Nav = (props) => {
return  (
          <nav className= "navbar navbar= default">
            <div className="container">
              <div className="navbar-header">
                  <ul className="nav navbar-nav">
                      <li><Link to={"/"}>Home</Link></li>
                 </ul>
               </div>
              </div>
        </nav>
      );
}

export default Nav;
