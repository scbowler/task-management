import React from 'react';
import { Route, Switch } from 'react-router-dom';
import lazyLoad from '../hoc/lazy_load';

export default props => (
    <Switch>
        <Route exact path="/" component={
            lazyLoad({
                load: () => import('./home'),
                name: 'home'
            })
        }/>
        <Route path="/account" component={
            lazyLoad({
                load: () => import('./account'),
                name: 'account'
            })
        }/>
        <Route component={
            lazyLoad({
                load: () => import('./general/404'),
                name: 'not-found'
            })
        }/>
    </Switch>
)
