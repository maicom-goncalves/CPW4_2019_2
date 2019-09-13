import React, { Component } from 'react';
import{
  Switch,
  Route,
  Redirect
}from 'react-router-dom';
import Home from './pages/Home';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';
export default class componentName extends Component {
  render() {
    return (
      <Switch>
      <Route name="home" path="/Home" component={Home}/>
      <Route name="pagina1" path="/Pagina1" component={Pagina1}/>
      <Route name="pagina2" path="/Pagina2" component={Pagina2}/>
      <Redirect from="/*" to="home"/>
  </Switch>
      
    );
  }
}
