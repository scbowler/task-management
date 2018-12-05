import React from 'react';
import { Route, Switch } from 'react-router-dom';
import auth from '../../hoc/auth';
import lazyLoad from '../../hoc/lazy_load';

export default ({ match: { path } }) => (
    <Switch>
        <Route path={path} component={
            auth(lazyLoad({
                load: () => import('./projects'),
                name: 'projects'
            }))
        } />
        <Route component={
            lazyLoad({
                load: () => import('../general/404'),
                name: 'not-found'
            })
        } />
    </Switch>
);