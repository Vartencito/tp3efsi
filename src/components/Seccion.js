import React, {useEffect, useState} from 'react'
import Categorias from './Categorias'
import '../App.css'
import Connections from '../Conncections'
import Pelicula from './Pelicula';

const Seccion =()=>{

    const [peliculasPopulares, setPeliculasPopulares] = useState([]);
    // const [TVPopulares, setTVPopulares] = useState([]);

    useEffect(() => {
        obtenerPeliculasPopulares();
        // obtenerTVPopulares();
    },[]);

    // const obtenerTVPopulares = ()=>{
    //     try{
    //         const res = Connections.getTVPopulares();
    //         res.then(data => {
    //         setTVPopulares(data.results);
    //         }).catch(err => {
    //         console.log(err);
    //         });
    //     } catch(error){
    //         console.log(error);
    //     }
    // };

    const obtenerPeliculasPopulares=()=> {
        try{
            const res = Connections.getPeliculasPopulares();
            res.then(data => {
                setPeliculasPopulares(data.results);
            }).catch(err => {
                console.log(err);
            });
        } catch(error){
            console.log(error);
        }
    }
    
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
                                <Pelicula src={pelicula.poster_path} titulo={pelicula.title || pelicula.name} id={pelicula.id}/>
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