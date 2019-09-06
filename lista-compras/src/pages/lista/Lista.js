import React, { Component } from 'react';
import Menu from '../../components/menu/Menu';
import anterior from '../../img/anterior.png';
class Lista extends Component {
    render() {
        return (
            <div>
                <Menu
                logo={anterior}
                paginaAnterior="/"
                
                titulo="Minha lista"/>
            </div>
        );
    }
}

export default Lista;