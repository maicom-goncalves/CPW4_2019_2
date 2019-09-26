import React, { Component } from 'react';
import Menu from '../../components/menu/Menu';
import anterior from '../../img/anterior.png';
import ListaService from '../../services/ListaService'
class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: this.props.location.state.lista,
            itensFiltrados :[]
        };
        this.service = new ListaService();
    }
    /**
     * aplica o filtro do usuário nos
     * itens de lista
     */
    filtrarItens = (event) => {
        //pega o valor digitado do campo de filtro
        let filtro = event.target.value;
        let itensFiltrados = this.service.recuperarItens(filtro);
        console.log(itensFiltrados);
    }
    render() {
        let { lista } = this.state;
        return (
            <div>
                <Menu
                    logo={anterior}
                    paginaAnterior="/"

                    titulo="Minha lista" />
                <h3 id="nomeLista">{lista.nome}</h3>
                <form>
                    <input onChange={this.filtrarItens} name="filtro"
                        type="text/" />
                </form>
            </div>
        );
    }
}

export default Lista;