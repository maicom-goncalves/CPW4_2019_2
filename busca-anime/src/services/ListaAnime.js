import axios from 'axios';

import itens from './itens';

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