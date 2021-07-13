import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import repositorios from './components/Repositorios';
import Home from './pages/Home';

export default function rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component= {Home} />
                <Route path='/repositorios' component={repositorios} />
            </Switch>
        </BrowserRouter>
    )
}