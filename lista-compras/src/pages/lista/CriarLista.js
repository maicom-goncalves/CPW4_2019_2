import React, { Component } from 'react'
import Menu from '../../components/menu/Menu';
import paginaAnterior from '../../img/paginaAnterior.png';

import ListaService from '../../services/ListaService';
import ROTAS from '../../constants/rotas';

export default class CriarLista extends Component {
    state ={
        nome:''
    };
    aoAlterarNome = (event) =>{
        const nome = event.target.value;
        this.setState({ nome });
        console.log(this.state.nome);

    }
    salvar =(event) =>{
        //previni o comportamento padrão de recarrregar a pagina
        event.preventDefault();

        const service =new ListaService();
        const lista=this.state;
        service.salvar(lista);

        /*faz o emcaminhamneto
        para a pagina inicial
        */ 
       this.props.history.push(ROTAS.INICIO);
    }
    render() {
        return (
            <div>
                <Menu paginaAnterior="/" titulo="criar lista"
                logo={paginaAnterior}>
                </Menu>
                <form id="formNovaLista" onSubmit={this.salvar}>
                    <input
                    onChange={this.aoAlterarNome}
                    type="text"
                    name="nome"
                    value={this.state.nome}
                    required
                    placeholder="digite o nome da lista">
                    </input>    
                    <input type="submit" value="Criar"/>
                </form>
            </div>
        )
    }
}
