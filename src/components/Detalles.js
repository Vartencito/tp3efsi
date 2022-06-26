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
            <div className="row justify-content: space-evenly">
                <div className="col-md-3">
                    <img className="imagenPelicula imagenDetalle" src={urlImagen} alt="asg" style={{marginRight: 10}}/>
                </div>
                <div className="col-md-9">
                    <h3>{pelicula.title}</h3>
                    <h6 style={{fontSize:23}}>"{pelicula.tagline}"</h6>
                    <p style={{fontSize:19}}> 
                    {pelicula.overview }
                    </p>
                    <p style={{fontSize:19}}><strong> Presupuesto: </strong> ${pelicula.budget}</p>
                    <p style={{fontSize:19}}><strong>Recaudación: </strong> ${pelicula.revenue}</p>
                    <p style={{fontSize:19}}><strong>Fecha de Estreno: </strong> {pelicula.release_date}</p>
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
