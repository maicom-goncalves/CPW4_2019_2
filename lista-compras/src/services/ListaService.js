import axios from 'axios';

import itens from './itens';

const LIMITE_DE_ITENS = 5;

export default class ListaService {
    constructor() {
        this.listas = [];
        this.api = axios.create({
            baseURL: 'http://localhost:3001/listas'
            //baseURL: 'https://secret-plateau-95576.herokuapp.com/listas'
        });
    }
    async recuperarListas() {

        let resposta = await this.api.get('/');
        this.listas = resposta.data;
        return this.listas;

    }
    async salvar(lista) {
        let resposta = await this.api.post('/', lista);

    }

    recuperarItens(termo) {
        /*senão houiver nem um termo ,a função
         retornara uma lista vazia */
        if(!termo){
            return[];
        }
        //Converte para minusculo
        termo = termo.toLowerCase();
        //Função de filtragem
    
        let itensFiltrados= itens.filter(item => {
            let aux = item.descricao.toLowerCase();
            let descricao = aux;
            return descricao.includes(termo);
        });
        if (itensFiltrados.length > LIMITE_DE_ITENS){
            return itensFiltrados.slice(0,LIMITE_DE_ITENS);
        }
        return itensFiltrados;

    }
}