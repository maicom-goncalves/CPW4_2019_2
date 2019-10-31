import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../src/components/Menu';
import rotas from '../constants/rotas';
import axios from 'axios';
import AnimeService from '../services/AnimeService'
import './anime.scss';
import anterior1 from'../img/anterior1.png'
export default class ListaAnime extends Component {

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
                    
        return (
            <div>
                <Menu paginaAnterior="/" titulo="ANIME-HOUSE" logo={anterior1}/>            
                
                {this.state.animes.map(anime => (
                    <div className="cartao">
                             <img className="img" src={anime.image_url}/>

                             <div className="card_principal">
                                <h4 className="card_titulo" >{anime.title} </h4>
                                <p className="card_texto">{anime.synopsis}</p>
                             </div>
                        </div>       
                ))}

            </div>
            
           
        );
    }
}
