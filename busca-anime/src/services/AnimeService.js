import axios from 'axios';
import titles from './titles';


export default class AnimeService {
    constructor() {
        this.animes = [];
        this.api = axios.create({
            baseURL: 'https://api.jikan.moe/v3/search/anime?q='

        });
    }
    async recuperarAnime() {
        let resposta = await this.api.get('/');
        this.animes = resposta.data;
        return this.animes;
    }
    recuperarAnimes(termo) {
        if (!termo) {
            return [];
        }
        termo = termo.toLowerCase();
       
        let animesFiltrados = titles.filter(anime => {
            let title = anime.title.toLowerCase();
            return title.includes(termo);
        });

        return animesFiltrados;
    }
}