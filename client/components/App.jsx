import React, { useEffect, useState} from 'react';
import Login from "./Login.jsx";
import { Register } from "./Register";
import { Route, Routes, Link, useNavigate, BrowserRouter } from 'react-router-dom';
import Home from './Home.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/home' element={<Home />}></Route>
      </Routes>
    </>
  );
}
export default App;