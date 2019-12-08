import axios from 'axios';
import itens from './itens';

const LIMITE_DE_ITENS_RETORNADOS = 5;

export default class ListaService {

    constructor() {
        this.listas = [];
        this.api = axios.create({
            baseURL: 'http://localhost:3001/listas'
        });

        this.apagar=this.apagar.bind(this);
    }

    async recuperarListas() {
        let resposta = await this.api.get('/');
        this.listas = resposta.data;
        return this.listas;
    }
    
    async salvar(lista) {
        await this.api.post('/', lista);
        
    }
    async atualizar(lista) {
        await this.api.put(`/${lista._id}`);
        
    }

    //testar metodo apagar
    async apagar(lista) {
        let resposta= this.api.delete(`/${lista._id}`);

       // this.listas = resposta.data;
       // return this.listas;  
    }


    recuperarItens(termo) {
        /**
         * Se não tem nenhum termo,
         * ou seja, nenhum filtro de consulta,
         * então retorna uma lista vazia.
         */
        if (!termo) {
            return [];
        }

        // Converte para minúsculo
        termo = termo.toLowerCase();
        // Função de filtragem
        let itensFiltrados = itens.filter(item => {
            let descricao = item.descricao.toLowerCase();
            return descricao.includes(termo);
        });

        if (itensFiltrados.length > LIMITE_DE_ITENS_RETORNADOS) {
            return itensFiltrados.slice(0, LIMITE_DE_ITENS_RETORNADOS);
        }

        return itensFiltrados;
    }

    //incluir item na lista
    async incluirItem (lista, item){
        await this.api.post('/', lista/item);
    }

}


