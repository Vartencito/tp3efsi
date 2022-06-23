import React from "react";
import '../App.css';

const Header = () => {
    return (
        <>
        <div className="marginHeader">
        <div className='containerHeader'>
        <div className='container1'>
          <div className='row'>
            <div className='col-md-12 titulo'>
              ¡Bienvenido a Pelispedia!
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 subtitulo'>
              Su página favorita para encontrar peliculas y series.
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 '>
              <div className="md-form active-cyan-2 mb-3 divsearchbar">
                <input className="form-control searchbar" type="text" placeholder="Busca tu película" aria-label="Search"/>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 buscador'>
              <button type="button" className="btn btn-lg boton">Buscar</button>
            </div>
          </div>
        </div>
      </div>
      </div>
        </>
    );
}

export default Header;