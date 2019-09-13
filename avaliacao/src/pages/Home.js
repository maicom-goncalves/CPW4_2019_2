import React, { Component } from 'react';
import './Home.scss';
import dowload from '../img/download.png';
export default class componentName extends Component {
  render() {
    return (
      <div id="cabecalho">
         <h2>Fulado de Tal</h2> 
         <p>
           <img src={dowload}/>
         </p>
      </div>
    );
  }
}
