import React from 'react';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import CatImages from './CatImages';
import Memes from './Memes';

function App() {
  return (
    <div className='container-flex justify-content-center'>
      <div className='row bg-danger bg-gradient'>
        <h1 className="col text-center">Cat Meme Generator</h1>
        <h6 className='col-12 text-center'>A phase 4 project by Kelly</h6>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats" element={<CatImages />} />
          <Route path="/memes" element={<Memes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
