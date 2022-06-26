import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';

const Pelicula =(props)=>{ 

    const {id, src, titulo} = props;
    const urlImagen = "https://image.tmdb.org/t/p/original/" + src;
    
return(
    <>
        <div className='item'>
            <NavLink to={`/Detalle${id}`}>
            <img className="imagenPelicula" src={urlImagen} alt={titulo} />
            <div className='item2 allign-items justify-content-center'> 
                <strong><p className='textoHover'>{titulo}</p></strong>
            </div>
            </NavLink>
        </div>
    </>
);

}
export default Pelicula;