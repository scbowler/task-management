import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import AppRoutes from './app_routes';
import Nav from './general/nav';
import '../assets/css/app.scss';

const App = () => (
    <div className="app">
        <Nav/>
        <AppRoutes/>
    </div>
);

export default App;
