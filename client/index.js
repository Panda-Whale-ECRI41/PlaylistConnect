import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
import styles from './styles/styles.scss';

// uncomment so that webpack can bundle styles
//console.log('123');
//render(<App />, document.getElementById('app'));
const div = document.getElementById('app');
const root = createRoot(div);
root.render(
<Router>
<App className='app'/>
</Router>
);
