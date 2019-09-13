import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Lateral.scss';

export default class componentName extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <button id="botao"> <Link to="/Home"><b>HOME</b></Link> </button>
          </li>
          <li>
            <button id="botao"><Link to="/Pagina1"><b>CONTATO</b></Link></button>
          </li>
          <li>
            <button id="botao"><Link to="/Pagina2"><b>BIO</b></Link></button>
          </li>
        </ul>
      </div>
    );
  }
}
