import React, { Component } from 'react';
import anterior from '../img/anterior.png';
import Menu from '../components/Menu';

export default class componentName extends Component {
    render() {
        return (
            <div>
                <Menu
                    logo={anterior}
                    paginaAnterior="/"

                    titulo="Minha lista" />
                <h3 id="nomeLista"></h3>
                <form>
                    <input onChange={this.filtrarItens} name="filtro"
                        type="text/" />
                </form>
            </div>
        );
    }
}
