import axios from 'axios';

<<<<<<< HEAD
=======
//import itens from './itens';

>>>>>>> cd0e57727399ac659aa49e8a948f57b1759f1d50
const LIMITE_DE_ITENS = 5;

export default class ListaAnime {
    constructor() {
        this.listas = [];
        this.api = axios.create({
            baseURL: 'https://api.jikan.moe/v3/search/anime?q='
            
        });
    }
    async recuperarListas() {

        let resposta = await this.api.get('/');
        this.listas = resposta.data;
        return this.listas;

    }
}