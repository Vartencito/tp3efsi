import React from 'react';
import '../App.css';
import Detalles from '../components/Detalles';
import {useParams} from 'react-router-dom';

const Detalle =()=>{

    const {id} = useParams();

    return(
        <>
            <Detalles id = {id}/>
        </>
    );
}

export default Detalle;