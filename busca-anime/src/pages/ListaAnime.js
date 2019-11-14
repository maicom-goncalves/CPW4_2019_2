import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../src/components/Menu';
import rotas from '../constants/rotas';
import axios from 'axios';
import AnimeService from '../services/AnimeService'
import './anime.scss';
import anterior1 from '../img/anterior1.png'
export default class ListaAnime extends Component {

    constructor(props) {
        super(props);

        this.state = {
            animes: [],
            anime: this.props.location.state.anime.nome
        };
        this.service = new AnimeService();
    }

    async componentDidMount() {
        let URL = 'https://api.jikan.moe/v3/search/anime?q=' + this.state.anime;
        axios.get(URL)
            .then(res => {
                const animes = res.data.results;
                console.log(animes)
                this.setState({ animes });
            })
            .catch(ex => {
                console.log('erro', ex)
            });
    }

    render() {

        return (
            <div>
                <Menu paginaAnterior="/" titulo="ANIME-HOUSE" logo={anterior1} />

                {this.state.animes.map(anime => (
                    <div className="cartao">
                        <div className="img">
                            <img src={anime.image_url} alt="imagem-do-anime" />
                        </div>


                        <div className="carton_principal">
                            <h4 className="carton_titulo" >{anime.title} </h4>
                            <div className="carton_texto">
                                <p id="sinopse">
                                    {anime.synopsis}
                                </p>
                                <p id="tipo"><b>TYPE--</b>{anime.type}</p>
                                <p id="episodios"><b>episodes--</b>{anime.episodes}</p>
                                <p id="data">
                                    <b>stard--</b>{anime.start_date}<br/>
                                    <b>end--</b>{anime.end_date}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}

            </div>


        );
    }
}
