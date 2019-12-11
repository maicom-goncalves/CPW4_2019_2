import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Listas from './pages/lista/Listas';
import Lista from './pages/lista/Lista';
import CriarLista from './pages/lista/CriarLista';
import EditarLista from './pages/lista/EditarLista';
import ROTAS from './constants/rotas';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={ROTAS.INICIO} component={Listas} />
            <Route exact path={ROTAS.LISTA} component={Lista} />
            <Route exact path={ROTAS.CRIAR_LISTA} component={CriarLista} />
            <Route exact path={ROTAS.EDITAR_LISTA} component={EditarLista} />
        </Switch>
    </BrowserRouter>
);
export default Rotas;