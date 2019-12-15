import axios from 'axios';

export default class  ArtigosService{
    constructor(){
        this.service=axios.create({
            baseURL:'https://pt.wikipedia.org/w/'
        });
    }
    pesquisar(artigo){
        const consulta=`/api.php?action=opensearch&search=${artigo}`;
        return this.service.get(consulta);
    }
}