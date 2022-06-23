// import react from 'react'
import '../App.css'

const Categorias =()=>{
    return (
        <>
             <div className='row'>
                    <div className='col-md-12 titulo'>
                    Popular
                    </div>
                    <div className="col-md-12">
                        <div className="category-head">
                            <ul>
                                <div className="category-title active streaming" id="culture">
                                    <li>Streaming</li>
                                    <span><i className="fas fa-theater-masks"></i></span>
                                </div>
                                <div className="category-title television" id="politics">
                                    <li>Television</li>
                                    <span><i className="fas fa-landmark "></i></span>
                                </div>
                                <div className="category-title alquiler" id="finance">
                                    <li>Alquiler</li>
                                    <span><i className="fas fa-chart-area "></i></span>
                                </div>
                                <div className="category-title cines" id="business">
                                    <li>Cines</li>
                                    <span><i className="fas fa-coins"></i></span>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
        
        </>
    );


}
export default Categorias;