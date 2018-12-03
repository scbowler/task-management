import React from 'react';
import { Route, Switch } from 'react-router-dom';
import lazyLoad from '../../hoc/lazy_load';

export default ({match: { path }}) => (
    <Switch>
        <Route path={`${path}/sign-in`} component={
            lazyLoad({
                load: () => import('./sign_in'),
                name: 'account_sign_in'
            })
        }/>
        <Route path={`${path}/sign-up`} component={
            lazyLoad({
                load: () => import('./sign_up'),
                name: 'account_sign_up'
            })
        } />
        <Route component={
            lazyLoad({
                load: () => import('../general/404'),
                name: 'not-found'
            })
        }/>
    </Switch>
);
