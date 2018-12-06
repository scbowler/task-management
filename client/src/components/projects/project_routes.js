import React from 'react';
import { Route, Switch } from 'react-router-dom';
import auth from '../../hoc/auth';
import lazyLoad from '../../hoc/lazy_load';

export default ({ match: { path } }) => (
    <Switch>
        <Route exact path={path} component={
            auth(lazyLoad({
                load: () => import('./projects'),
                name: 'projects'
            }))
        } />
        <Route path={`${path}/:project_id`} component={
            auth(lazyLoad({
                load: () => import('./full_project'),
                name: 'projects/project_id'
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