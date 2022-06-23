import React, {useEffect, useState} from 'react'
import Categorias from './Categorias'
import '../App.css'
import Connections from '../Conncections'
import Pelicula from './Pelicula';

const Seccion =()=>{

    const [peliculasPopulares, setPeliculaPeliculasPopulares] = useState([]);
    
    useEffect(() => {
        try{
        const res = Connections.getPeliculasPopulares();
        res.then(data => {
            setPeliculaPeliculasPopulares(data.results);
        }).catch(err => {
            console.log(err);
        });
        }
        catch(error){
        console.log(error);
        }
    },[]);
    
    return (
        <>
            <div className='container'>
            <div className='seccion'>
                <Categorias />
                <div className='row justify-content-center'>
                    <div className='wrapper'>
                    {
                        peliculasPopulares.map(pelicula => {
                            return(
                                <Pelicula src={pelicula.poster_path} titulo={pelicula.title} id={pelicula.id}/>
                        )})
                    }
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Seccion;