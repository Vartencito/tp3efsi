import React from "react";
import '../App.css';

const Navbar =()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark colorNavbar fixed-top">
            <p className="navbar-brand">Pelispedia</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a href="/"><p className="nav-link" >Home <span className="sr-only">(current)</span></p></a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn  my-2 my-sm-0 colorSearch" type="submit">Search</button>
                </form>
            </div>
            </nav>
        </>
    );
}

export default Navbar;