import React, { Component } from 'react'

import Menu from '../../components/menu/Menu';
import icone from '../../img/paginaAnterior.png';
import ListaService from '../../services/ListaService';
import ROTAS from '../../constants/rotas';

export default class EditarLista extends Component {

    state = {
        nome: ''
    }

    aoAlterarNome = (event) => {
        const nome = event.target.value;
        this.setState({ nome });
    }

    atualizar = (event) => {
        event.preventDefault();

        const service = new ListaService();
        const lista = this.state;
        this.setState({ lista });
        service.atualizar(lista);

        this.props.history.push(ROTAS.INICIO);
    }

    render() {
        return (
            <div>
                <Menu
                    paginaAnterior="/"
                    titulo="Atualizar Lista"
                    logo={icone} />

                <form id="formNovaLista" onSubmit={this.atualizar}>
                    <input
                        onChange={this.aoAlterarNome}
                        type="text"
                        name="nome"
                        value={this.state.nome}
                        required
                        placeholder="Digite o nome da lista" />
                    <input type="submit" value="Atualizar" />
                </form>

            </div>
        )
    }
}
