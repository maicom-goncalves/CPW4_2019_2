import React from 'react';

import './App.scss';
<<<<<<< HEAD
import Rotas from './Rotas';


const App = () =>  <Rotas/>;
=======
import Banner from './Banner';

import Conteudo from './Conteudo';
import {
  BrowserRouter
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="container">
          <div>
            <div className="row">
              <div className="col" id="banner">
                <Banner />
              </div>
            </div>
            <div className="row">
              <div className="col-md-10" id="conteudo">
                <Conteudo />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}
>>>>>>> cd0e57727399ac659aa49e8a948f57b1759f1d50

export default App;