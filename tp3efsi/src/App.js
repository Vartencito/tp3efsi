import React from 'react';
import './App.css';
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path={`/Detalle:id`} element={<Detalle/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
