import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Player from './pages/Player';
import NotFund from './pages/NotFund';
import Movies from './pages/Movies';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact element={< />} /> */}
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Register />} />
        <Route path="/movies" exact element={<Movies />} />

        <Route path="player" exact element={<Player />} />

        <Route path="*" exact element={<NotFund />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
