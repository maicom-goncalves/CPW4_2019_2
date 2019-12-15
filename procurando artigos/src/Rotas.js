import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Pesquisar from './pages/Pesquisar';


const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route
                exact
                path="/"
                component={Pesquisar} />
            
        </Switch>
    </BrowserRouter>
);

export default Rotas;