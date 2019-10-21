import React, { Component } from 'react';
import anime3 from '../img/anime3.png';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import './anime.scss';
import rotas from '../constants/rotas';

import AnimeService from '../services/AnimeService';

export default class componentName extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //anime: this.props.location.state.anime,
            animesFiltrados: []
           
        };

        this.service = new AnimeService();
    }
    filtrarAnimes = (event) => {
        let filtro = event.target.value;
        let animesFiltrados = this.service.recuperarAnimes(filtro);
        this.setState({ animesFiltrados });
        console.log(animesFiltrados);
    }
    render() {

        let {
            anime,
            animesFiltrados
        } = this.state;
        
        const listaanimesFiltrados = animesFiltrados.map((anime, key) => (
           
            <div  key={anime.mal_id} >
                <img className="imagem" src={anime.image_url} />
                <div className="text">{anime.title} </div>
            </div>
        ));

       /* const listaAnimes = lista.animes? lista.animes.map((anime, key) => (
            <li key={key}>
                {`${anime.title}`}
            </li>
        )) : [];*/

        return (
            <div>
                <Menu
                    logo={anime3}
                    paginaAnterior="/"
                    titulo="ANIME-HOUSE" />

                <div className="conteiner">
                    
                    <form>
                        <input
                            placeholder="Digite o anime"
                            onChange={this.filtrarAnimes}
                            name="filtro"
                            type="text" />
                    </form>

                    <div className="listagem">
                        {listaanimesFiltrados}
                    </div>
                   
                </div>
            </div>
        );
    }
}
