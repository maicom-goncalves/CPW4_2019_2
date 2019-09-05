import React, { Component } from 'react';
import Menu from '../menu/Menu';

import logo from '../../img/logo.png';
import ListaService from '../../services/ListaService';
import { Link } from 'react-router-dom';

import './Lista.scss';
import adicionar from '../../img/adicionar.png';
class Listas extends Component {
    /**
    * Toda vez que criar um construtor
    * lembre se de invocar a classe mãe com o "super"
    */
    constructor() {
        super();
        this.state = {
            listas: []
        }
        this.service = new ListaService();

    }
    //" componentDidMount " --invocar antes do componente ser montado
    async componentDidMount() {
        const listas =
            await this.service.recuperarListas();
        this.setState({ listas });

    }
    render() {
        const listas = this.state.listas.map(lista => (
            <div className="item" key={lista._id}>{lista.nome}</div>
        ));
        return (
            <div>
                <Menu
                    logo={logo}
                    paginaAnterior="/"
                    titulo="Lista de Compras"></Menu>
                <div className="container">
                    <div>

                        {
                            /**
                             * neste trecho de codigo o operador AND (&&) atua como um
                             * operador de ligação entre a condição lógica e o codigo 
                             * de apresentação a ser renderizado.
                             */
                            (!this.state.listas) &&
                            <h2>Minhas Listas</h2>
                        }
                        {
                            this.state.listas &&
                            <p id="menssagemSEmLista">Comece já a sua primeira lista de compras!</p>
                        }
                        <div id="listagem">{listas}</div>
                        <div id="areaBotao">
                            <Link to="/criarlista">
                                <img src={adicionar} alt="Nova lista" id="botaoNovaLista" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Listas;