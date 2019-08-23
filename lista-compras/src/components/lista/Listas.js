import React, { Component } from 'react';
import Menu from '../menu/Menu';

import logo from '../../img/logo.png';
import ListaService from '../../services/ListaService';
class Listas extends Component {
         /**
         * Toda vez que criar um construtor
         * lembre se de invocar a classe mãe com o "super"
         */
    constructor(){
        super();
        this.state={
            listas:[]
        }
        this.service=new ListaService();
        
    }
    //" componentDidMount " --invocar antes do componente ser montado
    componentDidMount(){
        const listas=this.service.recuperarListas();
        this.setState({ listas });

    }
    render() {
        const listas=this.state.listas.map( lista=>(
              <li key={lista._id}>{ lista.nome }</li>
            ));
        return (
            <div>
                <Menu
                logo={logo}
                paginaAnterior="/"
                titulo="Lista de Compras"></Menu>
               <div className="container">
                   <div>
                       <h2>Minhas Listas</h2>
                       <ul>{listas}</ul>
                   </div>
               </div>
            </div>
        );
    }
}

export default Listas;