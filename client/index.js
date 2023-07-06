import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App.jsx';
import styles from './styles/styles.scss';
import Login from "./components/Login.jsx";
import { Register } from "./components/Register";

// uncomment so that webpack can bundle styles
//console.log('123');
//render(<App />, document.getElementById('app'));
const div = document.getElementById('app');
const root = createRoot(div);
root.render(
<BrowserRouter>
{/* <Routes>
          <Route exact path = '/login' element = {<Login />}/>
          <Route exact path = '/register' element = {<Register />}></Route>
</Routes> */}
<App className='app'/>
</BrowserRouter>
);
