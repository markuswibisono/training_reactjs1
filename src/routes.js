import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from './Home';

import DaftarUser from './DaftarUser';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/daftaruser" component={DaftarUser} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
