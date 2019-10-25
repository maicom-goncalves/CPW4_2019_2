import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Pesquisar from './pages/Pesquisar';
import VisualizarSeries from './pages/VisualizarSerie';

const Rotas = () => (
   <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Pesquisar}/>
            <Route exact path="/serie" component={VisualizarSeries}/>
        </Switch>
   </BrowserRouter>
);

export default Rotas;