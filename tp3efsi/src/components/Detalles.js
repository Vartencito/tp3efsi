import React, {useState,useEffect} from 'react'
import Conncections from '../Conncections';
import {NavLink} from 'react-router-dom';

const Detalles=(props)=> {

    const {id} = props;

    const [pelicula, setPelicula] = useState({});

    useEffect(() => {
        try{
        const res = Conncections.getDetallesPelicula(id);
        res.then(data => {
            setPelicula(data);
        }).catch(err => {
            console.log(err);
        });
        }
        catch(error){
        console.log(error);
        }
    },[id]);

    const urlImagen = "https://image.tmdb.org/t/p/original/"+pelicula.poster_path;

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img className="imagenPelicula imagenDetalle" src={urlImagen} alt="asg" />
                </div>
                <div className="col-md-9">
                    <h3>{pelicula.title}</h3>
                    <h6>"{pelicula.tagline}"</h6>
                    <p>
                        Sinópsis: {pelicula.overview }
                    </p>
                    <p>Presupuesto: ${pelicula.budget}</p>
                    <p>Recaudación: ${pelicula.revenue}</p>
                    <p>Fecha de Estreno: {pelicula.release_date}</p>
                    <NavLink to="/">
                        <button className="btn  my-2 my-sm-0 colorSearch" type="submit">Volver al inicio</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default Detalles;
