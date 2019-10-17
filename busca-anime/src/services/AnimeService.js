import axios from 'axios';
import titles from './titles';
const LIMITE_DE_titles = 5;

export default class AnimeService {
    constructor() {
        this.Animes = [];
        this.api = axios.create({
            baseURL: 'https://api.jikan.moe/v3/search/anime?q='
            
        });
    }
    async recuperarAnimes() {

        let resposta = await this.api.get('/');
        this.animes = resposta.data;
        return this.animes;

    }
    
    recuperarTitles(termo) {
        
        if(!termo){
            return[];
        }
      
        termo = termo.toLowerCase();
        
    
        let titlesFiltrados= titles.filter(anime => {
            let aux = anime.title.toLowerCase();
            let title = aux;
            return title.includes(termo);
        });
        if (titlesFiltrados.length > LIMITE_DE_titles){
            return titlesFiltrados.slice(0,LIMITE_DE_titles);
        }
        return titlesFiltrados;

    }
}