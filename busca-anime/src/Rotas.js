import React from 'react';
import {BrowserRouter ,Switch,Route} from 'react-router-dom';

import ListaAnime from './pages/ListaAnime';
import Anime from './pages/Anime';
import Inicio from './pages/Inicio';

import ROTAS from './constants/rotas';

const Rotas= () =>(
    <BrowserRouter>
    <Switch>
      <Route exact path={ROTAS.INICIO} component ={Inicio}/>
      <Route exact path={ROTAS.ANIME} component={Anime} />
      <Route exact path={ROTAS.LISTAANIME} component={ListaAnime} />
    </Switch>   
   </BrowserRouter>

);

export default Rotas;