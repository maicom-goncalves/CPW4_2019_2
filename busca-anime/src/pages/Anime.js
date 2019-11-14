import React, { Component } from 'react';
import anime3 from '../img/anime3.png';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './anime.scss';
import rotas from '../constants/rotas';

import AnimeService from '../services/AnimeService';

export default class componentName extends Component {
    constructor(props){
        super(props);
    
        this.state= {
            animes: [],
            anime: this.props.location.state.anime.nome 
        };
        this.service = new AnimeService();
      }
    
     async componentDidMount(){
        let URL = 'https://api.jikan.moe/v3/search/anime?q=' + this.state.anime; 
        axios.get(URL)
       .then(res => {
           const animes = res.data.results;
           console.log(animes)
           this.setState({animes});
        })
        .catch(ex => {
            console.log('erro', ex)
        });
    }
    
    render() {
        const animeList =
            this.state.animes.map(anime => (
                <Link
                    to={
                        {
                            pathname: rotas.ANIME,
                            state: { anime }
                        }
                    }
                    key={anime.mal_id}>
                    <div className="icon">
                        <img className="imagem" src={anime.image_url} alt="imagem-do-anime" />
                        <div className="text">{anime.title} </div>
                        <div className="text">{anime.synopsis}</div>
                        <div className="text">{anime.type}</div>
                        <div className="text">{anime.episodes}</div>
                        <div className="card_texto">{anime.start_date}</div>
                        <div className="card_texto">{anime.end_date}</div>
                    </div>
                </Link>
            ));
                    
        return (
            <div>
                <Menu paginaAnterior="/" titulo="ANIME-HOUSE"  logo={anime3}/>            
                
               {animeList}

            </div>
            
           
        );
    }
}
