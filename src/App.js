import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Encyclopedia from './components/pages/Encyclopedia';
import Survey from './components/pages/Survey';
import Treestagram from './components/pages/Treestagram';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/encyclopedia' element={<Encyclopedia></Encyclopedia>} />
          <Route path='/survey' element={<Survey></Survey>} />
          <Route path='/treestagram' element={<Treestagram></Treestagram>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}


export default App;



