import React from "react";
import '../App.css';

const Header = () => {
    return (
        <>
          <div className='row'>
      <p style={{color:"#fff", fontSize: 40}}> Global Films Database</p>
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
          </>
    );
}

export default Header;