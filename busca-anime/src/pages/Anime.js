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
       
        
        /*this.state = {
            anime: this.props.location.state.anime,
            titlesFiltrados :[]
        };*/
        this.service = new AnimeService();
    }
    filtrarTitles = (event) => {
        let filtro = event.target.value;
        let titlesFiltrados = this.service.recuperarTitles(filtro);
        console.log(titlesFiltrados);
    }
    
        

    async componentDidMount() {
        const animes =
        await this.service.recuperarAnimes();
        this.setState({ animes });

    }
    
    render() {
        //let { anime } = this.state;
        
        return (
            <div>
                <Menu
                    logo={anime3}
                    paginaAnterior="/"

                    titulo="ANIME-HOUSE" />
                    <h3 id="nomeanime"></h3>
                    <form id="buscador">
                    <input onChange={this.filtrarTitles}></input>
                </form>  
            </div>
        );
        
}}
