import axios from 'axios';

export default class  SeriesService{
    constructor(){
        this.service=axios.create({
            baseURL:'https://api.tvmaze.com/search'
        });
    }
    pesquisar(nomeSerie){
        const consulta=`/shows?q=${nomeSerie}`;
        return this.service.get(consulta);
    }
}