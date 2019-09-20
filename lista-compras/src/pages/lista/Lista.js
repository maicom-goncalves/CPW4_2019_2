import React, { Component } from 'react';
import Menu from '../../components/menu/Menu';
import anterior from '../../img/anterior.png';
class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: this.props.location.state.lista
        };
    }
    render() {
        return (
            <div>
                <Menu
                    logo={anterior}
                    paginaAnterior="/"

                    titulo="Minha lista" />
                Lista
            </div>
        );
    }
}

export default Lista;