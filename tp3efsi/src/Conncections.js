import axios from "axios";

class Connections{
    constructor(){
        this.urlPopulares = "https://api.themoviedb.org/3/movie/popular?";
        this.api_key = "42b2bd5600bf222df0335002cffaf06f";
        this.language = "en-US";
    }
    async getPeliculasPopulares(){
        const res = await axios.get(`${this.urlPopulares}api_key=${this.api_key}&language=${this.language}&page=1`);
        const data = await res.data;
        return data;
    }
    async getDetallesPelicula(id){
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}&language=${this.language}`);
        const data = await res.data;
        return data;
    }
}

export default new Connections();