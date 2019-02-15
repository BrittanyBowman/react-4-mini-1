import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Route2 from './components/Route2';
import Route3 from './components/Route3';
import NotFound from './components/NotFound';

const routes = (
    <Switch>
        <Route path="/" exact render={() => <div>foo</div>} />
        <Route path="/login" component={Login} />
        <Route path="/2" component={Route2} />
        <Route path="/3" component={Route3} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
        {/* <Route component={NotFound} /> */}
    </Switch>
);

export default routes;
