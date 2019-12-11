import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Menu from '../../components/menu/Menu';
import paginaAnterior from '../../img/paginaAnterior.png';
import ListaService from '../../services/ListaService';
import './Lista.scss';
import incluir from '../../img/incluir.png';
import remover from '../../img/lixeira.png';

export default class Lista extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lista: this.props.location.state.lista,
            itensFiltrados: [],
            itemSelecionado: {}

        };

        this.service = new ListaService();
    }

    /**
     * Aplica o filtro do usuário
     * nos itens de lista
     */
    filtrarItens = (event) => {
        // Pega o valor digitado no campo de filtro
        let filtro = event.target.value;
        let itensFiltrados =
            this.service.recuperarItens(filtro);
        this.setState({ itensFiltrados });
    }

    /**
     * Inclui um novo item na lista
     */
    incluirItem = (item, key) => {
        let quantidade = document.getElementById(`quantidade${key}`).value;
        item.quantidade = parseFloat(quantidade);
        let { lista } = this.state;
        /**
         * Se a lista já possui o vetor de
         * itens, mantém o vetor. Caso contrário,
         * cria o vetor de itens na lista.
         */
        lista.itens = lista.itens ? lista.itens : [];
        // Inclui o novo item
        const descricao = item.descricao;
        const resposta = lista.itens.find(
            item => descricao === item.descricao
        );
        if (!resposta) {
            lista.itens.push(item);
        }

        const service = new ListaService();
        this.setState({ lista });
        service.atualizar(lista);
    }
    submit = (isToggleOn,) => {
        confirmAlert({
          title: 'Excluir',
          message: 'Deseja excluir este produto ?',
          buttons: [
            {
              label: 'Sim'
            },
            {
              label: 'Não'
            }
          ]
        });
      };
      delete(id){
        this.setState(this.itens)
     }


    render() {

        let {
            lista,
            itensFiltrados
        } = this.state;

        const listaItensFiltrados = itensFiltrados.map((item, key) => (
            <div key={key} className="itemFiltrado">
                <div id="parteUm">
                  <span> {item.descricao} </span>
                </div>

                <input
                    value={this.defaultValue}
                    ref={this.input}
                    type="number"
                    name={`quantidade${key}`}
                    min="0.01"
                    id={`quantidade${key}`} />

                <button onClick={() => this.incluirItem(item, key)}>
                    <img src={incluir} alt="Incluir" />
                </button>
                <span>{item.unidade}</span>
            </div>
        ));

        const listaItens = lista.itens ? lista.itens.map((item, key) => (

            <li key={item.id}>
                   <input id="confirm" type="checkbox"></input>

                   {`${item.quantidade} ${item.unidade} de ${item.descricao}`}

                    <button onClick={this.submit }>
                      <img  src={remover} alt="Remover" />
                    </button>
            </li>
        )) : [];


        return (
            <div>
                <Menu
                    logo={paginaAnterior}
                    paginaAnterior="/"
                    titulo="Minha lista" />

                <div className="conteiner">
                    <h3 id="nomeLista"><b>{lista.nome}</b></h3>

                    <form>
                        <input
                            placeholder="Digite o item"
                            onChange={this.filtrarItens}
                            name="filtro"
                            type="text" />
                    </form>

                    <div className="listagem">
                        {listaItensFiltrados}
                    </div>
                    <div className="itens-compra">
                        <br/>
                        <ul>

                            <li>{listaItens}</li>

                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}
