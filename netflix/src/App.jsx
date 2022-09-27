import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFund from './pages/NotFund';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact element={<Netflix />} /> */}
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Register />} />
        <Route path="*" exact element={<NotFund />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
