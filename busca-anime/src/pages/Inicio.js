import React, { Component } from 'react';
import anime3 from '../img/anime3.png';
import  Menu from '../components/Menu';

import ROTAS from '../constants/rotas';
import './anime.scss';

export default class Inicio extends Component { 
  
    state = {
        nome: ''
    }

    aoAlterarNome = (event) => {
        const nome = event.target.value;
        this.setState({ nome });
        
    }

    consultar = (event) => { 
       event.preventDefault();

        const anime = this.state;
        this.props.history.push({ 
            pathname: ROTAS.LISTAANIME,
            state: { anime: anime }
          });
    }
 
  
    render() { 
      
        return ( 
            <div>
             <Menu 
              logo={anime3}
              paginaAnterior="/"
              titulo="ANIME-HOUSE"/>

            <div className="conteiner" onSubmit={this.consultar}>
                 <form  id="formNovaLista" >
                    <input 
                    id="buscador"
                    type="text" 
                    name="nome" 
                    value={this.state.nome}
                    required
                    placeholder="Digite o nome do seu anime"  
                    onChange={this.aoAlterarNome}
                    />
                    <input id="botao" type="submit" value="Buscar"  />
                  </form>    
              </div>  


           </div>
        )
    }
}