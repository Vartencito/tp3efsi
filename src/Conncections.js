import axios from "axios";

class Connections{
    constructor(){
        this.url = "https://api.themoviedb.org/3/";
        this.api_key = "42b2bd5600bf222df0335002cffaf06f";
        this.language = "en-US";
    }
    async getPeliculasPopulares(){
        const res = await axios.get(`${this.url}movie/popular?api_key=${this.api_key}&language=${this.language}&page=1`);
        const data = await res.data;
        return data;
    }
    async getDetallesPelicula(id){
        const res = await axios.get(`${this.url}movie/${id}?api_key=${this.api_key}&language=${this.language}`);
        const data = await res.data;
        return data;
    }
    // async getTVPopulares(){
    //     const res = await axios.get(`${this.url}tv/popular?api_key=${this.api_key}&language=${this.language}&page=1`);
    //     const data = await res.data;
    //     return data;
    // }
}

export default new Connections();