import React from 'react';
import {BrowserRouter ,Switch,Route} from 'react-router-dom';

import Listas from './pages/Listas';
import Lista from './pages/Lista';
import ROTAS from './constants/rotas';

const Rotas= () =>(
    <BrowserRouter>
    <Switch>
      <Route exact path={ROTAS.INICIO} component={Listas} />
      <Route exact path={ROTAS.LISTA} component={Lista} />
    </Switch>   
   </BrowserRouter>

);

export default Rotas;