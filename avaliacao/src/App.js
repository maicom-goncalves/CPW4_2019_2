import React from 'react';

import './App.scss';
import Banner from './Banner';

import Conteudo from './Conteudo';
import Lateral from './Lateral';

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
              <div className="col-md-2" id="lateral">
                <Lateral />
              </div>
              <div className="col-md-10" id="conteudo">
                <Conteudo />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
