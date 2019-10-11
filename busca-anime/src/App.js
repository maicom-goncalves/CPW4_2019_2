import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
   constructor(props) {
        super(props);
        this.state = {
            lista: this.props.location.state.lista,
            itensFiltrados :[]
        };
        this.service = new ListaAnime();
    }
    /**
     * aplica o filtro do usuário nos
     * itens de lista
     
    filtrarItens = (event) => {
        //pega o valor digitado do campo de filtro
        let filtro = event.target.value;
        let itensFiltrados = this.service.recuperarItens(filtro);
        console.log(itensFiltrados);
    }*/
  return (
   <div>
    <h3 id="nomeLista">{lista.nome}</h3>
                <form>
                    <input onChange={this.filtrarItens} name="filtro"
                        type="text/" />
                </form>
   </div>
  );
}

export default App;
