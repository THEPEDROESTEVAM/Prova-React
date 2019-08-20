import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './components/Search';
import Brasil from './components/Brasil';
import Esporte from './components/Esporte';
import Politica from './components/Politica';
import Economia from './components/Economia';

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Search}/>
        <Route exact path="/Brasil" component={Brasil}/>
        <Route exact path="/Esporte" component={Esporte}/>
        <Route exact path="/Politica" component={Politica}/>
        <Route exact path="/Economia" component={Economia}/>
    </BrowserRouter>
);

export default Routes;