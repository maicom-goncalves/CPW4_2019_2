import React from 'react';

import './App.scss';
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

export default App;