import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Vampyr, Cyberpunk, Home, DnD } from './pages/index';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route path="/vampyr" component={Vampyr} />
                <Route path="/cyberpunk" component={Cyberpunk} />
                <Route path="/dnd" component={DnD} />
            </BrowserRouter>
        </div>
    );
}

export default Routes;