import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import { Route } from 'react-router-dom';
import AppRoutes from './app_routes';

const App = () => (
    <div>
        <AppRoutes/>
    </div>
);

export default App;
